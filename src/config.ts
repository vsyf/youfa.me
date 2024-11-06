import type { Features, Site, Ui } from './types'

export const SITE: Site = {
  website: 'https://youfa.me/',
  base: '/',
  title: "Youfa's Personal Site",
  description: 'Something about Youfa',
  author: 'Youfa Song',
  lang: 'zh-Hans',
  ogLocale: 'zh_CN',
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/blog',
      title: 'Blog',
      displayMode: 'alwaysText',
      text: 'Blog',
      // icon: 'i-ri-article-line',
    },
    {
      path: '/projects',
      title: 'Projects',
      displayMode: 'alwaysText',
      text: 'Projects',
      // icon: 'i-ri-lightbulb-line',
    },
    {
      path: '/changelog',
      title: 'Changelog',
      displayMode: 'iconToTextOnMobile',
      text: 'Changelog',
      icon: 'i-ri-draft-line',
    },
  ],
  socialLinks: [
    {
      link: 'https://github.com/yoofa',
      title: 'Youfa on Github',
      displayMode: 'alwaysIcon',
      icon: 'i-uil-github-alt',
    },
  ],
  navBarLayout: {
    left: [],
    right: [
      'internalNavs',
      'socialLinks',
      'searchButton',
      'rssLink',
      'themeButton',
    ],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: [
    { title: 'YoufaBlog', path: '/feeds' },
    { title: 'YoufaStreams', path: '/streams' },
  ],
  maxGroupColumns: 3,
  showGroupItemColorOnHover: true,
}

/**
 * Configures whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  share: [
    true,
    {
      twitter: [false, '@ste7lin'],
      mastodon: [false, '@ste7lin@fairy.id'],
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: false,
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'left',
      displayMode: 'hover',
    },
  ],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
    },
  ],
}
