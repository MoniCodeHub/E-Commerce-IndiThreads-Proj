import React, {useContext} from 'react';
import { useParams } from "react-router-dom";
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import { ShopContext } from '../Context/ShopContext'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = (props) => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId) )

  return (
    <div>
      <Breadcrumbs  product={product}/>
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product