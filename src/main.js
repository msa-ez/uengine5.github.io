// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  require('../content/global-style.css');

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    })
    next()
  })

  // 앵커 링크 스크롤 위치 보정
  router.afterEach((to) => {
    if (to.hash) {
      Vue.nextTick(() => {
        // 약간의 시간 후에 이동 (콘텐츠 로딩 고려)
        setTimeout(() => {
          const el = document.querySelector(to.hash);
          if (el) {
            el.scrollIntoView({ behavior: 'auto', block: 'start' });
          }
        }, 300); // 필요 시 시간 조정 가능
      });
    }
    
    // 파비콘 동적 변경 (클라이언트 사이드에서만 실행)
    if (isClient) {
      Vue.nextTick(() => {
        // 기존 파비콘 링크 제거
        const existingFavicons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]');
        existingFavicons.forEach(link => link.remove());
        
        // 새 파비콘 설정
        const isProcessGpt = to.path.startsWith('/process-gpt/');
        const faviconPath = isProcessGpt ? '/process-gpt-favicon.png' : '/favicon.png';
        
        // 새 링크 엘리먼트 생성
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.href = faviconPath + '?v=' + Date.now(); // 캐시 방지
        
        // head에 추가
        document.head.appendChild(link);
        
        console.log('라우터에서 파비콘 업데이트됨:', faviconPath);
      });
    }
  });  
}
