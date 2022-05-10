import React, { useEffect } from "react";
import { getRooms } from "../../../redux/roomsSlice";
import ExplorePresenter from "./ExplorePresenter";


export default ({ getRooms, rooms, page }) => {
    useEffect(() => {
        getRooms();
    }, []);
    return <ExplorePresenter rooms={rooms} />;
}