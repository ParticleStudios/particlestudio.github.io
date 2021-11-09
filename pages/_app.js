import Head from "next/head";
import ReactGA from 'react-ga';
import 'tailwindcss/tailwind.css';

ReactGA.initialize('G-MXXSZKYDXL');

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
