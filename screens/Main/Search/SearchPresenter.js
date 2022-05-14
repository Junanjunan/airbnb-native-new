import React, { Fragment, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../../../components/DismissKeyboard";
import colors from "../../../colors";

const Container = styled.View``;

const SearchContainer = styled.View`
    margin-top: 50px;
    flex-direction: row;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
`;

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

const SearchBtn = styled.TouchableOpacity``;

const SearchText = styled.Text``;

export default () => {
    const navigation = useNavigation();
    const [beds, setBeds] = useState();
    const [bedrooms, setBedrooms] = useState();
    const [bathrooms, setBathrooms] = useState();
    const [maxPrice, setMaxPrice] = useState();
    const submit = () => {
        const form = {
            ...CancelContainer(beds && {beds}),
            ...CancelContainer(bedrooms && {bedrooms}),
            ...CancelContainer(bathrooms && {bathrooms}),
            ...CancelContainer(maxPrice && {max_price: maxPrice})
        };
        console.log(form);
    }
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
            <SearchBtn onPress={submit}>
                <SearchText>Search</SearchText>
            </SearchBtn>
            </>
        </DismissKeyboard>
    );
}