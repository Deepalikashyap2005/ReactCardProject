import React from 'react'

function FoodCard({product, del}) {
  
    return (
    <div>
      <div className="w-80 h-10 border-2 border-gray-300 rounded-lg p-4 m-4">
        <div className="mb-4 object-fit overflow-hidden w-70 h-50">
            <img src={product.img} alt="foodImage" className="w-full h-full object-cover position-contain rounded-lg mb-4" />
        </div>
        <h1 className="text-2xl font-bold mb-2 font-sans">{product.name}</h1>
        <h2 className="text-xl text-gray-200 mb-4 w-full">{product.description.substring(0, 40)}...</h2>
        <div className="flex justify-between items-center mr-4 mb-5">
            <h3 className="text-xl font-bold">₹{product.price}</h3>
            <h3 className="text-xl font-bold ">{product.rating}</h3>
        </div>
        <div className="flex justify-between items-center mr-2 ml-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">Order Now</button>
            <button onClick={()=>{
                del(product.id);
            }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded ml-2 ">Remove </button>
        </div>
      </div>

    </div>
  )
}

export default FoodCard
