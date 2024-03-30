import React from 'react'
import all_data from '../Assets/all_data.js'

const Data = () => {
	console.log(all_data)
	 return (
    <div>
      {all_data.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Category: {item.category}</p>
          {/* Add more fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default Data;