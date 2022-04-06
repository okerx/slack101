const hostUrl = process.env.NEXT_PUBLIC_HOST_URL || 'https://slack101.net';

const MetaTags = ({ description }) => {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#1db954" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={hostUrl} />
      <meta property="og:title" content="SLACK 101" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="SLACK 101" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SLACK 101" />
      <meta name="twitter:description" content={description} />
    </>
  );
};

export default MetaTags;
