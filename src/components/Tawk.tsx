import { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/640dc31031ebfa0fe7f21590/1gras3uds';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0?.parentNode?.insertBefore(s1, s0);

    return () => {
      // Clean up the script tag
      const tawkToElement = document.getElementById('tawkToScript');
      if (tawkToElement) {
        tawkToElement?.parentNode?.removeChild(tawkToElement);
      }
    };
  }, []);

  return null;
};

export default TawkTo;
