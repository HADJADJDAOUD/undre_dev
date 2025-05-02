import userModel from "../models/userModel.js";

const addToCart = async (req, res) => { 
    try {
      let userData = await userModel.findOne({ _id: req.body.userId });
      let cartData = userData.cartData;
      console.log('this is cartdata',cartData);
      console.log('req.body.itemid',req.body.itemId);
      console.log('userdata',userData);
      if (!cartData[req.body.itemId]) { 
        cartData[req.body.itemId] = 1;
      } else {
        cartData[req.body.itemId] += 1;
      }
  
      await userModel.findOneAndUpdate(
        { _id: req.body.userId },  // <-- Correct filter object
        { cartData }
      );
  
      res.json({
        success: true,
        message: 'Item added to cart',
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };
  

// remove item from cart
const removeFromCart = async (req, res) => {
    try{
    let userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData;
    if (cartData[req.body.itemId]>0){
        cartData[req.body.itemId] = cartData[req.body.itemId] - 1;
    }

        await userModel.findOneAndUpdate(
            { _id: req.body.userId },
            { cartData }
        );
        res.json({
            success:true,
            message:'Item removed from cart'
        });
  
    }catch(error){
        console.log(error);
        return res.status(500).json({success:false, message:'Internal server error'});
    }

}

// fetch user cart data
const getCart = async (req, res) => {

    try{
        
            let userData=await userModel.findById(req.body.userId); 
            let cartData=userData.cartData;
            res.json({
                success:true,
                
                cartData
            });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({success:false, message:'Internal server error'});
    }

}


export {addToCart, removeFromCart , getCart}
