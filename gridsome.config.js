// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '',// 주석 부분 : uengine6 뒤에 각 리스트의 타이틀을 출력하고 싶을때 사용
  // titleTemplate: 'uengine6 - %s',
  // titleTemplate: 'uengine6',
  // icon: {
  //   favicon: './src/assets/favicon.png',
  //   touchicon: './src/assets/favicon.png'
  // },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://intro.bpm-getting-started5.io'),
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/getting-started/', title: 'Docs' }
      ]
    },
    defaultLanguage: 'ko',
    fallbackLanguage: 'en',
    sidebar: {
      ko: {
        // 언어 메타데이터
        meta: {
          code: 'ko',
          label: '한국어',
          flag: '🇰🇷',
          countries: ['KR'],
          educationButtonText: '교육 신청',
          defaultPath: '/ko/getting-started/'
        },
        // 사이드바 구조
        navigation: [
          {
            name: 'getting-started',
            sections: [
              {
                title: 'uEngine6 BPM',
                items: [
                  'bpm6-intro/',
                  'bpm6-intro/business-process/',
                ]
              },
              {
                title: '설치 및 접속 설정',
                items: [
                  'bpm6-install/',
                  'bpm6-install/bpm6-account/',
                ]
              },          
              {
                title: '모델링 및 실행',
                items: [
                  'bpm6-intro/example-video/',
                  'bpm6-started/',
                  'bpm6-started/bpm6-modeling/',
                  'bpm6-started/form-definition/',
                  'bpm6-started/form-mapping/',
                  'bpm6-started/conditional-branch/',
                  'bpm6-started/multiple-instance/',
                  // 'bpm6-started/script-task/',
                  'bpm6-started/bpm6-external/',
                  'bpm6-started/bpm6-execution/',
                  
                  // 'api-customizing/api-reference/',
                  // 'api-customizing/message-listener/',
                  // 'api-customizing/create-project/',
                  // 'api-customizing/new-activity/',
                  // 'api-customizing/migration/',
                  // 'api-customizing/transaction-listener/',
                  // 'api-customizing/script-task/',
                  // 'api-customizing/bpm6-system-integration/',
                ]
              },
              {
                title: '운영 및 데이터관리',
                items: [
                  'bpm6-admin/',
                  // 'bpm6-admin/bpm6-admin-instance/',
                  'bpm6-admin/bpm6-file/',
                  'bpm6-admin/bpm6-database/',
                ]
              },
              {
                title: '프로세스 API',
                items: [
                  'bpm6-api/',
                  'bpm6-api/bpm6-message-listener/',
                  'bpm6-api/bpm6-transaction-listener/',
                ]
              },
              {
                title: '배포및 설정 가이드',
                items: [
                  'bpm6-deploy-config/',
                  'bpm6-deploy-config/uengine3-migration/',
                ]
              },
              // {
              //   title: 'AI를 활용한 프로세스 모델링 가이드',
              //   items: [
              //     'ai-generating/',
              //     'ai-generating/process-definition/',
              //     'ai-generating/form-definition/',
              //   ]
              // },
              {
                title: 'BPMN 프로젝트 예제',
                items: [
                  'process-example/',
                  // 'process-example/sub-process/',
                  // 'process-example/call-activity/',
                ]
              },
              {
                title: '프로세스 자산 라이브러리(PAL)',
                items: [
                  'pal-edition/',
                  'pal-edition/process-definition-map/',
                  'pal-edition/process-definition-edit/',
                  // 'pal-edition/phase/',
                  // 'pal-edition/save-image/',
                ]
              },

              {
                title: '문의하기',
                items: [
                  'bpm6-contact/',
                ]
              },
            ]
          }
        ]
      },
      // en: {
      //   // 언어 메타데이터
      //   meta: {
      //     code: 'en',
      //     label: 'English',
      //     flag: '🇺🇸',
      //     countries: ['US', 'GB', 'CA', 'AU', 'NZ', 'IE'],
      //     educationButtonText: 'Apply for Training',
      //     defaultPath: '/en/bpm6-intro/'
      //   },
      //   // 사이드바 구조
      //   navigation: [
      //     {
      //       name: 'getting-started',
      //       sections: [
      //         {
      //           title: 'uEngine6 BPM',
      //           items: [
      //             'bpm6-intro/',
      //             'bpm6-intro/business-process/',
      //           ]
      //         },
      //       ]
      //     }
      //   ]
      // }
      // 언어 추가 후 수정: 새 언어 설정을 여기에 추가
      // jp: {
      //   // 언어 메타데이터
      //   meta: {
      //     code: 'jp',
      //     label: '日本語',
      //     flag: '🇯🇵',
      //     countries: ['JP'],
      //     educationButtonText: '教育申請',
      //     defaultPath: '/jp/getting-started/'
      //   },
      //   // 사이드바 구조
      //   navigation: [
      //     {
      //       name: 'getting-started',
      //       sections: [
      //         {
      //           title: '始める',
      //           items: [
      //             'getting-started/',
      //             'getting-started/process-gpt-install/',
      //           ]
      //         }
      //       ]
      //     }
      //   ]
      // },
      // zh: {
      //   // 언어 메타데이터
      //   meta: {
      //     code: 'zh',
      //     label: '中文',
      //     flag: '🇨🇳',
      //     countries: ['CN', 'TW', 'HK', 'SG', 'MO'],
      //     educationButtonText: '申请培训',
      //     defaultPath: '/zh/getting-started/'
      //   },
      //   // 사이드바 구조
      //   navigation: [
      //     {
      //       name: 'getting-started',
      //       sections: [
      //         {
      //           title: '开始使用',
      //           items: [
      //             'getting-started/',
      //             'getting-started/process-gpt-install/',
      //           ]
      //         }
      //       ]
      //     }
      //   ]
      // }
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {  
      }
    }

  ]
}
