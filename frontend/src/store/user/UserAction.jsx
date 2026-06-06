
import axios from "../../api/AxiosConfig";
import { loaduser } from "./UserSlice";

export const asyncgetuser = () => async (dispatch,getState) => {
    try {

        const res = await axios.get("/users");

        dispatch(loaduser(res.data));

    } catch (error) {
        console.log(error);
    }  
}

export const asyncsetuser = (user) => async(dispatch,getState)=>{
     try {
       const res = await axios.post("/auth/register", user, { withCredentials: true });
       return res.data;
        
    } catch (error) {
        throw error;
    }
}

  export const asyncloginuser = async (user) => {
  try {
    const res = await axios.post("/auth/login", user, { withCredentials: true });
    return res.data;

  } catch (error) {
    throw error;
  }
  }
   