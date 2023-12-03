import React from 'react'
import ProductDetail from './ProductDetail'
import { Product } from '../../types/Product'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../HomePage'
import App from '../../App'
import SameCategories from './SameCategories'
type ProductDetailProps = {
    product : Product[]
 }
 const ProductDetailWithId = () => {
    const [product,setProduct] = useState<Product[]>([])
    const { id } = useParams<{id:string}>();

    const getProduct = async ()=>{
        const {data} = await axios.get(API)
        setProduct(data)
      
      }
   const dataProduct =  product.find((product) => product._id === id); 
   const sameCategory = product.filter((product) => product.category === dataProduct.category && product._id !== dataProduct._id);

   useEffect(()=>{
    getProduct()
   },[])
    return <>
          { dataProduct && <ProductDetail product={dataProduct} />}
          { sameCategory && <SameCategories product={sameCategory}/>}
         </>
          
  };
export default ProductDetailWithId