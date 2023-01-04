type Props = {
    fill?: string;
};

const ChevronDown = ({ fill = "#808191" }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={fill}
            className="h-6 w-6"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
};

export default ChevronDown;
