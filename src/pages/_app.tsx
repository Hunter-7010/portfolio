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
      smoothTouch: true,
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
        src="https://umamianalytics.netlify.app/script.js"
        data-website-id="b8f70fb5-5a7c-4231-a4ca-65c92d7454df"
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
