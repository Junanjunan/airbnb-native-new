import { createSlice } from "@reduxjs/toolkit";
import api from "../api";


const roomsSlice = createSlice({
    name: "rooms",
    initialState:{
        explore: {
            page: 1,
            rooms: []
        },
        favs: []
    },
    reducers: {
        setExploreRooms(state,action){
            const { explore } = state;
            const { payload } = action;
            payload.rooms.forEach(payloadRoom => {
                const exists = explore.rooms.find(savedRoom => savedRoom.id === payloadRoom.id);
                if(!exists){
                    explore.rooms.push(payloadRoom);
                }
            });
            state.explore.page = payload.page;
        }
    }
});

export const { setExploreRooms, increasePage } = roomsSlice.actions;     // 이해필요

export const getRooms = () => async dispatch => {
    try {
        const {data: {results}} = await api.rooms();
        // console.log(results);
        dispatch(setExploreRooms({
            rooms: results
        }));
    } catch(e) {
        console.log(e);
    }
}

export default roomsSlice.reducer;