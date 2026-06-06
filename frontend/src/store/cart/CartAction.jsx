import axios from "../../api/AxiosConfig";
import { setCart } from "./CartSlice";

export const asyncGetCart = () => async (dispatch) => {
    try {
        const res = await axios.get("/cart");
        dispatch(setCart(res.data));
    } catch (error) {
        console.log(error);
    }
};
