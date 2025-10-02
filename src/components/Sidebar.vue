<template>
  <div
    ref="sidebar"
    v-if="showSidebar"
    class="px-4 pt-8 lg:pt-12"
  >
    <div
      v-for="(section, index) in sidebar.sections"
      :key="section.title"
      class="pb-4 mb-4 border-ui-border"
      :class="{ 'border-b': index < sidebar.sections.length -1 }"
    >
      <h3 class="pt-0 mt-0 mb-1 text-sm tracking-tight uppercase border-none">
        {{ section.title }}
      </h3>

      <ul class="max-w-full pl-2 mb-0">
        <li
          v-for="item in processItems(section.items)"
          :id="item.path || item.url"
          :key="item.path || item.url"
          :class="getClassesForAnchor(item)"
          @mousedown="$emit('navigate')"
        >
          <g-link
            v-if="!item.isExternal"
            :to="`${item.path}`"
            class="flex items-center py-1 font-semibold"
          >
           <span
              class="absolute w-2 h-2 -ml-3 rounded-full opacity-0 bg-ui-primary transition transform scale-0 origin-center"
              :class="{
                'opacity-100 scale-100': currentPage.path === item.path
              }"
            ></span>
            {{ item.title }}
          </g-link>
          <a
            v-else
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center py-1 font-semibold"
          >
            {{ item.title }}
            <!-- <span class="ml-1 text-xs opacity-60">↗</span> -->
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: []
    };
  },
  created() {
    this.$nextTick(() => {
      this.scrollToActiveLink();
    });
  },
  computed: {
    pages() {
      return this.$page.allMarkdownPage.edges.map(edge => edge.node);
    },
    currentLanguage() {
      // 현재 페이지 경로를 기반으로 언어 감지
      const path = this.$page.markdownPage ? this.$page.markdownPage.path : '/';
      const sidebarSettings = this.$siteSettings.sidebar || {};
      
      // 설정된 모든 언어에 대해 경로 확인
      for (const langCode of Object.keys(sidebarSettings)) {
        if (path.startsWith(`/${langCode}/`)) {
          return langCode;
        }
      }
      
      // 기본 언어 반환
      return this.$siteSettings.defaultLanguage || 'ko';
    },
    sidebar() {
      const language = this.currentLanguage;
      const sidebarSettings = this.$siteSettings.sidebar || {};
      const sidebarLangData = sidebarSettings[language];
      
      if (!sidebarLangData || !sidebarLangData.navigation || !Array.isArray(sidebarLangData.navigation)) {
        return null;
      }
      
      const currentPageSidebar = this.$page.markdownPage ? this.$page.markdownPage.sidebar : 'getting-started';
      return sidebarLangData.navigation.find(
        sidebar => sidebar.name === currentPageSidebar
      );
    },
    showSidebar() {
      const markdownPage = this.$page.markdownPage;
      return markdownPage && markdownPage.sidebar && this.sidebar;
    },
    currentPage() {
      return this.$page.markdownPage;
    }
  },
  methods: {
    getClassesForAnchor(item) {
      const path = item.path || item.url;
      return {
        "text-ui-primary": this.currentPage.path === path,
        "transition transform hover:translate-x-1 hover:text-ui-primary": this.currentPage.path !== path
      };
    },
    processItems(items) {
      return items.map(item => {
        // 문자열인 경우
        if (typeof item === 'string') {
          // HTTP(S) URL인지 확인
          if (item.startsWith('http://') || item.startsWith('https://')) {
            return {
            };
          }
          // 내부 페이지 경로인 경우
          else {
            // 상대 경로를 현재 언어에 맞는 절대 경로로 변환
            const language = this.currentLanguage;
            const fullPath = `/${language}/${item}`;
            const page = this.pages.find(page => page.path === fullPath);
            return page;
          }
        }
        // 객체인 경우 (이미 처리된 데이터)
        else if (item && typeof item === 'object') {
          return item;
        }
        return null;
      }).filter(item => item); // null/undefined 제거
    },
    scrollToActiveLink() {
      if (this.currentPage.path) {
        this.$nextTick(() => {
          const activeElement = document.getElementById(this.currentPage.path);
          if (activeElement) {
            activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        });
      }
    }
  },  
};
</script>
