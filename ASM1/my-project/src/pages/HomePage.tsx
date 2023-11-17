import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '../components/elements/Footer';
import Header from '../components/elements/Header';
import { Product } from '../types/Product';
import ProductCart from './ProductCart';
let API = "https://fakestoreapi.com/products";

const HomePage = () => {
  const [product, setProduct] = useState<Product[] > ([]);
  const getProduct = async ()=>{
    const {data} = await axios.get(API)
    setProduct(data)
  }
  useEffect(()=>{
      getProduct()
   
  },[])

  return (
      <>
      <div className="grid grid-cols-4 gap-6 m-12  ">
       {product.map((item,index)=>(
       <ProductCart key={index} product={item} />
        ))}
       </div>      

      </>
  
  )
  
}

export default HomePage