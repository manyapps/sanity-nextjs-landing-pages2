export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fff820bb5b90a7e5d9d867a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-xny6qpej',
                  apiId: '7ba427f5-fed2-4ed4-b648-2ec2f1e46e31'
                },
                {
                  buildHookId: '5fff820b01c26b68dff6e4b6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-49s65kn3',
                  apiId: 'f0211abd-38e0-4104-8e6e-2aa518030c89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/manyapps/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-49s65kn3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
