import React from 'react';
import { product } from "../../data/products";
import Card from "../../components/Card/Card";

function Products() {
  return (
    <div className='products'>
        {product.map((item) => (
          <Card key={item.id} data={item} />
        ))}
    </div>
  )
}

export default Products;