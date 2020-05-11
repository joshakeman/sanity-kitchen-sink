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
                  buildHookId: '5eb96eb18a29b25f1aa495d1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ktpt7svj',
                  apiId: '7393382c-40cd-468e-912f-17079c222714'
                },
                {
                  buildHookId: '5eb96eb19b1349b29d29286f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bb636x4w',
                  apiId: '42f93fd0-d21a-4833-9b63-8547f50c1b36'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshakeman/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bb636x4w.netlify.app', category: 'apps'}
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
