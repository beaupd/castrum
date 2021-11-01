import styles from "../styles/Navigation.module.css"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { MenuToggle } from "./menuToggle"
import { MenuItems } from "./menuItems"

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const Navigation = () => {
    const [isScrolled, setScrolled] = useState(false)
    const [isSmall, setSmall] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!isOpen)
    const containerRef = useRef(null)
    const [windowHeight, setHeight] = useState(1000)




    useEffect(() => {

        let handleScroll = () => {
            if (window.scrollY == 0) {
                setScrolled(false)
            } else {
                setScrolled(true)
            }
        }

        let handleResize = () => {
            setHeight(window.innerHeight)
            if (window.innerWidth < 600) {
                setSmall(true)
            } else {
                setSmall(false)
            }
        }

        handleScroll()
        handleResize()

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleResize)


        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleResize)
        }
    })

    return (
        <>
            {!isSmall ? (
                <nav className={`${styles.nav} ${isScrolled ? styles.active : ""}`}>
                    <header>

                    </header>

                    <MenuItems />

                    <div></div>
                </nav>
            ) : (

                <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    custom={windowHeight}
                    ref={containerRef}
                    className={styles.smallNav}
                >
                    <motion.div className={styles.background} variants={sidebar} />
                    <MenuItems />
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.nav>
            )
            }
        </>
    )
}

export default Navigation