export default {
  widgets: [
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
                  buildHookId: '5f50ef1079c6fa23138d4449',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wqnuowkg',
                  apiId: '4a2c1b27-90e6-4ccc-b43f-64762b6f795e'
                },
                {
                  buildHookId: '5f50ef10e79d8f21216680f8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qoe3njty',
                  apiId: 'cc8be8fb-9fcc-45ee-88f3-4bd61abafd27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/teddirez/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qoe3njty.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
