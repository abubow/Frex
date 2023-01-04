import { cloneElement, useState } from "react";
import { menuStructure } from "../../../helper/data/aside";
import Moon from "../../svgs/icons/Moon";
import Sun from "../../svgs/icons/Sun";

const Aside = () => {
    const [activeMenu, setActiveMenu] = useState<string | undefined>("Discover");
    const [activeMode, setActiveMode] = useState<"dark" | "light">("dark");
    return (
        <div className="absolute left-3 top-24 flex h-80 min-h-full w-60 flex-col justify-start px-8">
            {Object.keys(menuStructure).map((key) => {
                return (
                    <section key={key}>
                        <header className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#808191] opacity-50">
                            {key}
                        </header>
                        <nav className="flex flex-col gap-6">
                            {menuStructure.hasOwnProperty(key) &&
                                menuStructure[key]?.subMenu !== undefined &&
                                Object.keys(
                                    menuStructure[key]?.subMenu as {
                                        [subKey: string]: {
                                            id: string;
                                            text: string;
                                            path: string;
                                        };
                                    },
                                ).map((subKey, index) => {
                                    return (
                                        <div
                                            className="flex cursor-pointer flex-row items-center justify-start gap-4"
                                            key={subKey + index + key}
                                            onClick={() => {
                                                setActiveMenu(
                                                    menuStructure[key]?.subMenu[subKey]?.text,
                                                );
                                            }}
                                        >
                                            <span
                                                className={`flex h-10 w-10 flex-col items-center justify-center rounded-xl text-[#808191] ${
                                                    activeMenu ===
                                                    menuStructure[key]?.subMenu[subKey]?.text
                                                        ? "bg-[#FF7551] font-semibold"
                                                        : "bg-white bg-opacity-10 font-light hover:bg-opacity-40 hover:text-white"
                                                }`}
                                            >
                                                {menuStructure[key]?.subMenu[subKey]?.icon
                                                    ? menuStructure[key]?.subMenu[subKey]?.icon &&
                                                      cloneElement(
                                                          menuStructure[key]?.subMenu[subKey]
                                                              ?.icon as React.ReactElement,
                                                          {
                                                              fill:
                                                                  activeMenu ===
                                                                  menuStructure[key]?.subMenu[
                                                                      subKey
                                                                  ]?.text
                                                                      ? "#fff"
                                                                      : "#808191",
                                                              className: "h-6 w-6",
                                                          },
                                                      )
                                                    : null}
                                            </span>
                                            <div
                                                className={`flex flex-col justify-center tracking-tighter ${
                                                    activeMenu ===
                                                    menuStructure[key]?.subMenu[subKey]?.text
                                                        ? "text-white"
                                                        : "text-[#808191]"
                                                }`}
                                            >
                                                {menuStructure[key]?.subMenu[subKey]?.text}
                                            </div>
                                        </div>
                                    );
                                })}
                        </nav>
                        <hr className="my-8 mx-auto h-0.5 w-full bg-[#808191] opacity-10" />
                    </section>
                );
            })}
            <section>
                <switch
                    className="relative mb-8 flex cursor-pointer flex-row items-center justify-start gap-10 rounded-xl bg-white bg-opacity-10 p-2"
                    onClick={() => {
                        setActiveMode(activeMode === "dark" ? "light" : "dark");
                    }}
                >
                    <span className="relative z-10 flex items-center justify-center gap-2 tracking-tighter text-[#808191]">
                        <Moon fill={activeMode === "dark" ? "#fff" : "#808191"} />
                        <h6
                            className={`${
                                activeMode === "dark"
                                    ? "font-semibold text-white"
                                    : "text-[#808191]"
                            }`}
                        >
                            Dark
                        </h6>
                    </span>
                    <span className="relative z-10 flex items-center justify-center gap-2 tracking-tighter text-[#808191]">
                        <Sun fill={activeMode === "light" ? "#fff" : "#808191"} />
                        <h6
                            className={`${
                                activeMode === "light"
                                    ? "font-semibold text-white"
                                    : "text-[#808191]"
                            }`}
                        >
                            Light
                        </h6>
                    </span>
                    <div
                        className={`absolute left-0 top-0 -z-0 h-10 w-[4.8rem] rounded-xl bg-[#6C5ECF] transition-all duration-300 ease-in-out ${
                            activeMode === "dark" ? "translate-x-0" : "translate-x-24"
                        }`}
                    ></div>
                </switch>
            </section>
        </div>
    );
};

export default Aside;
