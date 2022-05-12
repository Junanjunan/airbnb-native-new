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
            const { payload } = action;
            if(payload.page === 1){
                state.explore.rooms = payload.rooms;
                state.explore.page = 1;
            } else{
                state.explore.rooms = [...state.explore.rooms, ...payload.rooms];
            }
        },
        increasePage(state, action){
            state.explore.page += 1;
        },
        setFavs(state, action){
            state.favs = action.payload;
        }
    }
});

export const { setExploreRooms, increasePage, setFavs } = roomsSlice.actions;     // 이해필요 // 여기에 increasePage를 추가를 안하니 index.js에서 불러오기가 안됨 음... export 해주기 위한 설정?
                                                                        // roomsSlice의 actions 중 setExploreRooms, increasePage를 export 하도록 정의(한것 같음)

export const getRooms = page => async (dispatch, getState) => {
    const {usersReducer: {token}} = getState();
    try {
        const {data: {results}} = await api.rooms(page, token);
        dispatch(setExploreRooms({
            rooms: results,
            page: page
        }))
    } catch(e) {
        console.warn(e);
    }
}

export default roomsSlice.reducer;