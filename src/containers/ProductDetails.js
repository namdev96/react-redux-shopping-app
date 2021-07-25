import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "./../redux/actions/productActions";
import { useSelector } from "react-redux";
export const ProductDetails = () => {
  const { productId } = useParams();
  
  const dispatch = useDispatch();
  const {product} = useSelector((state) => state.product);
  const fetchProductDetails = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        if (res.status === 200) {
          dispatch(selectedProduct(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  var title=''
  var image=''
  var description =''
  var price =''
  var category = ''
  if(product){
  if(Object.keys(product).length!==0){
   title=product.title;
   image = product.image;
   description =product.description;
   price = product.price;
   category =product.category
  }

  }
  useEffect(() => {
      if(productId && productId!=='')
         fetchProductDetails();
 return ()=>{
dispatch(removeSelectedProduct());
 }
  }, [productId]);
  return (
    <div className=" ui grid container">
      {product?Object.keys(product).length === 0 ? (
        <div style={{textAlign:'center', marginTop:'200px'}}>Loading...</div>
      ) : (
        <div className=" ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img src={image} className="ui fluid image" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        // "hello"
      ):""}
    </div>
  );
};
