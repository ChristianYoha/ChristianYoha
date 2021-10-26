import styles from "../styles/Jumbotron.module.scss" 
import Image from "next/image"
import iphone from "../public/iphone.png"

const jumbotron = ()=>{
    return(
        <div>
            <div className={styles.backgroundimage}>
                <Image src={iphone} alt="iphone"/>
            </div>
            <div className={styles.promotionalmessage}>
                <h3>Shop</h3>
                <h2>Iphone</h2>
                <p>
                    An <strong>exclusive collection</strong> available.
                </p>
            </div>
        </div>
    )
}

export default jumbotron