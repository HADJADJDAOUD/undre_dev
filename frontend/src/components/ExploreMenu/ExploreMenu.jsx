import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explor-menu" id="explore-menu">
      <h1>explore our menu</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla delectus
        veritatis reiciendis tenetur odit? Doloremque quos magni quasi amet quam
        quibusdam ea fugiat modi. Impedit doloremque ab perspiciatis fuga
        nostrum.
      </p>
      <p className="explor-menu-text"></p>
      <div className="explor-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "all" : item.menu_name
              )
            }
            className="explor-menu-list-item"
            key={index}
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
