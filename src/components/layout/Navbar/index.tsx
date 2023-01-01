import React, { useState } from "react";
import Search from "../../ui/icons/Search";
import Notification from "../../ui/icons/Notification";
import ChevronDown from "../../ui/icons/ChevronDown";

type Props = {
  font: string;
};

const Navbar = ({ font }: Props) => {
  const [search, setSearch] = useState<string>("");
  const [userName, setUserName] = useState<string>("Demo User");
  const [pfpPath, setPfpPath] = useState<string>(
    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
  );
  return (
    <div
      className={`flex min-w-full flex-row items-center justify-between px-10 py-5 ${font}`}
    >
      <h1 className="min-h-full flex-[1] text-2xl font-bold text-white">
        frex
      </h1>
      <div className="w-full flex-[8] flex-grow text-center text-gray-600 flex flex-row items-center justify-start">
        <div className="relative flex min-w-[40vw] flex-row items-center justify-start rounded-xl bg-white bg-opacity-10 font-normal text-[#808191]">
          <input
            className="h-11 flex-auto rounded-xl border-2 border-none bg-transparent px-5 text-sm"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log(search);
            }}
          />
          <button className="absolute right-5 z-30 rounded-lg py-2 px-2 transition-colors duration-300 motion-safe:hover:bg-gray-200">
            <Search />
          </button>
        </div>
      </div>
      <div className="flex flex-[5] flex-grow text-center text-gray-600">
        <div className="mx-4 flex flex-1 items-center justify-end gap-4">
          <div className="flex items-center justify-center gap-2">
            <img
              className="h-10 w-10 rounded-full"
              src={pfpPath}
              alt="Profile Picture"
            />
            <p className="text-sm">{userName}</p>
            <ChevronDown />
          </div>
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
