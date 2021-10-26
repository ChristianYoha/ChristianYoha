import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {GetStaticProps} from 'next'
// import styles from '../styles/Home.module.css'
import Contact from '../components/Contact'
import Jumbotron from '../components/Jumbotron'
import Script from 'next/script'
import ProductList from '../components/ProductList'
import {IProduct} from '../components/Product'

import iphone from "../public/iphone.png"

interface IProductListProps{
  products: IProduct[]
}

const Home = ({products}: IProductListProps) => {
  return (
    <div>
      <head>
        <link rel="preconnect" href="https://app.snipcart.com"/>
        <link rel="preconnect" href="https://cdn.snipcart.com"/>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css%"/>
      </head>
      <main className="main">
        <Jumbotron/>
        <ProductList products={products}/>
        <Contact/>
      </main>
      <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"/>
      <div hidden id="snipcart" data-api-key="OWNlZTNlYmItZTU5OS00MmI4LThjOTAtMjY0NzAyYmI2ODAxNjM3NjIyMjY3MDMxMTIzMzUx"></div>
    </div>
  )
}

export default Home


export const products: IProduct[] =[
  {
    id: "1",
    name: "Iphone X",
    price: 300,
    description: "Super Iphone comme neuf ;)",
    url:  "api/products/iphonex",
    image: iphone

  },
  {
    id: "2",
    name: "Iphone XR",
    price: 300,
    description: "Super Iphone comme neuf ;)",
    url:  "api/products/iphonexr",
    image: iphone

  },
  {
    id: "3",
    name: "Iphone 11",
    price: 300,
    description: "Super Iphone comme neuf ;)",
    url:  "api/products/iphone11",
    image: iphone

  }

]

export const getStaticProps: GetStaticProps = async (context) => {
  return{
    props:{
      products
    }
  }
}