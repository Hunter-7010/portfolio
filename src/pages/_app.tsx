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
        src="https://umamianalytics.netlify.app/script.js"
        data-website-id="b8f70fb5-5a7c-4231-a4ca-65c92d7454df"
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
