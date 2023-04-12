import { type AppType } from "next/app";

import { api } from "../utils/api";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        async
        defer
        data-website-id="de8f5c4a-ce8f-4e22-8f80-a0afff8669ff"
        src="https://umamianalytics.netlify.app/umami.js"
      />

      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
