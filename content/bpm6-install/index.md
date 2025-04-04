---
description: ''
sidebar: 'getting-started'
---

# 설치 가이드

## 개요
uEngine6는 비즈니스 프로세스 관리(BPM) 솔루션으로, 프로세스 정의, 실행, 모니터링을 위한 여러 마이크로서비스로 구성되어 있습니다. 이 문서에서는 두 가지 설치 방법을 안내합니다:
- **로컬 환경 설치**: 개발 및 테스트 목적에 적합
- **Docker 설치**: 빠른 시작과 운영 환경 배포에 권장

## 프로젝트 준비
GitHub에서 uEngine 프로젝트를 클론합니다:
```sh
git clone https://github.com/uengine-oss/uEngine6.git
cd uEngine6
```

## 설치 방법 선택
### 방법 1: Docker를 사용한 설치 (권장)
Docker Compose를 사용하면 모든 서비스(Kafka 포함)를 단일 명령으로 쉽게 실행할 수 있습니다.

1. infra 디렉토리로 이동:
```sh
cd infra
```

2. Docker Compose 실행:
```sh
docker compose up -d
```

3. 서비스 실행 확인:
아래 이미지와 같이 uEngine 관련 컨테이너들이 실행됩니다.

![Docker 컨테이너 목록](../../uengine-image/installation-1.png)

4. uEngine 중지 (필요시):
```sh
docker compose down
```

### 방법 2: 로컬 환경에서 설치 및 실행
개발 목적이나 각 서비스를 개별적으로 관리하고 싶을 때 이 방법을 사용합니다.

#### 1. Kafka 서버 설치 및 실행
uEngine6는 비동기 통신을 위해 Kafka를 사용합니다. 먼저 Kafka를 설치하고 실행해야 합니다.

1. [Apache Kafka 다운로드 페이지](https://kafka.apache.org/downloads)에서 Kafka를 다운로드합니다.
2. 다운로드한 파일을 압축 해제하고 해당 디렉토리로 이동합니다.
3. Zookeeper 시작:
```sh
./bin/zookeeper-server-start.sh config/zookeeper.properties
```
4. 새 터미널을 열고 Kafka 서버 시작:
```sh
./bin/kafka-server-start.sh config/server.properties
```

#### 2. uEngine 마이크로서비스 실행
각 서비스는 별도의 터미널에서 실행해야 합니다.

```sh
# 프로세스 서비스 실행 (포트 9094)
# 역할: 프로세스 인스턴스 실행 및 관리
cd process-service
mvn spring-boot:run

# 정의 서비스 실행 (포트 9093)
# 역할: 프로세스 정의 저장 및 관리
cd definition-service
mvn spring-boot:run

# 게이트웨이 서비스 실행 (포트 8088)
# 역할: API 게이트웨이 및 사용자 인터페이스 제공
cd gateway
mvn spring-boot:run
```

## uEngine 접속 및 확인

uEngine이 정상적으로 실행되면, 웹 브라우저를 열고 다음 URL로 접속하여 실행 화면을 확인할 수 있습니다:

- **uEngine BPM 포털**: http://localhost:8088/

![uEngine BPM 포털](../../uengine-image/installation-2.png)

## 문제 해결

### 자주 발생하는 문제

1. **포트 충돌 오류**
   - 이미 사용 중인 포트가 있는 경우, 각 서비스의 application.yml 파일에서 포트를 변경할 수 있습니다.

2. **Kafka 연결 오류**
   - Kafka가 정상적으로 실행 중인지 확인하세요.
   - Docker 설치 시 서비스 간 네트워크 설정을 확인하세요.

3. **데이터베이스 연결 오류**
   - 각 서비스의 데이터베이스 설정을 확인하세요.

문제가 지속될 경우 help@uengine.org를 통해 문의해 주세요.