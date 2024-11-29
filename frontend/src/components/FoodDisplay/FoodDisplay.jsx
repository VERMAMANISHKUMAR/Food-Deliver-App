import React, { useContext, useState } from 'react'; // Added useState
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {
  // State for the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Use food_list from context
  const { food_list } = useContext(StoreContext);

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter the food list based on the selected category
  const filteredFoodList = selectedCategory === 'All'
    ? food_list
    : food_list.filter(item => item.category === selectedCategory);

  return (
    <div className='food-display' id="food-display">
      <h2>Top dishes near you</h2>

      {/* Category Filter Buttons */}
      <div className='category-buttons'>
        <button onClick={() => handleCategoryChange('All')}>All</button>
        <button onClick={() => handleCategoryChange('Salad')}>Salad</button>
        <button onClick={() => handleCategoryChange('Rolls')}>Rolls</button>
        <button onClick={() => handleCategoryChange('Sandwich')}>Sandwich</button>
        <button onClick={() => handleCategoryChange('Cake')}>Cake</button>
        <button onClick={() => handleCategoryChange('veg')}>veg</button>
        <button onClick={() => handleCategoryChange('Pasta')}>Pasta</button>
        <button onClick={() => handleCategoryChange('EggRice')}>Eggrice</button>
        <button onClick={() => handleCategoryChange('Chicken')}>Liverrice</button>
        <button onClick={() => handleCategoryChange('Egg Curry Rice')}>Curry</button>
        <button onClick={() => handleCategoryChange('Paneer Biryani')}>Paneer </button>
        <button onClick={() => handleCategoryChange('Chicken Chilli')}>Chicken</button>
        <button onClick={() => handleCategoryChange('Biryani')}>Biryani</button>
        <button onClick={() => handleCategoryChange('Burger')}>Burger</button>
        
        {/* Add more categories as needed */}
      </div>

      {/* Render Filtered Food Items */}
      <div className='food-display-list'>
        {filteredFoodList.map((item, index) => (
          
          <FoodItem
            key={item._id || index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
