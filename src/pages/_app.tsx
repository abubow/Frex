import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

import { Exo_2 } from "@next/font/google";
import { useState } from "react";
import Notification from "../components/ui/icons/Notification";
import Search from "../components/ui/icons/Search";
import Navbar from "../components/layout/Navbar";
import Aside from "../components/layout/Aside";

const poppins = Exo_2({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--exo-font",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar font={poppins.className} />
      <div
        className={`flex flex-row items-center justify-center p-4 ${poppins.className}`}
      > 
        <Aside/>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default trpc.withTRPC(MyApp);
