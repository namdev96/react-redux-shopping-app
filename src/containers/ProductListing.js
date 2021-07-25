import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCompoent } from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';
export const ProductListing = () =>{
    const products = useSelector((state)=>state);
    const dispatch = useDispatch()

    // console.log(products)
    const fetchProducts = () =>{
        axios.get('https://fakestoreapi.com/products').then(
            res=>{
                // console.log(res)
                if(res.status===200){
                    dispatch(setProducts(res.data))
                }
              
              
            }
        ).catch(err=>{console.log(err)})
    }
    
    // console.log("Products:",products)

useEffect(()=>{
    fetchProducts();
    // const interval = setInterval(()=>{
    //     fetchProducts()
    // },5000)
},[])
    return (
        <div  className="ui grid  container">
         <ProductCompoent/>
        </div>
    )
}