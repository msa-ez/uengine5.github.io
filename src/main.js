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
  });  
}
