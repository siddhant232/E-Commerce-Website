import axios from "../../api/AxiosConfig";
import { setOrders } from "./OrderSlice";

export const asyncGetOrders = () => async (dispatch) => {
    try {
        const res = await axios.get("/orders");
        dispatch(setOrders(res.data));
    } catch (error) {
        console.log(error);
    }
};
