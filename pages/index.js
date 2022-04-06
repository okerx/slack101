import Head from 'next/head';
import Home from '../containers/Home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MetaTags from '../components/MetaTags';
import { useTranslation } from 'next-i18next';

export default function Index() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <MetaTags description={t('description')} />
        <title>SLACK 101</title>
      </Head>

      <Home />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

// export const config = { amp: true };
