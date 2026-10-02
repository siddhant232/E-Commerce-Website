
import axios from "../../api/AxiosConfig";
import { setUser, clearUser } from "./UserSlice";

// Register — dispatches setUser on success so profile is immediately available
export const asyncsetuser = (user) => async(dispatch,getState)=>{
     try {
       const res = await axios.post("/auth/register", user, { withCredentials: true });
       dispatch(setUser(res.data.user));
       return res.data;
        
    } catch (error) {
        throw error;
    }
}

// Login — dispatches setUser on success
export const asyncloginuser = (user) => async(dispatch,getState)=>{
    try {
        const res = await axios.post("/auth/login", user, { withCredentials: true });
        dispatch(setUser(res.data.user));
        return res.data;

    } catch (error) {
        throw error;
    }
}

// Logout — clears user from Redux
export const asynclogout = () => async(dispatch,getState)=>{
    try {
        await axios.post("/auth/logout",{}, { withCredentials: true });
        dispatch(clearUser());
        return 1;

    } catch (error) {
        return 0;
    }
}