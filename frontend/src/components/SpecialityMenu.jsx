import React from 'react'
import { categoryData } from '../assets/assets'
import { Link } from 'react-router-dom'

const FindByCategories = () => {
  return (
    <div id="categories" className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className="text-3xl font-medium">Find by Category</h1>
      <div className="flex justify-center gap-4 pt-5 w-full overflow-x-auto">
        {categoryData.map((item, index) => (
          <Link onClick={()=> scrollTo(0,0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 transform hover:-translate-y-2 transition-all duration-500"
            key={index}
            to={`/doctors/${item.category}`}
          >
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
            <p>{item.category}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FindByCategories
