import React, { useEffect } from "react";
import styled from "styled-components/native";
import RoomPhotos from "../../components/RoomPhotos";
import colors from "../../colors";
import { Ionicons } from "@expo/vector-icons";


const Container = styled.View``;

const DataContainer = styled.View`
    padding: 0px 20px;
`;

const Address = styled.Text`
    margin-top: 10px;
    font-size: 24px;
`;

const PropertyInfroContainer = styled.View`
    margin-top: 20px;
    flex-direction: row;
`;

const PropertyInfoData = styled.View`
    background-color: ${colors.green};
    margin-right: 10px;
    border-radius: 5px;
`;

const PropertyInfoText = styled.Text`
    color: white;
    font-weight: 500;
    padding: 5px 10px;
`;

const CheckContainer = styled.View`
    margin-top: 40px;
`;

const CheckTitleContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

const CheckTitle = styled.Text`
    font-size: 18px;
    margin-left: 15px;
`;

const CheckTime = styled.Text`
    margin-top: 10px;
`;


function formatQtt(number, name){
    if (number <= 1){
        return `${number} ${name}`;
    } else {
        return `${number} ${name}s`;
    }
}

function formatTime(time){
    const [hours, min, sec] = time.split(":");
    return `${hours} o'clock.`;
}

export default ({route: {params}, navigation}) => {
    // console.log(params);
    useEffect(() => {
        navigation.setOptions({ title: params.name });
    }, []);
    return(
        <Container>
            <RoomPhotos photos={params.photos} factor={2} />
            <DataContainer>
                <Address>{params.address}</Address>
                <PropertyInfroContainer>
                    <PropertyInfoData>
                        <PropertyInfoText>{formatQtt(params.beds, "bed")}</PropertyInfoText>
                    </PropertyInfoData>
                    <PropertyInfoData>
                        <PropertyInfoText>{formatQtt(params.bedrooms, "bedroom")}</PropertyInfoText>
                    </PropertyInfoData>
                    <PropertyInfoData>
                        <PropertyInfoText>{formatQtt(params.bathrooms, "bathroom")}</PropertyInfoText>
                    </PropertyInfoData>
                </PropertyInfroContainer>
                <CheckContainer>
                    <CheckTitleContainer>
                        <Ionicons name={"time"} size={24} />
                        <CheckTitle>Check-in / Check-out</CheckTitle>
                    </CheckTitleContainer>
                    <CheckTime>
                        {formatTime(params.check_in)} / {formatTime(params.check_out)}
                    </CheckTime>
                </CheckContainer>
            </DataContainer>
        </Container>
    );
};