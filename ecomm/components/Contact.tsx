import styles from "../styles/Contact.module.scss"

export default function Contact(){
    return (
        <div className={styles.contact}>
            <h2 className={styles.contact__title}>Any question ? <span>Contact Us.</span></h2>
            <a href="">
                <button>Contact us</button>
            </a>
        </div>
    )
}