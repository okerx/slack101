import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { appWithTranslation } from 'next-i18next';

import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const firebaseConfig = process.env.NEXT_PUBLIC_FIREBASE_CONFIG;

    if (firebaseConfig) {
      const app = initializeApp(JSON.parse(firebaseConfig));
      getAnalytics(app);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
