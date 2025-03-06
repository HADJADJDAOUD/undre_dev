import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = () => {
  return (
    <div className='explre-menu' id='explore-menu' >
        <h1>explore our menu</h1> 
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla delectus veritatis reiciendis tenetur odit? Doloremque quos magni quasi amet quam quibusdam ea fugiat modi. Impedit doloremque ab perspiciatis fuga nostrum.</p>
        <p className="explre-menu-text"></p>
        <div className="explre-menu-list">
            {menu_list.map((item, index) => (
                <div className="explre-menu-list-item" key={index}>
                    <img src={item.menu_image} alt={item.menu_name} />
                    <p>{item.menu_name}</p>
                    
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default ExploreMenu
