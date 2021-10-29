import styles from '../styles/Contact.module.scss'
import { useState } from "react";

export default function Contact() {

    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
    }

    return (
        <section>
            <div className={styles.contact}> 
                <h2 className ={styles.contact__title}>Any questions ? Contact Us.</h2>
                <button onClick={toggle}>Contact Us</button>
            </div>
            <div className={ showMe ? styles.modal__active : styles.modal}>
                <h2 className={styles.modal__title}>Contact Us</h2>
                <form action="#" className={ styles.modal__form}>
                    <label htmlFor="email">Email :</label>
                    <input type="email" name="email" id="email" />  
                    <label htmlFor="message">Message :</label>
                    <textarea name="message" id="message"></textarea>   
                    <input type="submit" value="Envoyer" onClick={toggle}/>
                </form>
            </div>
        </section>
    )
}
