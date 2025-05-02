import React, { useEffect } from 'react'
import "./List.css"
import { useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify'
const List = ({url}) => {
  
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if (response.status === 200) {
      setList(response.data.data);
    }
    else {
      toast.error("error fetching list");
    }
  }
const removFood = async (foodId) => { 
  
  const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
  console.log(response.data);
  if (response.status === 200) {
    toast.success(response.data.message);
    fetchList(); 
  }
  else {
    toast.error("error removing item");
  }
}

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className=' list add flex-col'>
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>

        </div>
        {list.map((item, index) => (
          <div className="list-table-format" key={index}>
            <img src={`${url}/images/`+item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p   className="cursor" onClick={()=>removFood(item._id)} >X</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
