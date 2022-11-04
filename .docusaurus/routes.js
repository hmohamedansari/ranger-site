import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ranger-site/__docusaurus/debug',
    component: ComponentCreator('/ranger-site/__docusaurus/debug', 'c6b'),
    exact: true
  },
  {
    path: '/ranger-site/__docusaurus/debug/config',
    component: ComponentCreator('/ranger-site/__docusaurus/debug/config', '33e'),
    exact: true
  },
  {
    path: '/ranger-site/__docusaurus/debug/content',
    component: ComponentCreator('/ranger-site/__docusaurus/debug/content', '455'),
    exact: true
  },
  {
    path: '/ranger-site/__docusaurus/debug/globalData',
    component: ComponentCreator('/ranger-site/__docusaurus/debug/globalData', 'c67'),
    exact: true
  },
  {
    path: '/ranger-site/__docusaurus/debug/metadata',
    component: ComponentCreator('/ranger-site/__docusaurus/debug/metadata', 'fb2'),
    exact: true
  },
  {
    path: '/ranger-site/__docusaurus/debug/registry',
    component: ComponentCreator('/ranger-site/__docusaurus/debug/registry', 'eae'),
    exact: true
  },
  {
    path: '/ranger-site/__docusaurus/debug/routes',
    component: ComponentCreator('/ranger-site/__docusaurus/debug/routes', '6fb'),
    exact: true
  },
  {
    path: '/ranger-site/blog',
    component: ComponentCreator('/ranger-site/blog', '8e7'),
    exact: true
  },
  {
    path: '/ranger-site/blog/archive',
    component: ComponentCreator('/ranger-site/blog/archive', '4fe'),
    exact: true
  },
  {
    path: '/ranger-site/blog/first-blog-post',
    component: ComponentCreator('/ranger-site/blog/first-blog-post', 'eaa'),
    exact: true
  },
  {
    path: '/ranger-site/blog/long-blog-post',
    component: ComponentCreator('/ranger-site/blog/long-blog-post', '938'),
    exact: true
  },
  {
    path: '/ranger-site/blog/mdx-blog-post',
    component: ComponentCreator('/ranger-site/blog/mdx-blog-post', '942'),
    exact: true
  },
  {
    path: '/ranger-site/blog/tags',
    component: ComponentCreator('/ranger-site/blog/tags', '30b'),
    exact: true
  },
  {
    path: '/ranger-site/blog/tags/docusaurus',
    component: ComponentCreator('/ranger-site/blog/tags/docusaurus', '613'),
    exact: true
  },
  {
    path: '/ranger-site/blog/tags/facebook',
    component: ComponentCreator('/ranger-site/blog/tags/facebook', 'e51'),
    exact: true
  },
  {
    path: '/ranger-site/blog/tags/hello',
    component: ComponentCreator('/ranger-site/blog/tags/hello', '5af'),
    exact: true
  },
  {
    path: '/ranger-site/blog/tags/hola',
    component: ComponentCreator('/ranger-site/blog/tags/hola', '196'),
    exact: true
  },
  {
    path: '/ranger-site/blog/welcome',
    component: ComponentCreator('/ranger-site/blog/welcome', 'a74'),
    exact: true
  },
  {
    path: '/ranger-site/markdown-page',
    component: ComponentCreator('/ranger-site/markdown-page', '0c4'),
    exact: true
  },
  {
    path: '/ranger-site/docs',
    component: ComponentCreator('/ranger-site/docs', 'e9a'),
    routes: [
      {
        path: '/ranger-site/docs/category/tutorial---basics',
        component: ComponentCreator('/ranger-site/docs/category/tutorial---basics', 'dd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-site/docs/category/tutorial---extras',
        component: ComponentCreator('/ranger-site/docs/category/tutorial---extras', '1bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-site/docs/intro',
        component: ComponentCreator('/ranger-site/docs/intro', '9aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-site/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/ranger-site/docs/tutorial-basics/congratulations', '2a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-site/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/ranger-site/docs/tutorial-basics/create-a-blog-post', '9a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-site/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/ranger-site/docs/tutorial-basics/create-a-document', '3f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-site/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/ranger-site/docs/tutorial-basics/create-a-page', 'efb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-site/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/ranger-site/docs/tutorial-basics/deploy-your-site', 'd35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-site/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/ranger-site/docs/tutorial-basics/markdown-features', '31c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-site/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/ranger-site/docs/tutorial-extras/manage-docs-versions', '365'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ranger-site/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/ranger-site/docs/tutorial-extras/translate-your-site', 'f11'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ranger-site/',
    component: ComponentCreator('/ranger-site/', '6a9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
