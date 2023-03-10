type Props = {
    fill?: string;
};

const Wallet = ({
    fill = "#808191",
}: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="12"
            fill="none"
            viewBox="0 0 14 12"
        >
            <path
                fill={fill}
                fillRule="evenodd"
                d="M10.846 3.588h2.82C13.667 1.323 12.31 0 10.012 0H3.99C1.69 0 .334 1.323.334 3.559V8.44C.334 10.677 1.69 12 3.99 12h6.02c2.3 0 3.657-1.323 3.657-3.56v-.207h-2.82c-1.31 0-2.371-1.035-2.371-2.311 0-1.277 1.061-2.311 2.37-2.311v-.023zm-.001.993h2.323c.275 0 .498.218.498.486v1.687a.498.498 0 01-.498.485h-2.27a1.404 1.404 0 01-1.392-1.063c-.076-.39.03-.794.288-1.101a1.394 1.394 0 011.05-.494zm.104 1.774h.219c.281 0 .51-.222.51-.497a.503.503 0 00-.51-.497h-.22a.51.51 0 00-.36.142.485.485 0 00-.149.35c0 .275.227.5.51.502zM3.493 3.588h3.763c.281 0 .51-.222.51-.497a.503.503 0 00-.51-.497H3.493a.504.504 0 00-.51.491c0 .276.228.5.51.503z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};

export default Wallet;
