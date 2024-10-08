---
description: ''
sidebar: 'getting-started'
---

# SOA (MSA) 아키텍처 예제 - Message

## 예제 영상
<iframe width="560" height="315" src="https://www.youtube.com/embed/bxkB-pkOpTQ?si=YRmhriPf_I49H1tw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 개요 
Message Event Notation과 REST API를 이용하여 외부 시스템과 연동하는 방법을 예제를 통해 확인한다.

## 예제 시나리오
장애 발생 시, 담당자 지정, 오류 내용 확인 후, 작업내역서 작성(외부 시스템), 처리 확인 완료의 단계로 진행된다.

## 예제 BPMN
<details>
  <summary>BPMN 보기</summary>

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:uengine="http://uengine" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_0bfky9r" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="16.4.0">
  <bpmn:collaboration id="Collaboration_0ketuy3">
    <bpmn:participant id="Participant_1o9wosn" processRef="Process_1oscmbn" />
    <bpmn:participant id="Participant_1vhtw3k" name="오류 작업 내역 관리" processRef="Process_0on1ux0" $type="bpmn:Participant">
      <bpmn:extensionElements>
        <uengine:properties>
          <uengine:json>{"serviceURL":"http://localhost:8087"}</uengine:json>
        </uengine:properties>
      </bpmn:extensionElements>
    </bpmn:participant>
    <bpmn:messageFlow id="Flow_1b35vsc" sourceRef="Event_0937ss0" targetRef="Event_1liy11t" />
    <bpmn:messageFlow id="Flow_1hda9cb" sourceRef="Event_1v118e8" targetRef="Event_00iut9o" />
  </bpmn:collaboration>
  
  <bpmn:process id="Process_1oscmbn" isExecutable="true">
    <bpmn:extensionElements>
      <uengine:properties>
        <uengine:variable name="Worker" type="Text">
          <uengine:json>{"defaultValue":""}</uengine:json>
        </uengine:variable>
        <uengine:variable name="Error" type="Text">
          <uengine:json>{"defaultValue":""}</uengine:json>
        </uengine:variable>
        <uengine:variable name="Status" type="Text">
          <uengine:json>{}</uengine:json>
        </uengine:variable>
      </uengine:properties>
    </bpmn:extensionElements>
    <bpmn:laneSet id="LaneSet_0cwgyi6">
      <bpmn:lane id="Lane_1f3275c" name="관리자" $type="bpmn:Lane">
        <bpmn:extensionElements>
          <uengine:properties>
            <uengine:json>{"roleResolutionContext":{"_type":"org.uengine.five.overriding.IAMRoleResolutionContext","scope":"manager"}}</uengine:json>
          </uengine:properties>
        </bpmn:extensionElements>
        <bpmn:flowNodeRef>Event_1z0qf6o</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Event_0pmhyq2</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Activity_0lwj0om</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Activity_1tz1c18</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_0cnpt7b" name="작업자" $type="bpmn:Lane">
        <bpmn:extensionElements>
          <uengine:properties>
            <uengine:json>{"roleResolutionContext":{"_type":"org.uengine.five.overriding.IAMRoleResolutionContext","scope":"manager"}}</uengine:json>
          </uengine:properties>
        </bpmn:extensionElements>
        <bpmn:flowNodeRef>Activity_0x6enn9</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Event_0937ss0</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Event_00iut9o</bpmn:flowNodeRef>
      </bpmn:lane>
    </bpmn:laneSet>
    <bpmn:startEvent id="Event_1z0qf6o">
      <bpmn:outgoing>Flow_0l0zoj6</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_0l0zoj6" sourceRef="Event_1z0qf6o" targetRef="Activity_0lwj0om" />
    <bpmn:sequenceFlow id="Flow_0nn4qnj" sourceRef="Activity_0lwj0om" targetRef="Activity_0x6enn9" />
    <bpmn:sequenceFlow id="Flow_1j42mu7" sourceRef="Activity_0x6enn9" targetRef="Event_0937ss0" />
    <bpmn:sequenceFlow id="Flow_1wveg9i" sourceRef="Event_0937ss0" targetRef="Event_00iut9o" />
    <bpmn:sequenceFlow id="Flow_0jf4xqm" sourceRef="Event_00iut9o" targetRef="Activity_1tz1c18" />
    <bpmn:endEvent id="Event_0pmhyq2">
      <bpmn:incoming>Flow_0l2xymz</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_0l2xymz" sourceRef="Activity_1tz1c18" targetRef="Event_0pmhyq2" />
    <bpmn:userTask id="Activity_0lwj0om" name="작업자 선택" $type="bpmn:UserTask">
      <bpmn:extensionElements>
        <uengine:properties>
          <uengine:json>{"parameters":[{"direction":"IN-OUT","variable":{"name":"Worker"},"argument":{"text":"Worker"}}]}</uengine:json>
        </uengine:properties>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0l0zoj6</bpmn:incoming>
      <bpmn:outgoing>Flow_0nn4qnj</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:userTask id="Activity_0x6enn9" name="오류내용 인지" $type="bpmn:UserTask">
      <bpmn:extensionElements>
        <uengine:properties>
          <uengine:json>{"parameters":[{"direction":"IN-OUT","variable":{"name":"Error"},"argument":{"text":"Error"}}]}</uengine:json>
        </uengine:properties>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0nn4qnj</bpmn:incoming>
      <bpmn:outgoing>Flow_1j42mu7</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:intermediateThrowEvent id="Event_0937ss0" name="작업 내역서 작성 요청" $type="bpmn:IntermediateThrowEvent">
      <bpmn:extensionElements>
        <uengine:properties>
          <uengine:json>{}</uengine:json>
        </uengine:properties>
      </bpmn:extensionElements>
      
      <bpmn:messageEventDefinition id="MessageEventDefinition_0f3qhct" />
    </bpmn:intermediateThrowEvent>
    <bpmn:intermediateCatchEvent id="Event_00iut9o" name="작업 내역서 작성 완료 수신" $type="bpmn:IntermediateCatchEvent">
      <bpmn:extensionElements>
        <uengine:properties>
          <uengine:json>{"correlationKey":"history","servicePath":"history"}</uengine:json>
        </uengine:properties>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_1wveg9i</bpmn:incoming>
      <bpmn:outgoing>Flow_0jf4xqm</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_0pxe7n6" />
    </bpmn:intermediateCatchEvent>
    <bpmn:userTask id="Activity_1tz1c18" name="작업 내역서 작성 완료 확인" $type="bpmn:UserTask">
      <bpmn:extensionElements>
        <uengine:properties>
          <uengine:json>{"parameters":[{"direction":"IN-OUT","variable":{"name":"Status"},"argument":{"text":"Status"}}]}</uengine:json>
        </uengine:properties>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0jf4xqm</bpmn:incoming>
      <bpmn:outgoing>Flow_0l2xymz</bpmn:outgoing>
    </bpmn:userTask>
  </bpmn:process>

  <bpmn:process id="Process_0on1ux0" isExecutable="false">
    <bpmn:task id="Activity_09u6k20" name="작업 내역서 작성" $type="bpmn:Task">
      <bpmn:extensionElements>
        <uengine:properties>
          <uengine:json>{}</uengine:json>
        </uengine:properties>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_00drr7g</bpmn:incoming>
      <bpmn:outgoing>Flow_1fzqzav</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_00drr7g" sourceRef="Event_1liy11t" targetRef="Activity_09u6k20" />
    <bpmn:sequenceFlow id="Flow_1fzqzav" sourceRef="Activity_09u6k20" targetRef="Event_1v118e8" />
    <bpmn:startEvent id="Event_1liy11t">
      <bpmn:outgoing>Flow_00drr7g</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_1hmq8nc" />
    </bpmn:startEvent>
    <bpmn:endEvent id="Event_1v118e8">
      <bpmn:incoming>Flow_1fzqzav</bpmn:incoming>
      <bpmn:messageEventDefinition id="MessageEventDefinition_1y6bk1d" />
    </bpmn:endEvent>
  </bpmn:process>
  
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_0ketuy3">
      <bpmndi:BPMNShape id="Participant_1o9wosn_di" bpmnElement="Participant_1o9wosn" isHorizontal="true">
        <dc:Bounds x="80" y="120" width="1018" height="250" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_1f3275c_di" bpmnElement="Lane_1f3275c" isHorizontal="true">
        <dc:Bounds x="110" y="120" width="988" height="125" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_0cnpt7b_di" bpmnElement="Lane_0cnpt7b" isHorizontal="true">
        <dc:Bounds x="110" y="245" width="988" height="125" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1z0qf6o_di" bpmnElement="Event_1z0qf6o">
        <dc:Bounds x="172" y="162" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0pmhyq2_di" bpmnElement="Event_0pmhyq2">
        <dc:Bounds x="962" y="162" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0sn28ng_di" bpmnElement="Activity_0lwj0om">
        <dc:Bounds x="260" y="140" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_060rqeu_di" bpmnElement="Activity_0x6enn9">
        <dc:Bounds x="420" y="270" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1p7vfle_di" bpmnElement="Event_0937ss0">
        <dc:Bounds x="582" y="292" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="563" y="254.5" width="73" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_07sc6sc_di" bpmnElement="Event_00iut9o">
        <dc:Bounds x="682" y="292" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="663" y="254.5" width="73" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0oyw50a_di" bpmnElement="Activity_1tz1c18">
        <dc:Bounds x="790" y="140" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0l0zoj6_di" bpmnElement="Flow_0l0zoj6">
        <di:waypoint x="208" y="180" />
        <di:waypoint x="260" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0nn4qnj_di" bpmnElement="Flow_0nn4qnj">
        <di:waypoint x="360" y="180" />
        <di:waypoint x="390" y="180" />
        <di:waypoint x="390" y="310" />
        <di:waypoint x="420" y="310" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1j42mu7_di" bpmnElement="Flow_1j42mu7">
        <di:waypoint x="520" y="310" />
        <di:waypoint x="582" y="310" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1wveg9i_di" bpmnElement="Flow_1wveg9i">
        <di:waypoint x="618" y="310" />
        <di:waypoint x="682" y="310" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0jf4xqm_di" bpmnElement="Flow_0jf4xqm">
        <di:waypoint x="718" y="310" />
        <di:waypoint x="754" y="310" />
        <di:waypoint x="754" y="180" />
        <di:waypoint x="790" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0l2xymz_di" bpmnElement="Flow_0l2xymz">
        <di:waypoint x="890" y="180" />
        <di:waypoint x="962" y="180" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Participant_1vhtw3k_di" bpmnElement="Participant_1vhtw3k" isHorizontal="true">
        <dc:Bounds x="80" y="410" width="600" height="250" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_09u6k20_di" bpmnElement="Activity_09u6k20">
        <dc:Bounds x="300" y="490" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_171hny1_di" bpmnElement="Event_1liy11t">
        <dc:Bounds x="212" y="512" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0ekav1f_di" bpmnElement="Event_1v118e8">
        <dc:Bounds x="452" y="512" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_00drr7g_di" bpmnElement="Flow_00drr7g">
        <di:waypoint x="248" y="530" />
        <di:waypoint x="300" y="530" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1fzqzav_di" bpmnElement="Flow_1fzqzav">
        <di:waypoint x="400" y="530" />
        <di:waypoint x="452" y="530" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1b35vsc_di" bpmnElement="Flow_1b35vsc">
        <di:waypoint x="600" y="328" />
        <di:waypoint x="600" y="390" />
        <di:waypoint x="230" y="390" />
        <di:waypoint x="230" y="512" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1hda9cb_di" bpmnElement="Flow_1hda9cb">
        <di:waypoint x="470" y="512" />
        <di:waypoint x="470" y="420" />
        <di:waypoint x="700" y="420" />
        <di:waypoint x="700" y="328" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>

  ```
</details>

## 예제 실행 과정

### Step 1: BPMN Process 작성
- **1.1** 아래 그림과 같이 2개의 Pool을 생성합니다. 오류 처리 Pool은 uEngine6가 동작 하는 Process, 오류 작업 내역 관리 Pool 은 외부 시스템의 역할을 합니다.
    ![Lane Drawing](../../uengine-image/SOA-message-1.png)

- **1.2** 생성 한 Pool 중, 오류 작업 내역 관리 Pool을 설정합니다. API URL은 서버의 Endpoint, Open API 스펙은 해당 서버의 Open API 스펙 정보를 입력합니다.
    ![Pool Setting](../../uengine-image/SOA-message-2.png)

- **1.3** 프로세스 변수를 설정합니다. 프로세스 변수는 Worker, Error, Status 세가지로 모두 String Type으로 지정합니다.
    ![PV Setting](../../uengine-image/SOA-message-3.png)

- **1.4** StartEvent와 UserTask를 추가합니다. 해당 UserTask에서는 Worker를 지정합니다.
    - UserTask
    ![UserTask](../../uengine-image/SOA-message-4.png)
    - UserTask - 데이터 매핑
    ![UserTask](../../uengine-image/SOA-message-5.png)

- **1.5** UserTask를 추가합니다. 해당 UserTask에서는 오류 내용을 작성합니다.
    - UserTask
    ![UserTask](../../uengine-image/SOA-message-6.png)
    - UserTask - 데이터 매핑
    ![UserTask](../../uengine-image/SOA-message-7.png)

- **1.6** MessageIntermediateThrowEvent를 추가합니다. 해당 Event에서는 등록 된 API를 호출합니다.
    - MessageIntermediateThrowEvent
    ![MessageIntermediateThrowEvent](../../uengine-image/SOA-message-8.png)

- **1.7** MessageIntermediateCatchEvent를 추가합니다. 해당 Event에서는 등록 서비스 경로로 관계키가 들어오면 해당 Event가 완료처리 됩니다.
    - MessageIntermediateCatchEvent
    ![MessageIntermediateCatchEvent](../../uengine-image/SOA-message-9.png)

- **1.8** 외부 시스템과 연결합니다. 외부 시스템은 실제로 BPM은 동작하지 않으므로, 의미적으로 노테이션을 그려 연결합니다.
    - 외부 시스템
    ![MessageIntermediateCatchEvent](../../uengine-image/SOA-message-10.png)

- **1.9** 작업 완료 확인 UserTask와 EndEvent를 추가합니다. 해당 Task에서는 완료를 확인 후, EndEvent를 통해 프로세스가 종료됩니다.
    - UserTask
    ![UserTask](../../uengine-image/SOA-message-11.png)
    - UserTask - 데이터 매핑
    ![UserTask](../../uengine-image/SOA-message-12.png)

### Step 1: BPMN Process 작성
- **1.1** 아래 그림과 같이 2개의 Pool을 생성합니다. 오류 처리 Pool은 uEngine6가 동작 하는 Process, 오류 작업 내역 관리 Pool 은 외부 시스템의 역할을 합니다.
    ![Lane Drawing](../../uengine-image/SOA-message-1.png)

- **1.2** 생성 한 Pool 중, 오류 작업 내역 관리 Pool을 설정합니다. API URL은 서버의 Endpoint, Open API 스펙은 해당 서버의 Open API 스펙 정보를 입력합니다.
    ![Pool Setting](../../uengine-image/SOA-message-2.png)

- **1.3** 프로세스 변수를 설정합니다. 프로세스 변수는 Worker, Error, Status 세가지로 모두 String Type으로 지정합니다.
    ![PV Setting](../../uengine-image/SOA-message-3.png)

- **1.4** StartEvent와 UserTask를 추가합니다. 해당 UserTask에서는 Worker를 지정합니다.
    - UserTask
    ![UserTask](../../uengine-image/SOA-message-4.png)
    - UserTask - 데이터 매핑
    ![UserTask](../../uengine-image/SOA-message-5.png)

- **1.5** UserTask를 추가합니다. 해당 UserTask에서는 오류 내용을 작성합니다.
    - UserTask
    ![UserTask](../../uengine-image/SOA-message-6.png)
    - UserTask - 데이터 매핑
    ![UserTask](../../uengine-image/SOA-message-7.png)

- **1.6** MessageIntermediateThrowEvent를 추가합니다. 해당 Event에서는 등록 된 API를 호출합니다.
    - MessageIntermediateThrowEvent
    ![MessageIntermediateThrowEvent](../../uengine-image/SOA-message-8.png)

- **1.7** MessageIntermediateCatchEvent를 추가합니다. 해당 Event에서는 등록 서비스 경로로 관계키가 들어오면 해당 Event가 완료처리 됩니다.
    - MessageIntermediateCatchEvent
    ![MessageIntermediateCatchEvent](../../uengine-image/SOA-message-9.png)

- **1.8** 외부 시스템과 연결합니다. 외부 시스템은 실제로 BPM은 동작하지 않으므로, 의미적으로 노테이션을 그려 연결합니다.
    - 외부 시스템
    ![MessageIntermediateCatchEvent](../../uengine-image/SOA-message-10.png)

- **1.9** 작업 완료 확인 UserTask와 EndEvent를 추가합니다. 해당 Task에서는 완료를 확인 후, EndEvent를 통해 프로세스가 종료됩니다.
    - UserTask
    ![UserTask](../../uengine-image/SOA-message-11.png)
    - UserTask - 데이터 매핑
    ![UserTask](../../uengine-image/SOA-message-12.png)

### Step 2: Process의 실행
- **2.1** 프로세스를 실행합니다. 첫 업무에서는 Worker를 지정합니다.
![UserTask](../../uengine-image/SOA-message-13.png)

- **2.2** 다음 업무를 진행합니다. 해당 업무에서는 오류 내용을 작성합니다.
![UserTask](../../uengine-image/SOA-message-14.png)

- **2.3** 프로세스를 실행합니다. 오류 내용을 작성합니다.
![UserTask](../../uengine-image/SOA-message-15.png)

- **2.4** 프로세스를 실행합니다. 오류 내용을 작성합니다.
![UserTask](../../uengine-image/SOA-message-16.png)

- **2.5** 프로세스를 실행합니다. 오류 내용을 작성합니다.
![UserTask](../../uengine-image/SOA-message-17.png)

- **2.6** 프로세스를 실행합니다. 오류 내용을 작성합니다.
![UserTask](../../uengine-image/SOA-message-18.png)