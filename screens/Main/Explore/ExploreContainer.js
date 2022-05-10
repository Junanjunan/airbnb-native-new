import React, { useEffect } from "react";
import ExplorePresenter from "./ExplorePresenter";

export default ({ getRooms, rooms, page }) => {
    useEffect(() => {
        getRooms(page);
    }, [page]);
    return <ExplorePresenter rooms={rooms} />;
}