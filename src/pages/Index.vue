<template>
<div>
  <Layout >
    <div class="pt-8 md:pt-16">
      <div class="flex">
        <div style = "width:47.5%;">
          <div class="flex flex-col items-left mb-2 text-ui-primary">
            <!-- <Logo :width="80" /> -->
            <h2 class="text-3xl text-6xl font-black tracking-tighter border-none">
              BPM
            </h2>
            <p class="text-left text-2xl">
              급변하는 비즈니스 프로세스를 고착화된 코드에서 분리하십시오. 대기업에게는 기존 업무 베테랑들의 프로세스를 자산화하여 지속가능한 비즈니스의 기반을 구축하고, 중소기업에게는 우리기업만의 프로세스 혁신과 통제를 통한 생산성과 표준화된 품질을 확보하십시오. uEngine BPMS 는 OMG 국제표준인 BPMN 2.0 을 지원하여 기업의 프로세스를 관리하고 지속적인 개선을 수행할 수 있도록 하는 프로세스 혁신 기능과 소셜 네트워크 기반의 포털을 통하여 창의적인 프로세스 협업을 가능하게하는 두가지 통제와 혁신의 관점의 UI/UX 를 통합하는 UI를 제공합니다. 기업은행, LG 디스플레이, SK 텔레콤 등 굴지의 금융과 통신 기업에서 검증된 uEngine BPMS를 통한 혁신 사례를 만드시기 바랍니다.
            </p>
            <div class="flex">
              <g-link
                to="/uengine/"
                class="glink-margin px-6 py-4 text-2xl leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
              >
              Started
              </g-link>
              <g-link
                to="https://github.com/TheOpenCloudEngine/uengine-bpm"
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

              <g-link
                to="https://uengine.org/assets/docs/%EC%9C%A0%EC%97%94%EC%A7%84%20BPM%20%EC%82%AC%EC%9A%A9%EC%9E%90%EB%A9%94%EB%89%B4%EC%96%BC%20V_3.5.5.doc"
                class="glink-margin px-6 py-4 text-2xl leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
              >
                Guide
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
            <iframe style ="width:100%; height:315px; margin:20px 0 20px 0;"
              src="https://www.youtube.com/embed/2xcl_aFKtrI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
            <iframe style ="width:100%; height:315px;"
              src="https://www.youtube.com/embed/2xcl_aFKtrI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
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

    <h3 style = "font-size:30px; font-weight:500;">uEngine 제품 그룹</h3>
    <table style = "width:100%;">
        <tr><!-- 첫번째 줄 시작 -->
            <td>제품</td>
            <td>설명</td>
            <td>
              프로세스<br>
              모델링 및<br>
              정의보기<br>
            </td>
            <td>
              프로세스<br>
              모니터링<br>
            </td>
            <td>프로세스 실행</td>
            <td>워크플로우</td>
            <td>분석 / 통계</td>
            <td>확장기능</td>
            <td>다운로드</td>
            <td>데모보기</td>
        </tr><!-- 첫번째 줄 끝 -->

        <tr><!-- 두번째 줄 시작 -->
            <td>uEngine BPMS</td>
            <td>
              업무 프로세스<br>
              관리<br>
            </td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td></td>
            <td >
              <g-link style="color:#2979FF;" to="https://sourceforge.net/projects/uengine/files/2.%20uengine%20packaged%20edition/">- 제품다운로드</g-link><br>
              <g-link style="color:#2979FF;" to="http://uengine.org/assets/docs/ubpm.pdf">- 제품소개서</g-link><br>
              <g-link style="color:#2979FF;" to="http://uengine.org/assets/docs/uEngine_BPMS_3.6_Quick_Guide.pdf">- 퀵스타트</g-link><br>
            </td>
            <td></td>
        </tr><!-- 두번째 줄 끝 -->

        <tr><!-- 세번째 줄 시작 -->
            <td>uEngine BRMS</td>
            <td>룰엔진</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td></td>
            <td></td>
            <td>를 모델러	</td>
            <td></td>
            <td></td>
        </tr><!-- 세번째 줄 끝 -->

        <tr><!-- 네번째 줄 시작 -->
            <td>uEngine 전자결재</td>
            <td>
              전자결재<br>
              그룹웨어<br>
            </td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td></td>
            <td>
              결재선 편집기와<br>
              기안기<br>
            </td>
            <td></td>
            <td></td>
        </tr><!-- 네번째 줄 끝 -->

        <tr><!-- 다섯번째 줄 시작 -->
            <td>uEngine JMS</td>
            <td>
              업무 메뉴얼<br>
              지식관리<br>
            </td>
            <td>●</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <g-link style="color:#2979FF;" to="http://uengine.org/assets/docs/uJMSje.pdf">- 제품소개서</g-link><br>
              <g-link style="color:#2979FF;" to="http://uengine.org/assets/docs/uJMSsa.pdf">- 사용자메뉴얼</g-link><br>
              <g-link style="color:#2979FF;" to="http://uengine.org/assets/docs/uJMS.pdf">- 브로셔</g-link><br>
            </td>
            <td></td>
        </tr><!-- 다섯번째 줄 끝 -->

        <tr><!-- 여섯번째 줄 시작 -->
            <td>uEngine PMT</td>
            <td>
              프로세스<br>
              모니터링툴킷<br>
            </td>
            <td>●</td>
            <td>●</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <g-link style="color:#2979FF;" to="http://uengine.org/assets/docs/upmt1.pdf">- 제품소개서</g-link><br>
              <g-link style="color:#2979FF;" to="http://uengine.org/assets/docs/upmt.pdf">- 사용자메뉴얼</g-link><br>
            </td>
            <td></td>
        </tr><!-- 여섯번째 줄 끝 -->

        <tr><!-- 일곱번째 줄 시작 -->
            <td>Process Codi</td>
            <td>소셜BPM</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td>
              기업용<br>
              SNS 서비스<br>
            </td>
            <td>
              <g-link style="color:#2979FF;" to="http://uengine.org/assets/docs/upmt1.pdf">- 제품다운로드</g-link><br>
              <g-link style="color:#2979FF;" to="http://uengine.org/assets/docs/upmt.pdf">- 브로셔</g-link><br>
            </td>
            <td>
              <g-link style="color:#2979FF;" to="http://www1.processcodi.com/?tm=1&subid4=1632989396.0374300000">- 데모보기</g-link><br>
            </td>
        </tr><!-- 일곱번째 줄 끝 -->

        <tr><!-- 여덟번째 줄 시작 -->
            <td>Process Mobi</td>
            <td>
              모바일<br>
              클라이언트<br>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              모바일<br>
              클라이언트<br>
            </td>
            <td>
              <g-link style="color:#2979FF;" to="http://uengine.org/assets/docs/umobi.pdf">- 브로셔</g-link><br>
            </td>
            <td></td>
        </tr><!-- 여덟번째 줄 끝 -->
      </table>

      <br><br><br>
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
        <h3 style = "font-size:30px; font-weight:500;">Zero Code & Extensible Vocalbulary</h3>
        <h4>모델링이 곧 실행 프로세스</h4>
        <h4>단일 툴을 통한 통합</h4>
        <h4>업무관리자에 의한 프로세스 복구</h4>
        <h4>사용자 설정을 통한 통계 분석 개발</h4>
        <h4>확장적 업무</h4>
      
        <br><br>
        <h3 style = "font-size:30px; font-weight:500;">기능적으로 유엔진 BPM은 어떠한 차별점이 있습니까?</h3>
<pre class="language-">
BPM적용을 한번 해보신 고객들을 다음과 같은 불평들을 하나같이 하십니다. 프로세스 모델링을 현업이 할 수 있다고 했는데, 너무 어려워서 IT의 도움을 결국 받을 수 밖에 없다.
자체적으로 프로세스를 개선할 수 있다는 이야기는 아무래도 못믿겠다. 한번 흘러간 프로세스의 단계는 도대체 복구라는 것이 불가능하다.
신이 아닌 이상, 업무적으로나 기술적으로나 어떻게든 프로세스의 진행을 뒤로 돌릴 수 없는 BPM제품은 결국 못쓴다.
업무의 흐름은 생각보다 복잡하다.
때때로 모델링시에 예측하지 못했던 동적인 상황이 벌어지는데, 이를 설계할 방법이 없어서 결국은 프로그래밍으로 해결해야 하는 순간,
이 프로세스는 현업에 의해 개선이 불가능해지는 "대수술"의 과정을 밟게 된다.</pre>

        <br><br>
        <h3 style = "font-size:30px; font-weight:500;">요약하자면</h3>
<pre class="language-">
1. 사용자에 의한 프로세스 모델링이 불가능하다
2. 롤백이 지원되지 않는다
3. 동적인 프로세스의 유연성이 지금까지 BPM제품들의 주요한계점이었다는 것입니다.</pre>
<br><br>

        <div style = "line-height:30px;">
          <div style = "font-weight:700;">이러한 것들이 지원되지 못하는 것을 유엔진은 다음과 같은 기능들로 뛰어넘고 있습니다:</div>
          사용자는 업무를 마음껏 그리고자 하는 "미술가"이며,
          BPM은 이러한 미술가를 위해 다양한 색의 "페인트"를 제공해야 한다는 것입니다. 그런데 이때 어떤 BPM은 색의 3원색만을 제공하여 "사용자가 알아서 색을 섞어서 사용하시라"는 접근을 한다면,
          물론 최고의 미술가가 되기위해 사용자는 노력해야만 할것입니다.
          하지만 현업을 위해 최대한 다양한 의미의 비즈니스적인 색체를 띤 컴포넌트들을 쉽게 컴포넌트로 만들어 낼 수 있고 이를 현업이 사용하는 환경 (BPM에서는 프로세스 모델링을 위한 액티비티 타입 유형이 됩니다)에 쉽게 추가할 수 있는 "디자인타임 개발 프레임워크"의 제공이 중요하다는 것입니다.
          앞서 설명된 것처럼, 유엔진의 컴포넌트 프레임워크는 기술적인 단위 기능의 컴포넌트를 BPM의 라이프사이클에서 유용하도록 디자인 타임의 자동 생성 및 포장기능과 인터페이스를 제공하여 이러한 "지속적인 프로세스 개선"을 위한 "지속적인 액티비티 표현력 개선"을 지원합니다.
          무심코 "프로세스"라고 우리가 칭하는 것에는 다양한 대상들이 존재합니다.
          사람과 사람간의 문서의 전달만을 고려한 "워크플로우", 시스템과 시스템간의 데이터 전달 과정인 "EAI 프로세스", 비즈니스 파트너와 파트너간의 "B2Bi 프로세스", 룰의 해석과정을 나타난 "디시젼 프로세스", 혹은 단순히 웹페이지들의 전이과정을 나타내는 "페이지플로우"... 이러한 것들은 사용자는 사실 그 명명조차 구분하지 못합니다.
          왜 이들을 분리하여 다른 모델링 도구에서 설계하고 다종의 엔진에서 수행하여야 합니까?
          그리고 이러한 것들을 기술적으로 연결함에 있어서 한계점은 왜 그렇게 많이 존재합니까?
          현업이 그리고자 하는 프로세스는 이러한 다양하게 기술적으로는 다른 유형의 프로세스를 하나의 툴에서 그리고자 하고 하나의 도구에서 실행되는 추상적인 모습을 당연히 떠올립니다.
          그것이 BPM이라고 생각하는 것이 사용자 입장에서는 당연한 것입니다.
          이러한 통합 모델링과 실행기능을 "End-to-End프로세스 지원" 이라고 합니다.
          이러한 End-to-End 프로세스 지원이 어려운 이유는 단일 소프트웨어 벤더가 혼자서 이모든 프로세스 유형을 지원할 SW를 경쟁력있게 만들 수 없기 때문입니다.
          그래서 대형 SW벤더들은 여러 경쟁력있는 해당 영역의 제품들을 M&A하여 엮기도 하지만, 아키텍처적으로 갑자기 통합하려 들면 소화가 잘 안됩니다.
          유엔진은 최고의 오픈소스 제품들을 소스코드의 깊은 레벨에서부터 통합하여 유엔진의 통합 모델링 환경에서 Workflow - EAI - B2Bi - Decision Tree - Page Flow를 통합 모델링, 실행하는 것을 지원하는 몇 안되는 제품입니다.
          BPM의 업무 진행의 복병은 한번 커밋해버린 지난 단계의 업무를 때때로 복구하길 원한다는 것입니다.
          물론 BPM엔진이 지난 일에 대해 모든 것을 기억하고 그것을 정확히 복구해주면 가능하겠지만 프로세스가 실질적으로 설계된 모습을 모면,
          외부 데이터베이스에의 접근등 BPM이 알아서 할 수 없는 권한밖의 일들또한 모델링이 되기 때문이 이를 복구한다는것은 아주 어려운 일입니다.
          현존하는 기술로서 이를 지원하기 위한 기능으로 "Compensation Handling"혹은 "Business Transaction"이라는 기법이 있는데,
          이는 미리 프로세스 설계시에 순차흐름시 동작하는 change에 반대되는 복구 로직을 pair로 작성하는 것입니다.
          유엔진은 BPEL4WS에 정의된 compensation handling framework를 지원하여 이러한 복구로직에 대한 이벤트 핸들링 처리를 지원합니다.
          업무 담당자의 수나 어떤 데이터의 수에 따라 동적으로 프로세스 일부의 병렬건수가 동적으로 늘어나거나 줄어들고 그로인한 결과 데이터의 배분과 취합 또한 자동화되어야 하는 아주 복잡한 이슈가 현업에서는 아주 빈번히 발생합니다.
          이를 유엔진은 GUI설정과 동적 프로세스 변수 배열처리의 기능을 통해 최대한 쉽고 용이하게 현업이 이러한 멀티플인스턴스(Multiple Instances)를 구현할 수 있도록 지원합니다.
          이외에도, 유엔진 3.0에는 "집단지성기반의 사용자에의한 자생적 프로세스 개선" 기능,
          웹에서 별도 설치 전혀없이 MS Office의 모든 기능을 수행가능한 순수 자바 오피스 "u-Office"내장,
          다양한 Web 2.0 도구들을 통한 KM2.0과 BPM2.0의 통합 등의 혁신적인 기능들이 지속적으로 추가되어가고 있습니다.
          이러한 월등한 기능적 우월성이 가능한것은 유엔진은 단일 SW회사의 일부 "머리"들이 고집스럽게 혼자서 만드는 제품이 아니라 많은 컨소시엄 참여기업들의 개발참여와 사용자들의 수많은 버그신고 등에 의해 자생적으로 집단지성에 의해 성장하는 제품이기 때문입니다.
          <br><br>
          <h3>(참고자료)</h3>
<pre class="language-">
1. 좋은 BPMS가 가져야 하는 속성 (Ismael Galimi-The founder of BPMI.org)
2. 모델링이 곧 실행 프로세스 (Zero Coding) 단일 툴을 통한 통합 (End-to-End Process Modeling)
3. 업무관리자에 의한 프로세스 복구 (Compensation Handling)
4. 사용자 설정을 통한 통계 분석 개발 (Native BAM)
5. 확장적 업무 표현력 (Extensible Vocabulary)</pre>
        </div>

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

        <br><br>
        <h3 style = "font-size:30px; font-weight:500;">uEngine BPM Video</h3>
        <h3>BPM 기본</h3>
        <iframe style ="width:100%; height:600px; margin:20px 0 20px 0;"
          src="https://www.youtube.com/embed/Wnl9tx3AwAI"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>

        <br><br>
        <h3>uEngine 사용자 가이드 동영상</h3>

        <table style = "width:100%;">
          <tr><!-- 첫번째 줄 시작 -->
              <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=Wnl9tx3AwAI">01 다운로드 및 설치</g-link></td>
              <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=IXe7pp6YvE0">02 기본메뉴 설명</g-link></td>
              <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=nU3H78tbBqg">03 기초모델링</g-link></td>
              <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=ZL6sThgtiVc">04 폼기반업무</g-link></td>
              <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=jYQs1fj2kI4">05 조건분기</g-link></td>
          </tr><!-- 첫번째 줄 끝 -->

          <tr><!-- 두번째 줄 시작 -->
              <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=ZPuNhquycDQ">06 루프</g-link></td>
              <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=vcSUQBNkkSk">07 서브프로세스</g-link></td>
              <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=1ff_U48ob90">08 데이타베이스</g-link></td>
              <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=t2ZSiBIKcOc">09 룰프로세스</g-link></td>
              <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=vcSUQBNkkSk">10 멀티플인스턴스</g-link></td>
          </tr><!-- 두번째 줄 끝 -->

          <tr><!-- 세번째 줄 시작 -->
              <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=91KsXx2jutI">11 이벤트핸들링</g-link></td>
              <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=mjHnq-675IA">12 보상핸들링</g-link></td>
              <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=kkd3m7151fg">13 영업수주프로세스</g-link></td>
              <td></td>
              <td></td>
          </tr><!-- 세번째 줄 끝 -->
        </table>

        <br><br>
        <h3 style = "font-size:30px; font-weight:500;">실전예제</h3>
        <h3>업무 프로세스와 교육 프로세스의 통합</h3>
        <iframe style ="width:100%; height:600px; margin:20px 0 20px 0;" src="https://www.youtube.com/embed/-sbmBuC512E"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>

        <br><br>
        <h3 style = "font-size:30px; font-weight:500;">실전예제</h3>
        <h3>대고객 만족 프로세스</h3>

        <table style = "width:100%;">
          <tr><!-- 첫번째 줄 시작 -->
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=-sbmBuC512E">기업 AS 프로세스 1</g-link></td>
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=OG42Y10CUEs">기업 AS 프로세스 2</g-link></td>
          </tr>
        </table>

        <br><br>
        <h3 style = "font-size:30px; font-weight:500;">실전예제</h3>
        <h3>SW 개발/관리 프로세스</h3>

        <table style = "width:100%;">
          <tr><!-- 첫번째 줄 시작 -->
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=EiOKlz9q8t8">프로세스 실행 오버뷰</g-link></td>
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=WxpKfTJCc7s">프로세스 모델링 오버뷰</g-link></td>
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=Dhi4CFS2hGk">유연한 프로세스 관리 기법</g-link></td>
          </tr>
        </table>

        <h3 style = "font-size:30px; font-weight:500;">유엔진 아키텍처</h3>

        <table style = "width:100%;">
          <tr><!-- 첫번째 줄 시작 -->
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=pjzQtRa7nNQ">유엔진 프로세스 모델정의 1</g-link></td>
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=mGJ8CAnzc6Q">유엔진 프로세스 모델정의 2</g-link></td>
            <td></td>
          </tr>

          <tr><!-- 두번째 줄 시작 -->
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=ricAyobgOWc">uEngine Customization 1</g-link></td>
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=y18BVqzF3HQ">uEngine Customization 2</g-link></td>
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=4AcukQYQRNY">uEngine Customization 3</g-link></td>
          </tr>

          <tr><!-- 세번째 줄 시작 -->
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=KmzrYCy275s">엔진 내부 해부 1</g-link></td>
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=BIecI-Va3SA">엔진 내부 해부 2</g-link></td>
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=PhssGDmjCWw">엔진 내부 해부 3</g-link></td>
          </tr>
        </table>

        <br><br>
        <h3 style = "font-size:30px; font-weight:500;">유엔진 개발환경 셋팅</h3>

        <table style = "width:100%;">
          <tr><!-- 첫번째 줄 시작 -->
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=bd2-CG6hSn0&feature=youtu.be">디버깅 및 소스 분석 1</g-link></td>
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=D04xN2PuP4I">디버깅 및 소스 분석 2</g-link></td>
          </tr>

          <tr><!-- 두번째 줄 시작 -->
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=3e2YXMBjWBU">이클립스 설정 1</g-link></td>
            <td><g-link style="color:#2979FF;" to="https://www.youtube.com/watch?v=CML13YxYBW4">이클립스 설정 2</g-link></td>
          </tr>
        </table>
  </Layout>

  <footer 
    style = "width:100%;
    height:300px;
    background-color:#1E88E5;"
  >
    <div class="flex" style = "width:20%; margin-left:40%;  padding-top:60px;">
      <div>
      <g-image style="display:block;" src="../../uengine-image/logo.png"></g-image>
      </div>
      <div style = "color:#5E5B5B; font-size:60px; margin:-10px 0 0 1px;">5</div>
    </div>
    <div style = "width:100%; height:100px; text-align:center; font-size:16px; color:white; font-weight:300; line-height:50px; padding-top:20px;">
      <div>Copyright © 2017 uEngine &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; All Rights Reserved &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Designed By Sppark &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Address 서울 서초구 신반포로45길 18 주일빌딩 501호</div>
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

td {
    border: 1px solid #999;
    text-align:center;
    padding:5px !important;
}

</style>
