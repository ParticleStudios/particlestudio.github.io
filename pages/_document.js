import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MainDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <meta property="og:type" content="website" />
                    <meta property='og:title' content="Home" />
                    <meta property='og:site_name' content="Particle Studios" />
                    <meta property='og:url' content='https://particlestudios.org/' />
                    <meta property='og:description' content='Official website for Particle Studios. Learn more about us and what we do.' />
                    <meta property='og:image' content='https://particlestudios.org/logo.svg' />
                    <meta property='og:keywords' content='Particle Studios, Studios, Games, Game Development, C++, Unity, Java, OpenGL, Vulkan' />
                    <link rel="icon" href="/images/logo.svg" />
                </Head>

                <body className='w-full h-full bg-gray-1000 text-gray-50 font-sans'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}