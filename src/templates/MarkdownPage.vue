<template>
  <Layout>
      <div class="flex flex-wrap items-start justify-start">

        <div class="order-2 w-full md:w-1/4 sm:pl-4 md:pl-6 lg:pl-8 sticky" style="top: 4rem">
          <OnThisPage />
        </div>

        <div class="order-1 w-full md:w-3/4">
          <div class="content" v-html="$page.markdownPage.content" />

          <div class="mt-8 pt-8 lg:mt-12 lg:pt-12 border-t border-ui-border">
            <NextPrevLinks />
          </div>
        </div>

      </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  markdownPage(id: $id) {
    id
    title
    description
    path
    timeToRead
    content
    sidebar
    next
    prev
    headings {
      depth
      value
      anchor
    }
  }
  allMarkdownPage{
    edges {
      node {
        path
        title
      }
    }
  }
}
</page-query>

<script>
import OnThisPage from '@/components/OnThisPage.vue';
import NextPrevLinks from '@/components/NextPrevLinks.vue';
import Clipboard from 'clipboard'

export default {
  components: {
    OnThisPage,
    NextPrevLinks
  },
  mounted() {
    this.$nextTick(function () {
      this.instructionCodeBlockClipBoard()
      this.updateFaviconDirectly()
    })
  },
  updated() {
    this.$nextTick(function () {
      // 전체 화면내용이 다시 렌더링된 후에 아래의 코드가 실행됩니다. 
      this.instructionCodeBlockClipBoard()
      this.updateFaviconDirectly()
    })
  },
  watch: {
    '$route'() {
      this.$nextTick(() => {
        this.updateFaviconDirectly()
      })
    }
  },

    methods: {
    updateFaviconDirectly() {
      if (!this.$page || !this.$page.markdownPage || !this.$page.markdownPage.path) {
        return;
      }
      
      const isProcessGpt = this.$page.markdownPage.path.startsWith('/process-gpt/');
      const faviconPath = isProcessGpt ? '/process-gpt-favicon.png' : '/favicon.png';
      
      console.log('=== DOM 직접 파비콘 업데이트 ===');
      console.log('현재 페이지:', this.$page.markdownPage.path);
      console.log('Process-GPT 여부:', isProcessGpt);
      console.log('파비콘 경로:', faviconPath);
      
      // ID로 파비콘 찾기
      let faviconElement = document.getElementById('favicon');
      
      // ID로 찾지 못하면 querySelector 사용
      if (!faviconElement) {
        faviconElement = document.querySelector('link[rel="icon"]');
      }
      
      if (faviconElement) {
        const timestamp = Date.now();
        faviconElement.href = `${faviconPath}?v=${timestamp}`;
        console.log('파비콘 href 직접 변경:', faviconElement.href);
      } else {
        console.log('파비콘 엘리먼트를 찾을 수 없습니다.');
      }
    },
    instructionCodeBlockClipBoard() {
      // al pre tags on the page
      const pres = document.getElementsByTagName("pre")
      // reformat html of pre tags
      if (pres !== null) {
          for (let i = 0; i < pres.length; i++) {
              // check if its a pre tag with a prism class
              if (isPrismClass(pres[i])) {
                  // insert code and copy element
                  // 이미지 저장 및 호출 https://github.com/msa-ez/uengine5.github.io/blob/main/README.md
                  pres[i].innerHTML = `<div class="markdown-body copy"><img style="" src="https://user-images.githubusercontent.com/59447401/137833005-f4f6b7b0-ac2e-4dc6-a414-3bc132b4919a.png" /></div><code class="markdown-body ${pres[i].className}">${pres[i].innerHTML}</code>`
              }
          }
      }
      // create clipboard for every copy element
      const clipboard = new Clipboard('.copy', {
          target: (trigger) => {
              return trigger.nextElementSibling;
          }
      });
      // do stuff when copy is clicked
      clipboard.on('success', (event) => {
          // event.trigger.textContent = '📄';
          setTimeout(() => {
              event.clearSelection();
              // event.trigger.textContent = '📝';
          }, 500);
      });
      // helper function
      function isPrismClass(preTag) {
          return preTag.className.substring(0, 9).indexOf('language') != -1
      }
    }
  },
  
  metaInfo() {
    const title = this.$page.markdownPage.title;
    const description = this.$page.markdownPage.description || this.$page.markdownPage.excerpt;
    const isProcessGpt = this.$page.markdownPage.path.startsWith('/process-gpt/');
    
    const baseTitle = isProcessGpt ? 'Process-GPT' : 'uEngine6 BPM';
    const faviconPath = isProcessGpt ? '/process-gpt-favicon.png' : '/favicon.png';
    
    // 정상 동작 확인용 콘솔
    console.log('=== metaInfo 실행 ===');
    console.log('현재 페이지:', this.$page.markdownPage.path);
    console.log('Process-GPT 페이지 여부:', isProcessGpt);
    console.log('설정될 타이틀:', `${title} | ${baseTitle}`);
    console.log('설정될 파비콘:', faviconPath);

    return {
      title: title,
      titleTemplate: `%s | ${baseTitle}`,
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: faviconPath,
          id: 'favicon',
          key: 'icon'
        },
        {
          rel: 'shortcut icon',
          type: 'image/png',
          href: faviconPath,
          key: 'shortcut-icon'
        }
      ],
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
@import 'prism-themes/themes/prism-material-oceanic.css';

/* 클립보드 스타일 */
:not(pre) > code[class*="language-"] {
  white-space: pre;
  overflow-x: auto;
}
pre[class*=language-] {
  position: relative;
  overflow: auto;
}

code[class*=language-]:nth-child(1) {
  margin-left:-1px;
}

pre[class*=language-] .copy {
  content: "copy";
  position: absolute;
  width:32px;
  height:32px;
  filter: invert(100%);
  top: 0;
  right: 0;
  margin-top:35px;
  margin-right:-8px;
  transform: translate(-10px, -90%);
  cursor: pointer;
  transition: all 200ms ease;
}

pre[class*=language-]:hover .copy {
  transform: translate(-10px, -100%);
}
pre[class*=language-]:hover .copy:hover {
  color: gray;
}
code {
  overflow: scroll;
  border-style:none;
}
code ::selection {
		color: #5967d8;
}
code[class*="language-"]::selection, 
pre[class*="language-"]::selection, 
code[class*="language-"] ::selection,
pre[class*="language-"] ::selection{background-color:white;}
</style>