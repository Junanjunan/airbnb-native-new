import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { Dimensions, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { set } from "react-native-reanimated";
import styled from "styled-components/native";
import colors from "../../colors";



const {width, height} = Dimensions.get("window");

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const ScrollView = styled.ScrollView`
    position: absolute;
    bottom: 50px;
`;

const RoomContainer = styled.View`
    background-color: transparent;
    width: ${width}px;
    align-items: center;
`;

const RoomCard = styled.View`
    background-color: white;
    width: ${width-40}px;
    height: 120px;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 10px;
    padding: 0px 20px;
    flex-direction: row;
    align-items: center;
`;

const RoomPhoto = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 5px;
    margin-right: 10px;
`;

const Column = styled.View`
    width: 700%;
`;

const RoomName = styled.Text`
    font-size: 17px;
`;

const RoomPrice = styled.Text`
    margin-top: 5px;
    font-size: 15px;
`;

const MarkerWrapper = styled.View`
    align-items: center;
`;

const MarkerContainer = styled.View`
    background-color: ${props=> (props.selected ? colors.red : colors.green)};
    padding: 10px;
    border-radius: 10px;
    position: relative;
`;

const MarkerText = styled.Text`
    color: white;
    font-size: 18px;
`;

const MarkerTriangle = styled.View`
    border: 10px solid transparent;
    width: 10px;
    border-top-color: ${props => (props.selected ? colors.red : colors.green)}
`;

const RoomMarker = ({selected, price}) => {
    return(
        <MarkerWrapper>
            <MarkerContainer selected={selected} >
                <MarkerText>${price}</MarkerText>
            </MarkerContainer>
            <MarkerTriangle selected={selected} />
        </MarkerWrapper>
    )
}

const Map = ({ rooms }) => {
    const mapRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const onScroll = (e) => {
        const { nativeEvent: { contentOffset:{ x }}} = e;
        const position = Math.abs(Math.round(x/width));
        setCurrentIndex(position);
    };
    useEffect(() => {
        mapRef.current?.animateCamera({
            center: {
                latitude: parseFloat(rooms[currentIndex].lat),
                longitude: parseFloat(rooms[currentIndex].lng)
            }
        },{duration:2000})
    }, [currentIndex]);
    const onRegionChangeComplete = async () => {
        try{
            const boundaries = await mapRef.current?.getMapBoundaries();
            console.log(boundaries);
        } catch(e){

        }
    }
    return(
        <Container>
            <MapView
                onRegionChangeComplete={onRegionChangeComplete}
                ref={mapRef}
                style={StyleSheet.absoluteFill}
                camera={{
                    center:{
                        latitude: parseFloat(rooms[0].lat),
                        longitude: parseFloat(rooms[0].lng)
                    },
                    altitude:700,
                    pitch:0,
                    heading:0,
                    zoom:15
            }}>
                {rooms?.map((room, index) =>
                    <Marker
                        key={room.id}
                        coordinate={{
                            latitude: parseFloat(room.lat),
                            longitude: parseFloat(room.lng)
                        }}>
                            <RoomMarker selected={index===currentIndex} price={room.price} />
                        </Marker>
                    )}
            </MapView>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={onScroll}
                scrollEvntThrottle={100}    // Evnt? Event?
            >
                {rooms?.map(room =>
                    <RoomContainer key={room.id}>
                        <RoomCard>
                            <RoomPhoto 
                                source={
                                    room.photos[0]?.file ? {uri:room.photos[0].file} : require("../../assets/roomDefault.jpg")
                                }
                            />
                            <Column>
                                <RoomName>{room.name}</RoomName>
                                <RoomPrice>${room.price}</RoomPrice>
                            </Column>
                        </RoomCard>
                    </RoomContainer>
                    )}
            </ScrollView>
        </Container>
    );
}

function mapStateToProps(state){
    return {rooms: state.roomsReducer.explore.rooms};
}

export default connect(mapStateToProps)(Map);