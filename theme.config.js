import Vercel from './components/Vercel';
import { useRouter } from 'next/router';

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  'en-US': 'Question? Give us feedback →',
  'zh-CN': '有疑问？给我们反馈 →',
};

const TITLE_WITH_TRANSLATIONS = {
  'en-US': "<1kb compiler-augmented virtual DOM. It's fast!",
  'zh-CN': '<1kb 专注于编译器的虚拟 DOM - 速度非常快！ ',
};

export default {
  projectLink: 'https://github.com/aidenybai/million',
  docsRepositoryBase: 'https://github.com/aidenybai/docs',
  titleSuffix: ' – Million',
  feedbackLink: () => {
    const { locale } = useRouter();
    return FEEDBACK_LINK_WITH_TRANSLATIONS[locale] || FEEDBACK_LINK_WITH_TRANSLATIONS['en-US'];
  },
  feedbackLabels: 'feedback',
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: true,
  footerText: ({ locale }) => {
    switch (locale) {
      case 'zh-CN':
        return (
          <a
            rel="noopener"
            className="w-full inline-flex items-center no-underline text-current font-semibold grayscale opacity-75 hover:opacity-100"
            href="https://vercel.com/?utm_source=millionjs&utm_campaign=oss"
            target="_blank"
          >
            <span className="mr-1">由</span>
            <span>
              <Vercel />
            </span>
            驱动
          </a>
        );
      default:
        return (
          <a
            rel="noopener"
            className="w-full inline-flex items-center no-underline text-current font-semibold grayscale opacity-75 hover:opacity-100"
            href="https://vercel.com/?utm_source=millionjs&utm_campaign=oss"
            target="_blank"
          >
            <span className="mr-1">由</span>
            <span>
              <Vercel />
            </span>
            驱动
          </a>
        );
    }
  },
  footerEditOnGitHubLink: true, // will link to the docs repo
  floatTOC: true,
  unstable_stork: false,
  unstable_flexsearch: true,
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <img
          className="md:inline object-contain hidden"
          style={{ height: '2em' }}
          src="/icon.svg"
        />
        <span className="ml-2 mr-2 font-extrabold hidden md:inline">Million</span>
        <span className="text-gray-600 font-normal hidden md:inline">
          {TITLE_WITH_TRANSLATIONS[locale] || ''}
        </span>
      </>
    );
  },
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case 'zh-CN':
        return '在 GitHub 上编辑本页 →';
      default:
        return 'Edit this page on GitHub →';
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="<1kb virtual DOM - it's fast!" />
      <meta name="og:title" content="Million" />
      <link
        rel="icon"
        type="image/svg+xml"
        href="https://raw.githubusercontent.com/aidenybai/million/main/.github/assets/icon.svg"
      />
    </>
  ),
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'zh-CN', text: '中文' },
  ],
};
