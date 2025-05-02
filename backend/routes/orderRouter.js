import express from 'express';
import { placeOrder , verifyOrder , userOrders, listOrders , updateStatuts} from '../controller/orderController.js';
import authMiddleware from '../middleware/auth.js';
const orderRouter = express.Router();



// Route to place an order
orderRouter.post('/place', authMiddleware, placeOrder);
orderRouter.post('/verify',  verifyOrder);
orderRouter.post('/userorders',authMiddleware, userOrders);
orderRouter.get('/list', listOrders);
orderRouter.post("/status",updateStatuts)   
export default orderRouter;
