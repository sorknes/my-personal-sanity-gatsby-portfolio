export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60412b47d3ff0e13f458c9e2',
                  title: 'Sanity Studio',
                  name: 'my-personal-sanity-gatsby-portfolio-studio',
                  apiId: '6d9e1064-4c2f-4166-b923-502be1a83484'
                },
                {
                  buildHookId: '60412b470b40c40f4227f597',
                  title: 'Portfolio Website',
                  name: 'my-personal-sanity-gatsby-portfolio',
                  apiId: 'e6e7bbee-1f3d-4125-b2f9-001a821d4bd4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sorknes/my-personal-sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://my-personal-sanity-gatsby-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
