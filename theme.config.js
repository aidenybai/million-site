import Vercel from './components/Vercel';

export default {
  github: 'https://github.com/aidenybai/million',
  docsRepositoryBase: 'https://github.com/aidenybai/docs',
  titleSuffix: ' – Million',
  feedbackLink: 'Question? Give us feedback →',
  feedbackLabels: 'feedback',
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: true,
  footerText: (
    <a
      rel="noopener"
      className="w-full inline-flex items-center no-underline text-current font-semibold"
      href="https://vercel.com/?utm_source=millionjs&utm_campaign=oss"
      target="_blank"
    >
      <span className="mr-1">Powered by</span>
      <span>
        <Vercel />
      </span>
    </a>
  ),
  footerEditOnGitHubLink: true, // will link to the docs repo
  floatTOC: true,
  unstable_stork: false,
  unstable_flexsearch: true,
  logo: (
    <>
      <img className="md:inline object-contain hidden" style={{ height: '2em' }} src="/icon.svg" />
      <span className="ml-2 mr-2 font-extrabold hidden md:inline">Million</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        &lt;1kb <span className="italic">compiler-augmented</span> virtual DOM. It's fast!
      </span>
    </>
  ),
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
};
