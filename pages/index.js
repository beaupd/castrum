import Layout from "../components/layouts/main"
import styles from "../styles/HomePage.module.css"

const HomePage = () => {
    return (
        <Layout
            title="Home Page"
        >
            <section className={styles.heroContainer}>
                
            </section>
            <section className={styles.aboutContainer}>
                <header>
                    <img src="/logo.png" alt="Star tetrahedron or merkabah as part of header" />
                    <h2>What is Castrum</h2>
                </header>
            </section>
        </Layout>
    )
}

export default HomePage