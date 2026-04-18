
import axios from "../api/AxiosConfig";
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
       const res = await axios.post("/users", user);
        console.log(res.data);
        
    } catch (error) {
        console.log(error);
        
    }
}

  export const asyncloginuser = async (user) => {
  try {
    const res = await axios.get(
      `/users?username=${user.username}&password=${user.password}`
    );

    if (res.data.length === 0) {
      return { success: false, message: "Invalid username or password" };
    }

    return { success: true, message: "Login successful" };

  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
  }
   