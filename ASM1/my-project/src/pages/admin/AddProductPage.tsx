import React, {useEffect,useState} from 'react'
import Addproduct from './Addproduct'
import axios from 'axios'
import { API } from '../HomePage'
import { Product } from '../../types/Product'

type Props = {}

const AddProductPage = (props: Props) => {
    const [products, setProduct] = useState<Product[]>([])
    const getProduct = async()=>{
        const {data} = await axios.get(API)
        setProduct(data)
        console.log(products)
    }
    useEffect(()=>{
        getProduct()
        
    }, [])
    const onHandleAdd = async(product:Product)=>{
        console.log("data",product)
        const {data} = await axios.post(API,product)
        setProduct([...products,data])
    } 
    return <>
        {<Addproduct onAdd={onHandleAdd}/>}
    </>
}

export default AddProductPage