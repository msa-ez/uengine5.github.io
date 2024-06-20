---
description: ''
sidebar: 'getting-started'
prev: ''
next: ''
---

# 외부서비스와 BPM연동

## 1. 구성
APP에서 BPM으로 전달 하기 위해서는 APP에서 이벤트 처리를 할때 Message Broker를 통해서 메시지를 전달 해야 한다. 
Message broker를 통해서 이벤트를 publish 하면, 메시지 수신부이 BPM 에서 진행한다. 
APP은 단순히 업무화면 구성, 도메인 로직처리, 데이터 관리 같은 역할만 진행하며 이벤트 송신만 처리 한다.

![Condition](https://github.com/sooheon45/Image/assets/54785805/f53d548a-1c26-483e-90a2-e27e72cde6fa)
이미지 1) 구성도


## 2. 외부서비스(APP)
외부서비스(APP)에서는 BPM과 연동을하면서, 서로 독립적인 서비스로 유지 하지 위해서 아래와 같이 구성 되어 있습니다. 외부서비스(APP)와 BPM 통신 방식은 Message Broker통해서 통신을 하게 됩니다.

### 2.1 Message broker (Publisher/Subscriber)
Message Broker는 시스템간 비동기 통신을 가능하게 하여, 시스템의 독립성을 높이고, 결합도는 낮게 하여 시스템의 효율성을 향상시팁니다. 이러한 특성으로 인해 대규모 시스템, 분산 시스템, 마이크로서비스 아키텍처에 널리 사용됩니다.

* 비의존성
    APP에서 이벤트 메시지를 전송할 뿐, BPM 호출을 기다리지 않습니다.
* 장애차단
    BPM에서 오류및 중지가 되었더라도, APP에서의 영향이 없습니다. 
* 보장성
    중지된 BPM이 재실행 되더라도, 이전의 데이터가 반드시 처리가 되도록 보장합니다.

#### 2.1.1 Publisher
이벤트 메시지를 송신하는 역할로서 Message Broker의 형식에 따라서 전송 하는 부분 입니다. Message Broker의 메시지를 큐 방식으로 처리가 되는데, topic명을 지정하여 전송 하면 됩니다.    

```java
// 예시 1) Kafka를 통한 메시지 송신
public class AbstractEvent {

    public void publish() {
        KafkaProcessor processor = ItsmApplication.applicationContext.getBean(KafkaProcessor.class);
        MessageChannel outputChannel = processor.outboundTopic();

        outputChannel.send(
            MessageBuilder
                .withPayload(this)
                .setHeader(
                    MessageHeaders.CONTENT_TYPE,
                    MimeTypeUtils.APPLICATION_JSON
                )
                .setHeader("type", getEventType())
                .build()
        );
    }

    public void publishAfterCommit() {
        TransactionSynchronizationManager.registerSynchronization(
            new TransactionSynchronizationAdapter() {
                @Override
                public void afterCompletion(int status) {
                    AbstractEvent.this.publish();
                }
            }
        );
    }
}
```
해당 "예제1)" 코드는 AbstractEvent.java 파일로, 해당 클래스를 상속한 후 publishAfterCommit()을 실행 시키면 Message broker에 메시지를 전달하도록 하는 예제 입니다.


#### 2.1.2 Subscriber
메시지를 수신하는 역할로서 Message Broker의 특정 topic에 따라서 수신 하는 부분 입니다. 관심 있는 topic의 메시지가 발행될 때마다 수신되며, condition에 따라서 메시지를 분류 할 수 있습니다.

```java
// 예제 2) 메시지 수신부
@Service
public class EventListener {

    @StreamListener(
        value = Streams.INPUT, 
        condition = "headers['type'] == 'TroubleIssued'"
    )
    @ProcessTransactional
    public void troubleIssuedEvent(@Payload String eventBody, @Header("type") String typeHeader) {
        System.out.println("\n##### listener troubleIssuedEvent : " + eventBody + "\n");
        try {
            // 업무 실행 로직 구현.
        } catch(Exception e) {
            // Exception 처리
        }
    }
}
```
- @StreamListener
    - Spring Cloud Stream에서 사용되며, 메시지 브로커로부터 메시지를 수신할 리스너 메소드를 정의 할때 사용됩니다.
        - value: 메시지를 수신할 topic을 지정
        - condition: 메시지를 처리하기 전에 조건을 지정합니다.


### 2.2 화면 정의
외부서비스(APP)에서 제공하는 화면에 대한 정의하여, 라우터를 통한 접근이 가능하도록 URL 정보입니다.
    

## 3. 프로세스 모델링
"프로세스 정의"탭 에서 프로세스에 대한 정의를 진행 합니다. 프로세스를 정의하기 위해서 전체적인 TASK를 그리고, 각 TASK 마다 역할을 설정하여, 업무에 대한 내용을 정의 합니다.
    
### 3.1 외부 어플리케이션 설정

![setting userTask](https://github.com/sooheon45/Image/assets/54785805/7e09993e-e3a4-4c96-befc-d428a66fa42f)
이미지 2) User Task 설정

1. 상단에 tools 중 "Create task"를 클릭하여 task를 생성합니다. 
2. 생성된 task 클릭하여 "Change element" 클릭하여 "User Task"으로 변경 합니다.

![setting userTaskPanel](https://github.com/sooheon45/Image/assets/54785805/2e789577-171f-4fa2-8093-c4ab8b6ad359)
이미지 3) UserTask 판넬 설정

3. 해당 UserTask를 더블클릭하여 우측 판넬에 "외부 어플리케이션" 설정 합니다.
4. "외부 어플리케이션" 설정 후 항목 정의 합니다.

#### 3.1.1 "외부 어플리케이션" 설정
- URL
    - 화면에 대한 정의 하는 부분으로서, 외부 어플리케이션의 정의된 화면에 접근 URL정보 입니다.
- Event Type
    - 이벤트 타입을 정의 하는 부분으로서, 이벤트 발생시 어떤한 이벤트를 수신 할 지에 대한 타입의 정의하는 부분 입니다.
- Event Attributes
    - 메시지의 속성값 정의 하는 부분으로서, 수신된 메시지를 속성값에 맞게 처리 하기 위해서 정의하는 부분입니다.
- Event Mapping
    - 수신된 메시지에서 "Event Attributes"에 정의된 부분과 다른 정보를 매핑하는 역할으로서, 수신된 메시지에서 정의된 속성값을 추출하여 저장및 처리를 하기 위한 매핑 부분 입니다.

### 3.1.2 TASK의 Role 설정
업무(TASK)에 따라서 Role을 설정할 수 있습니다. Role의 설정은 Lane 단위로 가능 하며, 총 3가지의 옵션에 따라서 Role타입이 정의 됩니다.

- None
    - Role을 설정 하지 않음 (미설정)
- Role Resolution By IAM Scope
    - IAM에 정의 된 Scope에 따라서 Scope명 지정 ( Ex) Manager, Staff 등)
- Role Resolution By Direct user
    - 직접적인 유저 지정(Ex) xxx@email.com, xxx 등)

![scope 설정](https://github.com/sooheon45/Image/assets/54785805/4aeef47f-4a3d-4409-a215-d4a8d2387efa)
이미지 4) "manager" Lane 에서 manager scope 설정

### 3.2 실행방법
#### 3.2.1 프로세스 정의체계도 정의
1. "프로세스 정의체계도"탭으로 이동 합니다.
2. Mega프로세스, Major프로세스, Sub프로세스 을 분류를 합니다.
3. Sub프로세스 에서 사용할 프로세스를 저장 합니다.
![Sub프로세스](https://github.com/sooheon45/Image/assets/54785805/282e52f0-6df7-4f01-a0c1-c22142efd6ec)
이미지 5) Sub프로세스 에서 정의된 프로세스 저장

#### 3.2.2 실행
![실행](https://github.com/sooheon45/Image/assets/54785805/c914af68-e521-409b-a323-b700dc4a16f8)

1. Sub프로세스에 정의된 프로세스를 클릭하면, 해당 정의된 프로세스를 불러오게 됩니다.
2. 우측 상단에 플레이 버튼을 클릭하여 프로세스 실행합니다.
