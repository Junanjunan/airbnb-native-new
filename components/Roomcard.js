import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { Ionicons } from "@expo/vector-icons";
import utils from "../utils";
import { useDispatch } from "react-redux";
import { toggleFav } from "../redux/usersSlice";
import colors from "../colors";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const {width, height} = Dimensions.get("screen");

const Container = styled.View`
    width: 100%;
    margin-bottom: 50px;
    align-items: flex-start;
    position: relative;
`;

const Name = styled.Text`
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 7px;
`;

const PriceContainer = styled.View`
    flex-direction: row;
`;

const PriceText = styled.Text`
    font-size: 16px;
`;

const PriceNumber = styled.Text`
    font-weight: 900;
    font-size: 16px;
`;

const SuperHost = styled.Text`
    padding: 3px 5px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 5px;
`;

const SuperHostText = styled.Text`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 10px;
`;

const PhotosContainer = styled.View`
    margin-bottom: 10px;
    overflow: hidden;
    background-color: red;
    width: 100%;
    height: ${height/4}px;
`;

const SlideImage = styled.Image`
    width: 100%;
    height: 100%;
`;

const FavButton = styled.View`
    background-color: white;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

const TOpacity = styled.TouchableOpacity`
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
`;

const RoomCard = ({id, isFav, isSuperHost, photos, name, price, roomObj}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    // console.log(roomObj);
    // console.log({...roomObj});
    return(
        <TouchableOpacity onPress={() => navigation.navigate("RoomDetail", { ...roomObj })}>
            <Container>
                <TOpacity onPress={() => dispatch(toggleFav(id))}>
                    <FavButton>
                        <Ionicons 
                            size={15} 
                            name={utils.isAndroid() ? (isFav ? "heart" : "heart-outline") : (isFav ? "heart-circle" : "heart-dislike-outline")}
                            color={isFav ? colors.red : "black"}
                            />
                    </FavButton>
                </TOpacity>
                <PhotosContainer>
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
                {isSuperHost ? (
                    <SuperHost>
                        <SuperHostText>Superhost</SuperHostText>
                    </SuperHost>
                ) : null}
                <Name>{name}</Name>
                <PriceContainer>
                    <PriceNumber>{price}</PriceNumber><PriceText>/night</PriceText>
                </PriceContainer>
            </Container>
        </TouchableOpacity>
    )
}

RoomCard.proptTypes = {
    id: Pt.number.isRequired,
    isFav: Pt.bool.isRequired,
    isSuperHost: Pt.bool.isRequired,
    photos: Pt.arrayOf(
        Pt.shape({
            file: Pt.string
        })
    ),
    name: Pt.string.isRequired,
    price: Pt.number.isRequired
};

export default RoomCard;