export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f4f0c72ee2d9832f2d1277d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-acw1e64p',
                  apiId: '7dfca104-dafe-4f78-b7cf-3e11820a985d'
                },
                {
                  buildHookId: '5f4f0c72ee2d98307fd1287c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-f89rwzjx',
                  apiId: 'e94799a2-b3ab-4b48-8e74-05aae8465086'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andrebeltrame/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-f89rwzjx.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
