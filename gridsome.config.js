// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
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
    sidebar: [
      {
        name: 'getting-started',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/getting-started/',
              '/getting-started/form-mapping/',
              '/getting-started/conditional-branch/',
              '/getting-started/multiple-instance/',
              '/getting-started/process-workflow/',
              '/getting-started/soa-architecture/',
            ]
          },
          {
            title: 'API & CUSTOMIZING',
            items: [
              '/api-customizing/api-reference/',
              '/api-customizing/message-listener/',
              '/api-customizing/create-project/',
              '/api-customizing/new-activity/',
              '/api-customizing/migration/',
              '/api-customizing/transaction-listener/',
              '/api-customizing/script-task/',
              '/api-customizing/external-service/',
            ]
          },
          {
            title: 'BPM 개념 학습',
            items: [
              '/bpm-concept/example-video/',
              '/bpm-concept/business-process/',
              '/bpm-concept/workflow/',
              '/bpm-concept/workflow-management-system/',
              '/bpm-concept/open-source/',
              '/bpm-concept/facebook/',
            ]
          }
        ]
      }
    ]
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
