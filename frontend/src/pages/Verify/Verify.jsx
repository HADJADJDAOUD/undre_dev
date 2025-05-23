import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../components/StoreContext";
import "./Verify.css";
import axios from 'axios';
const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
        const {url} = useContext(StoreContext);
        const navigate=useNavigate();
    const verifyPayment = async () => {
        let response = await axios.post(url + "/api/order/verify", {success, orderId});
     if (response.data.success) {
        console.log('this is response data',response.data);
        
        navigate('/myorders')
     }  else{
        navigate("/")
     }
    }

    useEffect(() => {
        verifyPayment();
    }, []); 
  return (

   
    <div className='verify'>
        <div className="spinner">
            
        </div>
    </div>
  )
}

export default Verify
