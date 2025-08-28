---
description: ''
sidebar: 'process-gpt'
---

# Process-GPT 로컬 설치 가이드

## 개요
이는 로컬 Kubernetes/Kind cluster에서 Process-GPT를 실행하는 방법에 대한 간단한 가이드입니다.

## 필수 조건
- Docker
- kubectl
- kind


## 설치 및 실행

**1. 필요한 도구 설치**

```sh
# Install and run Docker Desktop
docker --version

# Install kubectl
# https://kubernetes.io/docs/tasks/tools/install-kubectl/

# Install kind (Mac)
brew install kind

# Install kind (Windows)
curl.exe -Lo kind.exe https://kind.sigs.k8s.io/dl/v0.20.0/kind-windows-amd64
```

<br>

**2. Cluster 생성**

```sh
# Mac
kind create cluster --name process-gpt

# Windows
.\kind.exe create cluster --name process-gpt
```

<br>

**3. 구성 파일 업데이트(필수)**

`secrets.yaml` 을 실제 값으로 편집하세요 :

```sh
OPENAI_API_KEY: "sk-your-actual-openai-key"
SUPABASE_KEY: "your-actual-supabase-anon-key"
SERVICE_ROLE_KEY: "your-actual-supabase-service-role-key"
JWT_SECRET: "your-actual-jwt-secret"
DB_NAME: "your-db-name"
DB_USER: "your-db-user"
DB_PASSWORD: "your-db-password"
DB_HOST: "your-db-host"
DB_PORT: "your-db-port"
SMTP_PASSWORD: "your-smtp-password"
LANGSMITH_API_KEY: "your-langsmith-api-key"
LANGSMITH_PROJECT: "your-langsmith-project"
MEM_ZERO_API_KEY: "your-mem-zero-api-key"
PERPLEXITY_API_KEY: "your-perplexity-api-key"
# Google Cloud settings: contents of credentials.json for the google-credentials secret
```

`configmap.yaml` 을 실제 값으로 편집하세요 :

```sh
SUPABASE_URL: "https://your-project.supabase.co"
SMTP_PORT: "587"
SMTP_SERVER: "smtp.gmail.com"
SMTP_USERNAME: "your-smtp-username"
```

<br>

**4. 배치 순서**

```sh
# Step 1: Deploy core configuration files (required)
kubectl apply -f secrets.yaml
kubectl apply -f configmap.yaml
kubectl apply -f secrets-test.yaml
kubectl apply -f configmap-test.yaml
kubectl apply -f rbac.yaml
kubectl apply -f pvc.yaml

# Step 2: Deploy all deployments and services
kubectl apply -f deployments/
kubectl apply -f services/
```

<br>

**5. 상태 확인**

```sh
kubectl get pods
kubectl get services
kubectl get secrets
kubectl get configmaps
```

<br>

**6. 애플리케이션에 접속하세요**

```sh
kubectl port-forward service/frontend-service 3000:5173
```

브라우저를 열고 http://localhost:3000 으로 이동하세요.


## 파일 설명

**핵심 구성 파일:**

- `secrets.yaml`: 민감한 값(API 키, DB 자격 증명, JWT 비밀) - 실제 값으로 업데이트해야 합니다.
- `configmap.yaml`: 공개 구성 값(예: Supabase URL) - 실제 값으로 업데이트해야 합니다.
- `rbac.yaml`: MCP 프록시(역할 기반 액세스 제어)에 대한 서비스 계정 권한입니다.
-` pvc.yaml`: LangChain 캐싱을 위한 영구 볼륨 클레임.

**배포  파일:**

- `deployments/`: 모든 애플리케이션에 대한 배포 구성.
- `services/`: 모든 서비스에 대한 네트워킹 구성.