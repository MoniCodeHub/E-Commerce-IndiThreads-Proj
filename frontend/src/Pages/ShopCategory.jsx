import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext'

const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext);

  return (
    <div classsname='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-title">
        <h1>Best Of Our Collections</h1>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return <Item key={i} id={item.id} 
              name={item.name} image={item.image} 
              new_price={item.new_price} old_price={item.old_price}  />
            }
            else {
              return null;
            }

          })}
        </div>
      
      <div className="shopcategory-loadmore">
        <button onClick={() => {window.scrollTo(0,0)}}>Explore More</button>

      </div>
      
    </div>
  )
}

export default ShopCategory;