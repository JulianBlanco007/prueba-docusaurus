import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/prueba-docusaurus/blog',
    component: ComponentCreator('/prueba-docusaurus/blog', '9e3'),
    exact: true
  },
  {
    path: '/prueba-docusaurus/blog/archive',
    component: ComponentCreator('/prueba-docusaurus/blog/archive', 'bb7'),
    exact: true
  },
  {
    path: '/prueba-docusaurus/blog/authors',
    component: ComponentCreator('/prueba-docusaurus/blog/authors', 'af7'),
    exact: true
  },
  {
    path: '/prueba-docusaurus/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/prueba-docusaurus/blog/authors/all-sebastien-lorber-articles', 'efe'),
    exact: true
  },
  {
    path: '/prueba-docusaurus/blog/authors/yangshun',
    component: ComponentCreator('/prueba-docusaurus/blog/authors/yangshun', '394'),
    exact: true
  },
  {
    path: '/prueba-docusaurus/blog/first-blog-post',
    component: ComponentCreator('/prueba-docusaurus/blog/first-blog-post', '4e9'),
    exact: true
  },
  {
    path: '/prueba-docusaurus/blog/long-blog-post',
    component: ComponentCreator('/prueba-docusaurus/blog/long-blog-post', '8ba'),
    exact: true
  },
  {
    path: '/prueba-docusaurus/blog/mdx-blog-post',
    component: ComponentCreator('/prueba-docusaurus/blog/mdx-blog-post', '06a'),
    exact: true
  },
  {
    path: '/prueba-docusaurus/blog/tags',
    component: ComponentCreator('/prueba-docusaurus/blog/tags', 'c62'),
    exact: true
  },
  {
    path: '/prueba-docusaurus/blog/tags/docusaurus',
    component: ComponentCreator('/prueba-docusaurus/blog/tags/docusaurus', 'b48'),
    exact: true
  },
  {
    path: '/prueba-docusaurus/blog/tags/facebook',
    component: ComponentCreator('/prueba-docusaurus/blog/tags/facebook', '12b'),
    exact: true
  },
  {
    path: '/prueba-docusaurus/blog/tags/hello',
    component: ComponentCreator('/prueba-docusaurus/blog/tags/hello', '8ea'),
    exact: true
  },
  {
    path: '/prueba-docusaurus/blog/tags/hola',
    component: ComponentCreator('/prueba-docusaurus/blog/tags/hola', '7b4'),
    exact: true
  },
  {
    path: '/prueba-docusaurus/blog/welcome',
    component: ComponentCreator('/prueba-docusaurus/blog/welcome', '370'),
    exact: true
  },
  {
    path: '/prueba-docusaurus/markdown-page',
    component: ComponentCreator('/prueba-docusaurus/markdown-page', '7ed'),
    exact: true
  },
  {
    path: '/prueba-docusaurus/docs',
    component: ComponentCreator('/prueba-docusaurus/docs', '09a'),
    routes: [
      {
        path: '/prueba-docusaurus/docs',
        component: ComponentCreator('/prueba-docusaurus/docs', '14d'),
        routes: [
          {
            path: '/prueba-docusaurus/docs',
            component: ComponentCreator('/prueba-docusaurus/docs', 'b4c'),
            routes: [
              {
                path: '/prueba-docusaurus/docs/category/tutorial---basics',
                component: ComponentCreator('/prueba-docusaurus/docs/category/tutorial---basics', '900'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prueba-docusaurus/docs/category/tutorial---extras',
                component: ComponentCreator('/prueba-docusaurus/docs/category/tutorial---extras', '7ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prueba-docusaurus/docs/intro',
                component: ComponentCreator('/prueba-docusaurus/docs/intro', '867'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prueba-docusaurus/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/prueba-docusaurus/docs/tutorial-basics/congratulations', '29b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prueba-docusaurus/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/prueba-docusaurus/docs/tutorial-basics/create-a-blog-post', 'fee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prueba-docusaurus/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/prueba-docusaurus/docs/tutorial-basics/create-a-document', '118'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prueba-docusaurus/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/prueba-docusaurus/docs/tutorial-basics/create-a-page', '237'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prueba-docusaurus/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/prueba-docusaurus/docs/tutorial-basics/deploy-your-site', '8e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prueba-docusaurus/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/prueba-docusaurus/docs/tutorial-basics/markdown-features', '0e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prueba-docusaurus/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/prueba-docusaurus/docs/tutorial-extras/manage-docs-versions', '1f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prueba-docusaurus/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/prueba-docusaurus/docs/tutorial-extras/translate-your-site', 'd57'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/prueba-docusaurus/',
    component: ComponentCreator('/prueba-docusaurus/', '75e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
