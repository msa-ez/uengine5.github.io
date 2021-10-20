<template>
<div>
  <Layout>
    <!-- pc 환경 style -->
    <div class="pt-8 md:pt-16 is-pc">
      <div class="flex">
        <div style = "width:47.5%;">
          <div class="flex flex-col items-left mb-2 text-ui-primary">
            <!-- <Logo :width="80" /> -->
            <h2 class="text-3xl text-6xl font-black tracking-tighter border-none">
              uEngine5-BPM
            </h2>
            <p class="text-left text-2xl">
              급변하는 비즈니스 프로세스를 고착화된 코드에서 분리하십시오. 대기업에게는 기존 업무 베테랑들의 프로세스를 자산화하여 지속가능한 비즈니스의 기반을 구축하고, 중소기업에게는 우리기업만의 프로세스 혁신과 통제를 통한 생산성과 표준화된 품질을 확보하십시오. uEngine BPMS 는 OMG 국제표준인 BPMN 2.0 을 지원하여 기업의 프로세스를 관리하고 지속적인 개선을 수행할 수 있도록 하는 프로세스 혁신 기능과 소셜 네트워크 기반의 포털을 통하여 창의적인 프로세스 협업을 가능하게하는 두가지 통제와 혁신의 관점의 UI/UX 를 통합하는 UI를 제공합니다. 기업은행, LG 디스플레이, SK 텔레콤 등 굴지의 금융과 통신 기업에서 검증된 uEngine BPMS를 통한 혁신 사례를 만드시기 바랍니다.
            </p>
            <div class="flex">
              <g-link
                to="/getting-started/"
                class="glink-margin px-6 py-4 text-2xl leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
              >
                Getting Started
              </g-link>
              <g-link
                to="https://github.com/uengine-oss/uEngine5-bpm"
                class="glink-margin px-6 py-4 text-2xl leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
              >
                Github
              </g-link>

              <g-link
                to="https://www.facebook.com/groups/uenginebpm/"
                class="glink-margin px-6 py-4 text-2xl leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
              >
                Facebook
              </g-link>
            </div>
          </div>
          <!-- <p class="text-xl font-medium text-center">
            Perfect Lighthouse score out of the box. Easy to set-up. Dark mode included.
            <br>
            <strong class="text-ui-primary">Got a minute?</strong>
          </p> -->
        </div>
        <div style = "width:47.5%; margin-left:5%;">
            <iframe style ="width:100%; height:600px;"
              src="https://www.youtube.com/embed/9RtGeyvZrJo"
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            >
            </iframe>
            <!-- <iframe style ="width:100%; height:315px;"
              src="https://www.youtube.com/embed/2xcl_aFKtrI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe> -->
        </div>
      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

      <h2 class = "sub-title">FEATURES</h2>


      <!-- 텍스트 왼쪽 -->
      <div style="margin-top:50px;" class="flex">
        <div style= "width:47.5%;">
          <h3 style = "font-size:30px; font-weight:500; margin-bottom:50px;">Full Support of BPMN 2.0</h3>
          <div style="font-size:20px;">
            uEngine5 는 OMG BPMN 2.0 스펙을 완전하게 지원합니다.
            세계적으로 합의된 프로세스 자산화의 표준인 BPMN 은 역사상 가장 이해하기 쉽고 강력한 프로세스정의 언어입니다.
            uEngine5 의 순수웹기반 프로세스 디자이너는 언제 어디서든 여러분의 프로세스 혁신을 위한 도구로 활용될 수 있습니다.
          </div>
        </div>
        <g-image style = "width:47.5%; margin-left:5%;"
          src="https://user-images.githubusercontent.com/487999/36926534-c1f9c24a-1ebb-11e8-96e1-5d8e3b73391b.png">
        </g-image>
      </div>


      <!-- 텍스트 오른쪽 -->
      <div style = "margin-top:50px;" class="flex">
        <g-image style = "width:47.5%;"
          src="https://user-images.githubusercontent.com/487999/36926642-39525302-1ebc-11e8-9004-7ccffd346546.png">
        </g-image>
        <div style = "width:47.5%; margin-left:5%;">
          <h3 style = "font-size:30px; font-weight:500; margin-bottom:50px;">UML Class Modeling</h3>
          <div style="font-size:20px;">
            uEngine5 에 내장된 UML 클래스 모델러를 통하여 도메인 모델을 설계할 수 있습니다.
            이렇게 설계된 도메인 모델은 프로세스 변수와 룰 편집기의 모델로 활용되며,
            Open Cloud Engine PaaS 에 결합되어 곧바로 Java Spring Boot 애플리케이션의 형태 (마이크로 서비스) 로 생성-역공학 (Round-trip Engineering) 됩니다.
            DDD (Domain Driven Design) 의 사상을 기반하여 마이크로 서비스 아키텍처 기반의 애플리케이션을 빠르게 생성하여 BPM 기반의 SOA 아키텍처를 이루고 싶다면 이 강력한 도구를 활용하지 않을 수 없을 것입니다.
          </div>
        </div>
      </div>

      <!-- 텍스트 왼쪽 -->
      <div style="margin-top:50px;" class="flex">
        <div style= "width:47.5%;">
          <h3 style = "font-size:30px; font-weight:500; margin-bottom:50px;">Social Workspace</h3>
          <div style="font-size:20px;">
            uEngine5 는 OMG BPMN 2.0 스펙을 완전하게 지원합니다.
            세계적으로 합의된 프로세스 자산화의 표준인 BPMN 은 역사상 가장 이해하기 쉽고 강력한 프로세스정의 언어입니다.
            uEngine5 의 순수웹기반 프로세스 디자이너는 언제 어디서든 여러분의 프로세스 혁신을 위한 도구로 활용될 수 있습니다.
          </div>
        </div>
        <g-image style = "width:47.5%; margin-left:5%;"
          src="https://user-images.githubusercontent.com/487999/36926643-39936f54-1ebc-11e8-8419-d238f519a53d.png">
        </g-image>
      </div>

      <!-- 텍스트 오른쪽 -->
      <div style = "margin-top:50px;" class="flex">
        <g-image style = "width:47.5%;"
          src="https://user-images.githubusercontent.com/487999/36926800-e81e2942-1ebc-11e8-9e02-0ba68fc1d40d.png">
        </g-image>
        <div style = "width:47.5%; margin-left:5%;">
          <h3 style = "font-size:30px; font-weight:500; margin-bottom:50px;">프로세스 모니터링</h3>
          <div style="font-size:20px;">
            다양한 관점의 프로세스 실행과 조직 역량을 한곳에서 모니터링하세요
          </div>
        </div>
      </div>
      <br><br><br>
    </div>

    <!-- 모바일 환경 style -->
    <div class="is-mobile">
      <div>
        <div style = "width:100%;">
          <div class="flex flex-col items-left mb-2 text-ui-primary">
            <!-- <Logo :width="80" /> -->
            <h2 class="text-3xl text-6xl font-black tracking-tighter border-none">
              uEngine5-BPM
            </h2>
            <p class="text-left text-1xl">
              급변하는 비즈니스 프로세스를 고착화된 코드에서 분리하십시오. 대기업에게는 기존 업무 베테랑들의 프로세스를 자산화하여 지속가능한 비즈니스의 기반을 구축하고, 중소기업에게는 우리기업만의 프로세스 혁신과 통제를 통한 생산성과 표준화된 품질을 확보하십시오. uEngine BPMS 는 OMG 국제표준인 BPMN 2.0 을 지원하여 기업의 프로세스를 관리하고 지속적인 개선을 수행할 수 있도록 하는 프로세스 혁신 기능과 소셜 네트워크 기반의 포털을 통하여 창의적인 프로세스 협업을 가능하게하는 두가지 통제와 혁신의 관점의 UI/UX 를 통합하는 UI를 제공합니다. 기업은행, LG 디스플레이, SK 텔레콤 등 굴지의 금융과 통신 기업에서 검증된 uEngine BPMS를 통한 혁신 사례를 만드시기 바랍니다.
            </p>
            <div class="flex">
              <g-link
                style="font-size:14px; font-weight:500;"
                to="/getting-started/"
                class="glink-margin px-6 py-4 text-2xl leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
              >
                Getting Started
              </g-link>
              <g-link
                style="font-size:14px; font-weight:500;"
                to="https://github.com/uengine-oss/uEngine5-bpm"
                class="glink-margin px-6 py-4 text-2xl leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
              >
                Github
              </g-link>

              <g-link
                style="font-size:14px; font-weight:500;"
                to="https://www.facebook.com/groups/uenginebpm/"
                class="glink-margin px-6 py-4 text-2xl leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
              >
                Facebook
              </g-link>
            </div>
          </div>
          <!-- <p class="text-xl font-medium text-center">
            Perfect Lighthouse score out of the box. Easy to set-up. Dark mode included.
            <br>
            <strong class="text-ui-primary">Got a minute?</strong>
          </p> -->
        </div>
        <div style = "width:100%;">
            <iframe style ="width:100%; height:300px;"
              src="https://www.youtube.com/embed/9RtGeyvZrJo"
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            >
            </iframe>
        </div>
      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

      <h2 class = "sub-title" style="font-size:30px;">FEATURES</h2>


      <div style="margin-top:50px;">
        <div style= "width:100%;">
          <h3 style = "font-size:24px; font-weight:500; margin-bottom:20px;">Full Support of BPMN 2.0</h3>
          <div style="font-size:16px;">
            uEngine5 는 OMG BPMN 2.0 스펙을 완전하게 지원합니다.
            세계적으로 합의된 프로세스 자산화의 표준인 BPMN 은 역사상 가장 이해하기 쉽고 강력한 프로세스정의 언어입니다.
            uEngine5 의 순수웹기반 프로세스 디자이너는 언제 어디서든 여러분의 프로세스 혁신을 위한 도구로 활용될 수 있습니다.
          </div>
        </div>
        <g-image style = "width:100%; height:50%;"
          src="https://user-images.githubusercontent.com/487999/36926534-c1f9c24a-1ebb-11e8-96e1-5d8e3b73391b.png">
        </g-image>
      </div>


      <div style = "margin-top:50px;">
        <div style = "width:100%;">
          <h3 style = "font-size:24px; font-weight:500; margin-bottom:20px;">UML Class Modeling</h3>
          <div style="font-size:16px;">
            uEngine5 에 내장된 UML 클래스 모델러를 통하여 도메인 모델을 설계할 수 있습니다.
            이렇게 설계된 도메인 모델은 프로세스 변수와 룰 편집기의 모델로 활용되며,
            Open Cloud Engine PaaS 에 결합되어 곧바로 Java Spring Boot 애플리케이션의 형태 (마이크로 서비스) 로 생성-역공학 (Round-trip Engineering) 됩니다.
            DDD (Domain Driven Design) 의 사상을 기반하여 마이크로 서비스 아키텍처 기반의 애플리케이션을 빠르게 생성하여 BPM 기반의 SOA 아키텍처를 이루고 싶다면 이 강력한 도구를 활용하지 않을 수 없을 것입니다.
          </div>
        </div>
        <g-image style = "width:100%;"
          src="https://user-images.githubusercontent.com/487999/36926642-39525302-1ebc-11e8-9004-7ccffd346546.png">
        </g-image>
      </div>


      <div style="margin-top:50px;">
        <div style= "width:100%;">
          <h3 style = "font-size:24px; font-weight:500; margin-bottom:20px;">Social Workspace</h3>
          <div style="font-size:16px;">
            uEngine5 는 OMG BPMN 2.0 스펙을 완전하게 지원합니다.
            세계적으로 합의된 프로세스 자산화의 표준인 BPMN 은 역사상 가장 이해하기 쉽고 강력한 프로세스정의 언어입니다.
            uEngine5 의 순수웹기반 프로세스 디자이너는 언제 어디서든 여러분의 프로세스 혁신을 위한 도구로 활용될 수 있습니다.
          </div>
        </div>
        <g-image style = "width:100%;"
          src="https://user-images.githubusercontent.com/487999/36926643-39936f54-1ebc-11e8-8419-d238f519a53d.png">
        </g-image>
      </div>

      <div style = "margin-top:50px;">
        <div style = "width:100%;">
          <h3 style = "font-size:24px; font-weight:500; margin-bottom:20px;">프로세스 모니터링</h3>
          <div style="font-size:16px;">
            다양한 관점의 프로세스 실행과 조직 역량을 한곳에서 모니터링하세요
          </div>
        </div>
        <g-image style = "width:100%;"
          src="https://user-images.githubusercontent.com/487999/36926800-e81e2942-1ebc-11e8-9e02-0ba68fc1d40d.png">
        </g-image>
      </div>
      <br><br><br>
    </div>

    <!-- uEngine 제품 그룹 섹션 위치 -->

      <h3 style = "font-size:30px; font-weight:500;">왜 유엔진에서는 BPM 제품을 오픈소스화 한 것인가요?</h3>
      <g-image style ="width:100%;" src="../../uengine-image/96.png"></g-image>

      <br>
      <div style = "font-size:20px; font-weight:500;">
      유엔진 BPM 프로젝트는 기존 고가의 라이센스 비용으로만 접할 수 있던 BPMS 제품을 오픈소스 형태로 제공하고,
      이를 적용하기 위한 교육과 컨설팅 서비스를 제공함으로써,
      컨설팅 비용 중심의 예산구조를 통한 충실한 교육과 내재화 달성,
      소스코드의 제공을 통한 고객 요건에 중심을 둔 충실한 커스터마이징, 다수의 서비스 채널을 허용합니다.
      </div>

      <br><br>
      <h3>BPMS</h3> 
<pre class="language-">
도입 필요성 다양한 시스템(Groupware, EDM, KM 등)의 도입을 통하여 업무 경쟁력을 강화하려 했지만
업무의 중복성과 통일성 결여 그리고 특히 협업 차원에서 각 시스템간의 연계성이 떨어짐</pre>
      

      <br><br>
      <h4>관리자</h4>
<pre class="language-">
도대체 업무가 어디까지 진행되고 있는 거야?
내 부하직원의 업무 스케줄이 어떻게 되나?
지난번에 지시한 사항이 반영되고 있나?</pre>

        <br><br>
        <h4>업무 담당자</h4>
<pre class="language-">
여러 시스템에 관여된 업무화면을 한 곳에서 처리할 수 없을까?
한번 입력한 내용을 또 입력해야 하나? 전체 업무가 어떻게 흘러가는 거지? 이 업무를 어떻게 처리하는지 모르겠어.</pre>
        
        <br><br>
        <h4>시스템 관리자</h4>
<pre class="language-">
시스템 간의 통합에 너무 많은 비용이 들어 간다.
요구변경이 너무 잦아서 매일 야근해도 작업량은 늘어만 가고 요청자(고객)들은 불평만 계속 늘어만 간다.</pre>

        <br><br>
        <h3>BPMS</h3>
<pre class="language-">
도입 효과 BPM 시스템이 업무간의 전이를 담당하여 개인별 평균 업무 생산성이 향상되고,
조직 업무 규정에 대한 공통언어인 프로세스를 통하여 빠른 업무 파악이 가능하며,
업무 자겁 오류 또한 감소 효과가 뚜렷함</pre>

<br><br>
<h3>관리자</h3>
<pre class="language-">
부하직원에게 요청한 사항을 실시간으로 모니터링 가능해짐 위험 혹은 예외 경우를 보다 빠르게 포착 가능해짐
보다 효과적인 프로세스 진행을 위해 단위업무를 재할당 할 수 있음</pre>

        <br><br>
        <h3>업무 담당자</h3>
<pre class="language-">
수행해야 할 업무가 찾아 들어오므로 어떻게 업무를 수행하는지 알 필요 없음
업무 진척상황을 보고 할 필요 없음 프로세스에 대한 보다 빠르고 폭넓은 이해가 가능해짐</pre>


        <br><br>
        <h3>시스템 관리자</h3>
<pre class="language-">
비즈니스 프로세스를 어플리케이션과 분리함으로써 빠른 개발 가능 비즈니스 프로세스에 대한 변경을 바로 반영함으로써
실시간 기업 구현이 가능해짐 보다 프로세스지향적이고 어플리케이션 통합 지향적인 시스템 아키텍처로의 발전이 촉진됨</pre>
      
        <br><br><br>
        <h3 style = "font-size:30px; font-weight:500;">유엔진 BPM은 어떠한 아키텍처적 장점이 있습니까?</h3><br>
        <g-image style ="width:100%;" src="../../uengine-image/97.png"></g-image>
        
        <br>
        <div style = "line-height:30px;">
          BPM도입에서의 고려사항 중 기술적인 내용과 관계있는 사항은, 얼마나 용이하게 커스터마이징 가능한가와 우리 조직 시스템 환경에 부담없이 쉽게 융합될 수 있느냐, 입니다.
          이러한 커스터마이저빌리티와 리스크 낮은 융합을 위해 유엔진BPMS의 아키텍처는 "객체지향 컴포넌트 프레임워크"의 접근방식인 IoC (제어권의 반전)과 "설계의 재사용"의 컨셉을 적용하고 있습니다.
          이는, 조직도 찾기 로직의 분리, 액티비티 유형의 컴포넌트 인터페이스화, 엔진상 발생 이벤트의 리스너 등의 컴포넌트 인터페이스를 제공하여
          BPM Hot-spot 서비스(고정부위)와 BPM 커스터마이징 빈발요소(가변부위)를 정제한 경계를 형성하며 고정부위의 서비스로서,
          리플렉션을 통한 액티비티 컴포넌트 UI의 자동생성, 인스턴스 데이터의 관리, MQ처리, OLAP분석처리등의 기능을 기반 제공함으로서
          개발자로 하여금 BPM 기반 개발에 있어 BPM하부 기술에 대한 어떠한 고민도 하지 않더라도 커스터마이징을 용이하게 하는 접근방식입니다.
          이러한 접근방식은 이미 Spring Framework 등, 다양한 프레임워크에서의 접근방식을 BPM기반 시스템 개발의 영역에 대입한 것으로,
          일반적으로 패키지 기반으로만 제공되어 Server/Client 방식의 연계만을 허용하는 BPM제품에서의 리스크를 대폭 줄이고 가용성을 최대화하는 기술적 기반이 됩니다.
        </div>
        <br><br>
        
        <!-- Zero Code & Extensible Vocalbulary 섹션 -->

        <br><br>
        <h3 style = "font-size:30px; font-weight:500;">License</h3>
        <h3>uEngine Open Source License : LGPL</h3>

        <table style = "width:100%;">
          <tr><!-- 첫번째 줄 시작 -->
              <td>주요 오픈소스SW<br>라이선스 비교</td>
              <td>무료<br>이용가능</td>
              <td>배포<br>허용가능</td>
              <td>소스코드<br>취득가능</td>
              <td>소스코드<br>수정가능</td>
              <td>2차적 저작물<br>재공개 의무</td>
              <td>독점SW와<br>결합가능</td>
          </tr><!-- 첫번째 줄 끝 -->

          <tr><!-- 두번째 줄 시작 -->
              <td>GPL</td>
              <td>O</td>
              <td>O</td>
              <td>O</td>
              <td>O</td>
              <td>O</td>
              <td>X</td>
          </tr><!-- 두번째 줄 끝 -->

          <tr><!-- 세번째 줄 시작 -->
              <td>LGPL</td>
              <td>O</td>
              <td>O</td>
              <td>O</td>
              <td>O</td>
              <td>O</td>
              <td>O</td>
          </tr><!-- 세번째 줄 끝 -->

          <tr><!-- 넷번째 줄 시작 -->
              <td>MPL</td>
              <td>O</td>
              <td>O</td>
              <td>O</td>
              <td>O</td>
              <td>O</td>
              <td>O</td>
          </tr><!-- 넷번째 줄 끝 -->

          <tr><!-- 다섯번째 줄 시작 -->
              <td>BSD<br>Licence</td>
              <td>O</td>
              <td>O</td>
              <td>O</td>
              <td>O</td>
              <td>X</td>
              <td>O</td>
          </tr><!-- 다섯번째 줄 끝 -->

          <tr><!-- 여섯번째 줄 시작 -->
              <td>Apache<br>Licence</td>
              <td>O</td>
              <td>O</td>
              <td>O</td>
              <td>O</td>
              <td>X</td>
              <td>O</td>
          </tr><!-- 여섯번째 줄 끝 -->
        </table>
        <br>
        <div>
          1) 2차 저작물이 재 공개 의무가 있으나 저작물이 전체가 아닌 ("독점SW와 결합가능" 항목에 의하여) 유엔진 내의 필요에 의하여서 수정한 부분만 sf.net 등에 공개하면 됩니다.<br>
          2) 주로 유엔진 내의 설정파일 수준에서 수정이 이루어지기 때문에 소스코드 변경이 발생치 않으나, 관리자 화면의 스플래시 화면 수정의 요건이 발생할 수 있습니다.<br>
          3) 2차 저작물의 어떠한 내용도 재 공개를 원치 않은 경우 "듀얼라이센싱" 정책에 의거하여 상용화(소스비공개 권한 획득) 라이센싱을 구매할 수 있습니다.<br>
          4) 무비용으로 유엔진을 사용하고자 하는 경우: - 유엔진 내 수정한 소스코드를 sf.net에 공개 - 유엔진 내의 소스를 수정하지 않고 사용자 화면 등에 유엔진을 사용했다는 표시를 하는 경우<br>
          5) 소스코드를 보호하고자 하는 경우: - 듀얼라이센싱 (상용화 라이센싱) 구매 출처 한국 저작권 위원회: http://www.olis.or.kr/osslice/guideViewComp.do<br>
        </div>

        <br>
  </Layout>

<!-- pc footer -->
  <footer 
    style = "width:100%;
    height:300px;
    background-color:#1E88E5;"
    class="is-pc-footer"
  >
    <div class="flex logo-style">
      <div>
      <g-image style="display:block;" src="../../uengine-image/logo.png"></g-image>
      </div>
    </div>
    <div style = "width:100%; height:100px; text-align:center; font-size:16px; color:white; font-weight:300; line-height:50px; padding-top:20px;">
      <div>Copyright © 2017 uEngine &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; All Rights Reserved &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Designed By Sppark &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Address 서울 서초구 신반포로45길 18 주일빌딩 501호</div>
      <div>Email : help@uengine.org</div>
    </div>
  </footer>

<!-- 모바일 footer -->
  <footer 
    style = "width:100%;
    height:300px;
    background-color:#1E88E5;"
    class="is-mobile-footer"
  >
    <div class="flex logo-style">
      <div>
      <g-image style="display:block;" src="../../uengine-image/logo.png"></g-image>
      </div>
    </div>
    <div style = "width:100%; height:100px; text-align:center; font-size:16px; color:white; font-weight:300; line-height:30px; padding-top:20px;">
      <div>Copyright © 2017 uEngine <br> All Rights Reserved <br> Designed By Sppark <br> Address 서울 서초구 신반포로45길 18 주일빌딩 501호</div>
      <div>Email : help@uengine.org</div>
    </div>
  </footer>
</div>
</template>

<script>
import Logo from '@/components/Logo';
import { ArrowRightCircleIcon, ZapIcon, CodeIcon, MoonIcon, SearchIcon } from 'vue-feather-icons';

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon
  },

  metaInfo() {
    const title = 'uengine5';
    const description = 'DOCC is a starter theme with instant search and dark mode for writing great technical documentation. Based on Gridsome!';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>

<style>
  .home-links a {
    margin-right: 1rem;
  }
  .glink-margin:nth-child(2),
  .glink-margin:nth-child(3),
  .glink-margin:nth-child(4){
    margin-left:2%;
  }
  .sub-title{
    width:100%; text-align:center; font-size:40px; font-weight:700;
  }

  .logo-style{
    width:20%; margin-left:40%;  padding-top:60px;
  }

  .is-mobile-footer{display:none;}

  td {
      border: 1px solid #999;
      text-align:center;
      padding:5px !important;
  }
  .is-mobile{display:none;}

  @media only screen and (max-width:1279px) {
    .is-pc{display:none;}
    .is-mobile{display:block;}

    .logo-style{
      width:40%; margin-left:30%;  padding-top:30px;
    }
    .is-mobile-footer{display:block;}
    .is-pc-footer{display:none;}
  }


</style>
