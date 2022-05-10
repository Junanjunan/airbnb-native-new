import { createSlice } from "@reduxjs/toolkit";
import api from "../api";


const userSlice = createSlice({
    name: "users",
    initialState: {
        isLoggedIn: false,
        token: null
    },
    reducers: {                         
        logIn(state, action){
            state.isLoggedIn = true;            
            state.token = action.payload.token;
        },
        logOut(state, action){
            state.isLoggedIn = false;
            state.token = null;
        }
    }
});


export const {logIn, logOut} = userSlice.actions;
export const userLogin = form => async dispatch => {
    try{
        const { data: {token, id}} = await api.login(form);
        console.log("--------------------------------------------------");
        console.log(token);
        console.log(id);
        if (id && token){
            dispatch(logIn({token}));
        }
    } catch(e){
        alert(e);
    }
}
export default userSlice.reducer;