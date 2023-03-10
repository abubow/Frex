type Props = {
    fill?: string;
};

const Home = ({ fill = "#808191" }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            fill="none"
            viewBox="0 0 17 16"
        >
            <path
                fill={fill}
                d="M6.093 13.85V11.81c0-.52.425-.942.95-.942h1.915c.252 0 .493.099.671.276a.939.939 0 01.278.666v2.039a.809.809 0 00.238.577.82.82 0 00.58.24h1.307a2.306 2.306 0 001.63-.666c.431-.428.674-1.01.674-1.615V6.578c0-.49-.218-.954-.597-1.268L9.293 1.784a2.065 2.065 0 00-2.632.048L2.314 5.31a1.65 1.65 0 00-.644 1.268v5.802a2.296 2.296 0 002.304 2.287H5.25a.82.82 0 00.824-.812l.018-.005z"
            ></path>
        </svg>
    );
};

export default Home;
