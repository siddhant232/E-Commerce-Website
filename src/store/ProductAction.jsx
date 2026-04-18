import axios from "../api/AxiosConfig"
import { loadproduct } from "./ProductSlice";

export const asyncsetproduct = (product) => async(dispatch,getstate)=> {
   try {
        const res = await axios.post("/products",product);
        console.log(res);
        
   } catch (error) {
        console.log(error);
        
   }
}

export const asynclaodproduct = () => async(dispatch,getstate)=>{
    try {
        const {data} = await axios.get("/products");
        dispatch(loadproduct(data));
    } catch (error) {
        console.log(error);
        
    }
}
    
