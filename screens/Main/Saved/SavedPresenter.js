import React from "react";
import styled from "styled-components/native";
import RoomCard from "../../../components/RoomCard";

const Container = styled.View`
    margin-top: 10px;
    padding: 0px 30px;
`;

const SV = styled.ScrollView``;

const Title = styled.Text`
    font-size: 25px;
    margin-bottom: 10px;
`;

const NoFavs = styled.Text``;

const Text = styled.Text``;

export default ({rooms}) => {
    // console.log(rooms);
    return(
        <Container>
        <Title>Favourites</Title>
        <SV>
            {
            // rooms.length !== 0 ?
            false ? 
            (
                rooms.map(room=>(
                    <RoomCard
                        key={room.id}
                        name={room.name}
                        price={room.price}
                        photos={room.photos}
                        id={room.id}
                        isFav={room.is_fav}
                        isSuperHost={room.user.superhost}
                    />
                ))
            ) : (
                <NoFavs>You don't have any favourites</NoFavs>
            )}
        </SV>
    </Container>
    );
};