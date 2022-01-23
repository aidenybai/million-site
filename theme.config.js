import Vercel from './components/Vercel';

export default {
  projectLink: 'https://github.com/aidenybai/million',
  docsRepositoryBase: 'https://github.com/aidenybai/docs',
  titleSuffix: ' – Million',
  feedbackLink: () => {
    return 'Question? Give us feedback →';
  },
  feedbackLabels: 'feedback',
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: true,
  footerText: () => {
    return (
      <>
        <a
          rel="noopener"
          className="w-full inline-flex items-center no-underline text-current font-semibold grayscale opacity-75 hover:opacity-100"
          href="https://vercel.com/?utm_source=millionjs&utm_campaign=oss"
          target="_blank"
        >
          <span className="mr-1">Powered By</span>
          <span>
            <Vercel />
          </span>
        </a>
      </>
    );
  },
  footerEditOnGitHubLink: true, // will link to the docs repo
  floatTOC: true,
  unstable_stork: false,
  unstable_flexsearch: true,
  logo: () => {
    return (
      <>
        <img
          className="md:inline object-contain hidden"
          style={{ height: '2em' }}
          src="/icon.svg"
        />
        <span className="ml-2 mr-2 font-extrabold hidden text-xl md:inline">
          Million
        </span>
      </>
    );
  },
  footerEditLink: () => {
    return 'Edit this page on GitHub →';
  },
};
