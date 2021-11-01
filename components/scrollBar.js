import styles from "../styles/ScrollBar.module.css"
import { useEffect, useState } from "react"

const ScrollBar = () => {
    const [scrollPos, setPos] = useState(0)
    useEffect(() => {

        let handleScroll = () =>{
            let pos = ((window.scrollY/(document.body.offsetHeight-window.innerHeight))*100)
            setPos(pos)
            
        }

        handleScroll()

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    return (
        <div className={styles.scrollBarContainer}>
            <div 
                className={styles.scrollBar}
                style={{transform: `translateY(${scrollPos}%)`}}
            >

            </div>
        </div>
    )
}

export default ScrollBar