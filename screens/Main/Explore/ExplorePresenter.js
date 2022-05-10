import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";


const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text``;

export default ({rooms}) => {
    return(
        <Container>
            {
            rooms.length === 0 ? 
            <ActivityIndicator color="black" /> : 
            rooms.map(room => <Text>{room.name}</Text>)
            }
        </Container>
    )
};