import React, { useEffect, useState } from "react";
import ExplorePresenter from "./ExplorePresenter";

export default ({ getRooms, rooms }) => {
    const [page, setPage] = useState(1);
    const increasePage = () => setPage(prev => prev +1);
    useEffect(() => {
        getRooms(1);
    }, [])
    useEffect(() => {
        getRooms(page);
    }, [page]);
    return <ExplorePresenter rooms={rooms} increasePage={increasePage} />;
}