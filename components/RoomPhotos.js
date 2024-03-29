import React from "react";
import styled from "styled-components/native";
import Pt from "prop-types";
import Swiper from "react-native-swiper";
import { Dimensions } from "react-native";


const {width, height} = Dimensions.get("screen");

const PhotosContainer = styled.View`
    margin-bottom: 10px;
    overflow: hidden;
    background-color: red;
    width: 100%;
    height: ${props => `${height/props.factor}`}px;
`;

const SlideImage = styled.Image`
    width: 100%;
    height: 100%;
`;

const RoomPhotos = ({photos, factor=4 }) => {
    return(
        <PhotosContainer factor={factor}>
            {photos.length === 0 ? (
                <SlideImage 
                    resizeMode="repeat"
                    source={require("../assets/roomDefault.jpg")}
                />
            ) : (
                <Swiper
                    paginationStyle={{marginBottom: -15}}
                    dotColor={"gray"}
                    activeDotColor={"white"}
                    >
                    {photos.map(photo => (
                        <SlideImage key={photo.id} source={{ uri: photo.file }} /> 
                    ))}
                </Swiper>
            )}
        </PhotosContainer>
    );
}

RoomPhotos.propTypes = {
    photos: Pt.arrayOf(
        Pt.shape({
            file:Pt.string
        })
    )
};

export default RoomPhotos