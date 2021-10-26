import Link from "next/link"
import styles from "../styles/Header.module.scss" 
import Image from "next/image"
// import { logo } from "../public/iphone.png"
export default function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Image src="/iphone.png" alt="iphone" width="58" height="58" />
                <h1 className={styles.header__title}>Iphone&nbsp;Shop</h1>
            </div>      
            <a href="#" style={{ textDecoration: "none" }}>
                <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="<http://www.w3.org/2000/svg>">
                    <path d="" fill="#9094FF"/>
                </svg>
                <span>

                </span>
            </a>
        </header>
    )
}