import { ReactNode } from "react";

type Props = {
    children: ReactNode
};

const SvgWrapper = (props: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.01}
            stroke="none"
            className="h-4 w-4"
        >
            {props.children}
        </svg>
    );
};

export default SvgWrapper;
