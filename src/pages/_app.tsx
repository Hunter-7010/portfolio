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
        data-website-id="c439c72c-6bde-4c7b-a890-edb71d30a81b"
        src="https://umami-production-f85b.up.railway.app/umami.js"
      />

      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
