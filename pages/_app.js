import "../styles/global.css"
import Head from "next/head"

const Website = ({ Component, pageProps, router }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/logo_icon.svg"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} key={router.route} />
        </>
    )
}

export default Website