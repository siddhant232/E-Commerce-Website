
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    isAuthenticated : false,
};


const userslice = createSlice({
    name : "user",
    initialState,
    reducers : {
        setUser : (state,action)=>{
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser : (state)=>{
            state.user = null;
            state.isAuthenticated = false;
        }
    },
});

export const { setUser, clearUser } = userslice.actions;

export default userslice.reducer;