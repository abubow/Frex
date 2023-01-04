import SvgWrapper from "../SvgWrapper";

type Props = {
    fill?: string;
};

const Moon = ({ fill = "#808191" }: Props) => {
    return (
        <SvgWrapper>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={fill}
                d="M13.019 21.998c-3.729 0-7.313-2.093-9.032-5.673a9.93 9.93 0 01-.419-7.642 9.938 9.938 0 015.108-5.7c1.359-.653 2.855-1.024 4.364-.981.994.028 1.325.764.386 1.321-2.98 1.768-4.301 6.583-2.852 9.601 1.338 2.786 5.118 5.816 9.467 4.224.581-.213 1.28.376.693 1.188-.855 1.182-2.089 2.046-3.403 2.677a9.962 9.962 0 01-4.312.985z"
            ></path>
        </SvgWrapper>
    );
};

export default Moon;
