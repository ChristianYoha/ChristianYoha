import Product, {IProduct} from "./Product"
import styles from '../styles/ProductList.module.scss'
interface IProductListProps{
    products: IProduct[]
}

const productList = (props: IProductListProps) => {
    return (
        <div className={styles.productList}>
            {props.products.map((products, index) => <Product key={index} product={products}/>)}
        </div>
    )
}

export default productList