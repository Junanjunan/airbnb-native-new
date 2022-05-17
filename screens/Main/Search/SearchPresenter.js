import React, { Fragment, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Keyboard, TextInput } from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../../../components/DismissKeyboard";
import colors from "../../../colors";
import api from "../../../api";
import RoomCard from "../../../components/RoomCard";


const Container = styled.View``;

const SearchContainer = styled.View`
    margin-top: 50px;
    flex-direction: row;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
`;
ActivityIndicator
const CancelContainer = styled.TouchableOpacity``;

const CancelText = styled.Text``;

const SearchBar = styled.TextInput`
    height: 40px;
    width: 85%;
    border-radius: 7px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.5);
`;

const FiltersContainer = styled.ScrollView`
    flex-direction: row;
    margin-top: 10px;
`;

const FilterConatiner = styled.View`
    align-items: center;
    margin-right: 15px;
`;

const FilterLabel = styled.Text`
    text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 5px;
    font-weight: 500;
`;

const Filter = styled.TextInput`
    padding: 10px;
    background-color: white;
    border-radius: 20px;
    width: 80px;
`;

const SearchBtn = styled.TouchableOpacity`
    background-color: ${colors.red};
    padding: 10px;
    margin: 10px 30px;
    border-radius: 10px;
    align-items: center;
`;

const SearchText = styled.Text`
    color: white;
    font-weight: 600;
    font-size: 16px;
`;

const ResultsText = styled.Text`
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
`;

const Results = styled.ScrollView`
    margin-top: 15px;
`;

export default ({navigation, beds, setBeds, bedrooms, setBedrooms, bathrooms, setBathrooms, maxPrice, setMaxPrice, searching, triggerSearch, results}) => {
    // const submit = async () => {
    //     const form = {
    //         ...(beds && {beds}),
    //         ...(bedrooms && {bedrooms}),
    //         ...(bathrooms && {bathrooms}),
    //         ...(maxPrice && {max_price: maxPrice})
    //     };
    //     try{
    //         const {data} = await api.search(form, "nn");
    //         console.log(data)
    //     } catch(e){
    //         console.warn(e)
    //     }
    //     // console.log(form);
    // }
    return (
        <DismissKeyboard>
            <>
            <Container>
                <SearchContainer>
                    <SearchBar autoFocus={true} placeholder="Search by city" />
                    <CancelContainer onPress={() => navigation.goBack()}>
                        <CancelText>Cancel</CancelText>
                    </CancelContainer>
                </SearchContainer>
                <FiltersContainer
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 20 }}
                >
                    <FilterConatiner>
                        <FilterLabel>Beds</FilterLabel>
                        <Filter 
                            onChangeText={text => setBeds(text)}
                            value={beds}
                            placeholder="0" 
                            keyboardType={"number-pad"} 
                        />
                    </FilterConatiner>
                    <FilterConatiner>
                        <FilterLabel>Bedrooms</FilterLabel>
                        <Filter
                            onChangeText={text => setBedrooms(text)}
                            value={bedrooms}
                            placeholder="0" 
                            keyboardType={"number-pad"} 
                        />
                    </FilterConatiner>
                    <FilterConatiner>
                        <FilterLabel>Bathrooms</FilterLabel>
                        <Filter 
                            onChangeText={text => setBathrooms(text)}
                            value={bathrooms}
                            placeholder="0" 
                            keyboardType={"number-pad"} 
                        />
                    </FilterConatiner>
                    <FilterConatiner>
                        <FilterLabel>Max. price</FilterLabel>
                        <Filter
                            onChangeText={text => setMaxPrice(text)}
                            value={maxPrice}
                            placeholder="$0" 
                            keyboardType={"number-pad"} 
                        />
                    </FilterConatiner>
                </FiltersContainer>
            </Container>
            <SearchBtn onPress={searching ? null : triggerSearch}>
                {searching ? <ActivityIndicator color="white" /> : <SearchText>Search</SearchText>}
            </SearchBtn>
            {results ? <ResultsText>We found {results.count} rooms</ResultsText> : null}
            <Results contentContainerStyle={{paddingHorizontal: 15}}>
                {results?.results?.map(room =>
                    <RoomCard
                    key={room.id}
                    name={room.name} 
                    price={room.price}
                    photos={room.photos} 
                    id={room.id} 
                    isFav={room.is_fav}
                    isSuperHost={room.user.superhost}
                    roomObj={room}
                />
                )}
            </Results>
            </>
        </DismissKeyboard>
    );
}