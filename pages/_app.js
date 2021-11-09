import Head from "next/head";
import 'tailwindcss/tailwind.css';

function App({Component, pageProps}) {

  return (
      <>
        <Head>
          <title>Particle Studios</title>
        </Head>

        <Component {...pageProps} />
      </>
  );
}

export default App;
