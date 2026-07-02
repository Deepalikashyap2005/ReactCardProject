import React, { useState } from 'react'
import FoodCard from './FoodCard';

function App() {
  
const [foodItems,setFoodItems] = useState([
  {
    id: 1,
    name: "Margherita Pizza",
    price: 299,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
    description: "Classic Italian pizza topped with mozzarella cheese, tomato sauce, and fresh basil."
  },
  {
    id: 2,
    name: "Cheese Burger",
    price: 249,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and special burger sauce."
  },
  {
    id: 3,
    name: "Chicken Biryani",
    price: 349,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
    description: "Fragrant basmati rice cooked with tender chicken and aromatic Indian spices."
  },
  {
    id: 4,
    name: "Paneer Butter Masala",
    price: 279,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    description: "Soft paneer cubes cooked in a rich, creamy tomato gravy with butter."
  },
  {
    id: 5,
    name: "Veg Momos",
    price: 149,
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1628294895950-9805252327bc",
    description: "Steamed dumplings stuffed with fresh vegetables and served with spicy chutney."
  },
  {
    id: 6,
    name: "Pasta Alfredo",
    price: 329,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Creamy Alfredo pasta loaded with parmesan cheese and herbs."
  },
  {
    id: 7,
    name: "Masala Dosa",
    price: 199,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
    description: "Crispy South Indian dosa filled with spicy potato masala and served with chutney."
  },
  {
    id: 8,
    name: "French Fries",
    price: 129,
    rating: 4.3,
    img: "https://images.unsplash.com/photo-1576107232684-1279f390859f",
    description: "Golden crispy fries seasoned with salt and herbs."
  },
  {
    id: 9,
    name: "Caesar Salad",
    price: 239,
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
    description: "Fresh lettuce tossed with Caesar dressing, parmesan cheese, and crunchy croutons."
  },
  {
    id: 10,
    name: "Chocolate Cake",
    price: 199,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    description: "Rich and moist chocolate cake layered with creamy chocolate frosting."
  },
  {
    id: 11,
    name: "Ice Cream Sundae",
    price: 179,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    description: "Vanilla ice cream topped with chocolate syrup, nuts, and cherries."
  },
  {
    id: 12,
    name: "Tandoori Chicken",
    price: 399,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    description: "Tender chicken marinated with yogurt and spices, grilled to perfection."
  },
  {
    id: 13,
    name: "Sushi Platter",
    price: 599,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    description: "Fresh assortment of sushi rolls served with soy sauce and wasabi."
  },
  {
    id: 14,
    name: "Chicken Tacos",
    price: 289,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1627564803215-ad55bad5c5ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Soft tacos filled with seasoned chicken, salsa, cheese, and fresh vegetables."
  },
  {
    id: 15,
    name: "Grilled Sandwich",
    price: 169,
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    description: "Crispy grilled sandwich stuffed with vegetables, cheese, and herbs."
  },
  {
    id: 16,
    name: "Chicken Noodles",
    price: 259,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stir-fried noodles with chicken, vegetables, and flavorful Asian sauces."
  },
  {
    id: 17,
    name: "Butter Croissant",
    price: 149,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1742599404571-9751abf854e5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Flaky and buttery French croissant, freshly baked every morning."
  },
  {
    id: 18,
    name: "Pancakes",
    price: 229,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    description: "Soft pancakes served with maple syrup, butter, and fresh berries."
  },
  {
    id: 19,
    name: "Fruit Bowl",
    price: 189,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea",
    description: "Healthy bowl of fresh seasonal fruits packed with vitamins and nutrients."
  },
  {
    id: 20,
    name: "Cold Coffee",
    price: 159,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
    description: "Refreshing chilled coffee blended with milk, ice cream, and chocolate syrup."
  }
])

let deleteItem = (id)=>{
  let products = foodItems.filter((elem)=>{
    return elem.id !== id;   
  })
  setFoodItems(products); 
}
  

  return (
    <div className="min-h-screen bg-[#151515] text-white ">
      <div>
        <h1 className="text-5xl font-bold text-center p-6 mb-4">Food Menu</h1>
        <div className="flex flex-wrap justify-center g-20">
          {foodItems.map((elem, id) => {
          return  <FoodCard key={id} product={elem} del={deleteItem} />
        })}
        </div>
        
        
      </div>
    </div>
  )
}

export default App
