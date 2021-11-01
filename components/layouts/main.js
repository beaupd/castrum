import Head from "next/head"
import Footer from "../footer"
import Navigation from "../navigation"
import Scrollbar from "../scrollbar"

const Main = ({title, children}) => {
    return (
        <>
            <Head>
                <title>Castrus - {title}</title>
            </Head>

            <div>
                <Navigation />

                <main>
                    {children}
                </main>

                <Footer />
                <Scrollbar />
            </div>
        </>
    )
}

export default Main