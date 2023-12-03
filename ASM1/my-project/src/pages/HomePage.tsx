import { useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from '../types/Product';
import ProductList from './product/ProductList';
export let API = "http://localhost:3000/products";

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
       <ProductList key={index} product={item} />
        ))}
       </div>      

      </>
  
  )
  
}

export default HomePage