import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  // Retrieve cart items and cart functions from StoreContext
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const discountPrice = (price * 0.95).toFixed(2); // Calculate 5% off
  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt={`${name}`} />  {/* Alt tag for accessibility */}
      </div>
      
      {!cartItems[id] ? (
        <img 
          className='add' 
          onClick={() => addToCart(id)} 
          src={assets.add_icon_white} 
          alt="Add Item"
        />
      ) : (
        <div className="food-item-counter">
          <img 
            onClick={() => removeFromCart(id)} 
            src={assets.remove_icon_red} 
            alt="Remove Item" 
            className='Remove-icon' 
          />
          <p>{cartItems[id]}</p>
          <img 
            onClick={() => addToCart(id)} 
            src={assets.add_icon_green} 
            alt="Add Item" 
            className='Add-icon' 
          />
        </div>
      )}
      
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" /> {/* Ensure correct image path for rating stars */}
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>Price {price}</p>
        <p className="discounted-price"> off 5%<span className="offer-text"> {discountPrice}</span></p>
        <button className='food-item-button'>Add to Cart</button> {/* Button text should be customizable */}
         
      </div>
    </div>
  );
};

export default FoodItem;
