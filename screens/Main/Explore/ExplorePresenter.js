import React from "react";
import { ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import RoomCard from "../../../components/RoomCard";


const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-horizontal: 15px;
`;

const Text = styled.Text``;

const FakeBar = styled.View`
    height: 40px;
`;

const FakeText = styled.Text`
`;

export default ({rooms}) => {
    return(
        <Container>
            {
            rooms.length === 0 ?
            <ActivityIndicator color="black" /> : 
            <>
            <FakeBar>
                <FakeText>Search..</FakeText>
            </FakeBar>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style ={{ width: "100%"}}
                contentContainerStyle= {{ paddingTop: 30}}
            >
                {
                    rooms.map(room => (
                        <RoomCard 
                            key={room.id}
                            name={room.name}
                            price={room.price}
                            photos={room.photos}
                            id={room.id}
                            isFav={room.is_fav}
                            isSuperHost={room.user}
                        />
                    ))
                }
                <TouchableOpacity>
                    <Text>Load More</Text>
                </TouchableOpacity>
            </ScrollView>
            </>
            }
        </Container>
    )
};