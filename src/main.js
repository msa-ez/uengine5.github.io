// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import gridsomeConfig from '../gridsome.config'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // gridsome.config의 settings를 전역으로 사용 가능하게 설정
  Vue.prototype.$siteSettings = gridsomeConfig.settings

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
          try {
            // URL 인코딩된 해시를 디코딩
            const hash = decodeURIComponent(to.hash);
            const el = document.querySelector(hash);
            if (el) {
              el.scrollIntoView({ behavior: 'auto', block: 'start' });
            }
          } catch (e) {
            // querySelector 실패 시 ID로 직접 찾기
            try {
              const id = to.hash.slice(1); // # 제거
              const decodedId = decodeURIComponent(id);
              const el = document.getElementById(decodedId);
              if (el) {
                el.scrollIntoView({ behavior: 'auto', block: 'start' });
              }
            } catch (err) {
              console.warn('앵커 스크롤 실패:', to.hash);
            }
          }
        }, 300); // 필요 시 시간 조정 가능
      });
    }
  });  
}
