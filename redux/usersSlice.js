import { createSlice } from "@reduxjs/toolkit";
import api from "../api";
import { setFav, setFavs } from "./roomsSlice";


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
            state.id = action.payload.id;
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
        const { data: {id, token}} = await api.login(form);
        // console.log(token);
        if (id && token){
            dispatch(logIn({token, id}));
        }
    } catch(e){
        alert(e);
    }
}


export const getFavs = () => async (dispatch, getState) => {
    const { usersReducer: {id, token} } = getState();
    try {
        const { data } = await api.favs(id, `Bearer ${token}`);
        dispatch(setFavs(data));
    } catch(e){
        console.warn(e);
    }
}

export const toggleFav = roomId => async (dispatch, getState) => {
    const {usersReducer: {id, token}} = getState();
    try{
        const {status} = await api.toggleFavs(id, roomId, `Bearer ${token}`);
        dispatch(setFav({ roomId }));
        console.log(status);
    } catch(e){
        console.warn(e);
    }
}

export default userSlice.reducer;