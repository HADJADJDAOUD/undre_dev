import "./Add.css";
import { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "salad",
    price: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const OnsumbitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("image", image);
    console.log(formData);
    const response = await axios.post(`${url}/api/food/add`, formData);

    if (response.status === 201) {
      setData({
        name: "",
        description: "",
        category: "salad",
        price: "",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={OnsumbitHandler}>
        <div className="add-img-upload flex-col">
          <p>upload image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            name=""
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>product-name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col ">
          <p>product description</p>

          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="write content here"
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>product-category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
            >
              <option value="Salad"></option>
              <option value="Rolls"></option>
              <option value="Desert"></option>
              <option value="Rolls"></option>
              <option value="Rolls"></option>
              <option value="Rolls"></option>
              <option value="Rolls"></option>
              <option value="Rolls"></option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>product-price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="Type here"
            />
          </div>
        </div>
        <button type="sumbit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
