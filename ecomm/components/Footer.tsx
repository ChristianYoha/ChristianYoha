import styles from "../styles/Footer.module.scss" 
export default function Footer(){
    return (
        <footer className={styles.footer}>
            <p>Next Js App</p> 
            <div className={styles.footer__left}>
            <a href="https://github.com/ChristianYoha">by @ChristianYoha</a> 
            </div>
        </footer>
    )
}