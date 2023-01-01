import React from "react";
import { menuStructure } from "../../../helper/data/aside";
type Props = {};

const Aside = (props: Props) => {
    return (
        <div className="flex min-h-full flex-col justify-center border-2 border-gray-500 p-6">
            {Object.keys(menuStructure).map((key) => {
                return (
                    <>
                        <h3 className="text-xl font-bold">{key}</h3>
                        <ul className="flex flex-col gap-2">
                            {menuStructure.hasOwnProperty(key) &&
                                menuStructure[key]?.subMenu !== undefined &&
                                Object.keys(
                                    menuStructure[key]?.subMenu as {
                                        [subKey: string]: {
                                            id: string;
                                            text: string;
                                            path: string;
                                            icon: string;
                                        };
                                    },
                                ).map((subKey, index) => {
                                    return (
                                        <li
                                            className="flex flex-row gap-2"
                                            key={subKey + index + key}
                                        >
                                            <div className="flex flex-col justify-center">
                                                {menuStructure[key]?.subMenu[subKey]?.icon}
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                {menuStructure[key]?.subMenu[subKey]?.text}
                                            </div>
                                        </li>
                                    );
                                })}
                        </ul>
                    </>
                );
            })}
        </div>
    );
};

export default Aside;
