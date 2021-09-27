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
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://intro.bpm-uengine5.io'),
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/uengine/', title: 'Docs' }
      ]
    },
    sidebar: [
      {
        name: 'uengine',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/uengine/',
              '/uengine/installation/',
              '/uengine/writing-content/',
              '/uengine/deploying/',
              '/uengine/sidebar/',
              '/uengine/message-listener/',
              '/uengine/script-task/',
            ]
          },
          {
            title: 'resource',
            items: [
              '/group/settings/',
            ]
          },
          {
            title: 'Chapter',
            items: [
              '/tutorial/chapter1/',
              '/tutorial/chapter2/',
              '/tutorial/chapter3/',
              '/tutorial/chapter4/',
              '/tutorial/chapter5/',
              '/tutorial/chapter6/',
              '/tutorial/chapter7/',
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
