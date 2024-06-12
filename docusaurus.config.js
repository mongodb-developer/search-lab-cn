// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// Change here to customise config

// Name of the Github Repo
const workshopName = 'search-lab-cn';
// Change this if hosting outside mongodb-developer
const organizationName = "mongodb-developer";

// Main page config
const title = "创建引人入胜的搜索体验";
const tagLine = "由 MongoDB 提供实验环境，帮助您使用 MongoDB Atlas Search 构建搜索功能";
const startButtonTitle = "进入搜索实验";
const favicon = "img/favicon.svg"

// Main Page Features
const featureList = [
  {
    title: '动手实验',
    illustration: 'img/coding.png',
    description: `
        通过实践学习，而不是通过阅读学习。
    `,
  },
  {
    title: '优秀的导师',
    illustration: 'img/highfive.png',
    description: `
        在我们优秀的导师帮助下构建，或者自己动手完成。
    `,
  },
  {
    title: '带回家的资料',
    illustration: 'img/writing.png',
    description: `
        带回这份资料，继续学习。
    `,
  },
];

// UTM stuff

const utmAdvocateName = `joel.lord`;
const utmWorkshopName = 'search-party-lab'

const utmParams = `utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=${utmWorkshopName}&utm_term=${utmAdvocateName}`;

// Footer links (probably no need to change them)

const footerLinks = [
  {
    label: "试用 MongoDB Atlas",
    href: `https://www.mongodb.com/try?${utmParams}`,
  },
  {
    label: "论坛",
    href: `https://www.mongodb.com/community/forums/${utmParams}`,
  },
  {
    label: "开发者中心",
    href: `https://www.mongodb.com/developer/${utmParams}`,
  },
  {
    label: "MongoDB 大学",
    href: `https://learn.mongodb.com/${utmParams}`,
  },
  {
    href: `https://github.com/${organizationName}/${workshopName}`,
    label: "GitHub 上的更多实验",
  },
  {
    label: `© ${new Date().getFullYear()} MongoDB, Inc.`,
    href: "#",
  },
];

///////////////////////////////////////////////////////////////////////////////
// DON'T CHANGE ANYTHING BELOW UNLESS YOU KNOW WHAT YOU'RE DOING             //
///////////////////////////////////////////////////////////////////////////////


const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${title}`,
  tagline: `${tagLine}`,
  url: `https://${workshopName}.github.io`,
  baseUrl: `/${workshopName}/`,
  projectName: `${organizationName}.github.io`,
  organizationName: `${organizationName}`,
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: `${favicon}`,
  deploymentBranch: "gh-pages",
  staticDirectories: ["static"],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  customFields: {
    startButtonTitle: `${startButtonTitle}`,
    featureList: featureList,
    utmParams
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `https://github.com/${organizationName}/${workshopName}/blob/main`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-ZJ28V71VTQ",
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      announcementBar: undefined,
      navbar: {
        title: `${title}`,
        logo: {
          alt: "MongoDB Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
          className: "navbar-logo",
          width: "135px",
          height: "100%",
        },
        items: [
          
        ],
      },
      footer: {
        style: "dark",
        links: footerLinks,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["powershell", "swift", "kotlin"],
      },
    }),
};

module.exports = config;
