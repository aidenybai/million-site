import styles from './features.module.css';

const Feature = ({ text, icon }) => (
  <div className={styles.feature}>
    {icon}
    <h4>{text}</h4>
  </div>
);

export default () => {
  return (
    <div className="mx-auto max-w-full w-[880px] text-center px-4 mb-10">
      <div className={styles.features}>
        <div>
          <Feature
            text="Lightweight"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            }
          />
          <Feature
            text="Framework Agnostic"
            icon={
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
              >
                <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25" />
                <path d="M8 16h.01" />
                <path d="M8 20h.01" />
                <path d="M12 18h.01" />
                <path d="M12 22h.01" />
                <path d="M16 16h.01" />
                <path d="M16 20h.01" />
              </svg>
            }
          />
        </div>
        <div>
          <Feature
            text="Blazing Fast"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
          />
          <Feature
            text="Jamstack Oriented"
            icon={
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                shapeRendering="geometricPrecision"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            }
          />
        </div>
        <div>
          <Feature
            text="Compiler Aware"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            }
          />
          <Feature
            text="TypeScript Ready"
            icon={
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                shapeRendering="geometricPrecision"
                viewBox="0 0 24 24"
              >
                <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
                <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"></path>
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};
