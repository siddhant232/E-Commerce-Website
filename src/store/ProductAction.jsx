import axios from "../api/AxiosConfig"
import { loadproduct, setLoading, setError } from "./ProductSlice";

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
        dispatch(setLoading(true));
        const {data} = await axios.get("https://fakestoreapi.com/products");
        // Map data to match the expected 'img' property instead of 'image'
        const mappedData = data.map(item => ({
            ...item,
            img: item.image
        }));
        dispatch(loadproduct(mappedData));
        dispatch(setLoading(false));
    } catch (error) {
        console.log(error);
        dispatch(setError(error.message || "Failed to load products"));
        dispatch(setLoading(false));
    }
}
