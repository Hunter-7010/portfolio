import { type AppType } from "next/app";

import { api } from "../utils/api";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  //smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Script
        async
        src="https://analytics.zass.agency/script.js"
        data-website-id="ffec22ad-a127-4180-823f-4157f26a6863"
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
