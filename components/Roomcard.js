import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";

const RoomCard = ({id, isFav, isSuperHost, photos, name, price}) => null

RoomCard.proptTypes = {
    id: Pt.number.isRequired,
    isFav: Pt.bool.isRequired,
    isSuperHost: Pt.bool.isRequired,
}