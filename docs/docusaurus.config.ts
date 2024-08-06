import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'WeePlant',
  favicon: 'img/inteli.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',

  baseUrl: '/2024-2A-T02-EC11-G03/',

  organizationName: 'Inteli-College', 
  projectName: '2024-2A-T02-EC10-G03', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/inteli.svg',
    navbar: {
      title: 'WeePlant',
      logo: {
        alt: 'Inteli Logo',
        src: 'img/inteli.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: "docSidebar",
          sidebarId: "sprint1Side",
          position: "left",
          label: "Sprint 1",
        },
        {
          type: "docSidebar",
          sidebarId: "sprint2Side",
          position: "left",
          label: "Sprint 2",
        },
        {
          type: "docSidebar",
          sidebarId: "sprint3Side",
          position: "left",
          label: "Sprint 3",
        },
        {
          type: "docSidebar",
          sidebarId: "sprint4Side",
          position: "left",
          label: "Sprint 4",
        },
        {
          type: "docSidebar",
          sidebarId: "sprint5Side",
          position: "left",
          label: "Sprint 5",
        },
        {
          href: "https://github.com/Inteli-College/2024-2A-T02-EC11-G03/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
            {
              label: 'Tutorial',
              to: '/intro',
            },
            {
              label: "Sprint 1",
              to: "/sprint-1/intro"
            },
            {
              label: "Sprint 2",
              to: "/sprint-2/intro"
            },
            {
              label: "Sprint 3",
              to: "/sprint-3/intro"
            },
            {
              label: "Sprint 4",
              to: "/sprint-4/intro"
            },
            {
              label: "Sprint 5",
              to: "/sprint-5/intro"
            },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Inteli. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
