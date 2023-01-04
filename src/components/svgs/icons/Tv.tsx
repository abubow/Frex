import SvgWrapper from "../SvgWrapper";

type Props = {
    fill?: string;
};

const Tv = ({ fill = "#808191" }: Props) => {
    return (
        <SvgWrapper>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={fill}
                d="M3 3a2 2 0 00-2 2v12a2 2 0 002 2h5v1a1 1 0 001 1h6a1 1 0 001-1v-1h5a2 2 0 002-2V5a2 2 0 00-2-2H3zm1 2h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
            ></path>
        </SvgWrapper>
    );
};

export default Tv;
