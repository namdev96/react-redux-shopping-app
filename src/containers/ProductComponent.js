import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';

export const ProductCompoent = () => {
  const products = useSelector((state) => state.allProducts.products);
//   const { id, title } = products[0];
const renderList = products.map((val)=>{
    const {id, title, image, price, category} = val;
    return(
        <div className="four wide column">
            <Link to={`/product/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
                <img src={image} alt={title}/>
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    )
})
  return (
    <>{renderList}</>
  );
};
