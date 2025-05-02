import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";

// add food item


const addFood = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        const image_filename = `${req.file.filename}`;
    
        const food = new foodModel({
        name,
        description,
        price,
        category,
        image:image_filename,
        });
    
        await food.save();
        res.status(201).json({ message: "Food item added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error adding food item", error });
    }
    }



const listFood= async (req,res)=>{
    try {
        const foods = await foodModel.find();
        res.status(200).json({ success:true , data:foods});
    } catch (error) {
        res.status(500).json({ message: "Error fetching food items", error });
    }
}
const removeFood = async (req, res) => {
    try {
      const food = await foodModel.findById(req.body.id);
  
      // Attempt to delete the image (non-blocking)
      fs.unlink(`uploads/${food.image}`, () => {});
  
      // Delete the food item from DB
      await foodModel.findByIdAndDelete(req.body.id);
  
      res.json({ success: true, message: "Food Removed" });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
    }
  };
  
  

export {addFood, listFood , removeFood}
