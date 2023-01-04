import React from "react";
import SvgWrapper from "../SvgWrapper";

type Props = {
    fill?: string;
};

const MusicNote = ({ fill = "#808191" }: Props) => {
    return (
        <SvgWrapper>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={fill}
                d="M9 3a2 2 0 00-2 2v10.176A3 3 0 006 15a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3v-8a1 1 0 011-1h7a1 1 0 011 1v5.176A3 3 0 0017 15a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V5a2 2 0 00-2-2H9z"
            ></path>
        </SvgWrapper>
    );
};

export default MusicNote;
