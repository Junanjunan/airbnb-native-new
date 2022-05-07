import React, { useState } from "react";
import {StatusBar, KeyboardAvoidingView} from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";

const Container = styled.View`
    flex:1 ;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.View`
    margin-bottom: 30px;
`;

export default () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {
        if(
            firstname===""||
            lastname ===""||
            email===""||
            password===""
            ){
            alert("All fields are required.");
            return;
        }
    };
    return(
        <DismissKeyboard>
            <Container>
                <StatusBar barStyle="light-content" />
                    <KeyboardAvoidingView>
                    <InputContainer>
                        <Input 
                            value={firstname} 
                            placeholder="First name" 
                            autoCapitalize="none" 
                            stateFn={setFirstname}
                        />
                        <Input 
                            value={lastname} 
                            placeholder="Last name" 
                            autoCapitalize="none" 
                            stateFn={setLastname}
                        />
                        <Input 
                            keyboardType={"email-address"}
                            value={email} 
                            placeholder="Email" 
                            autoCapitalize="none" 
                            stateFn={setEmail}
                        />
                        <Input 
                            value={password} 
                            placeholder="Password" 
                            stateFn={setPassword}    
                        />
                    </InputContainer>
                    <Btn text={"Sign Up"} accent onPress={handleSubmit} />
                    </KeyboardAvoidingView>
            </Container>
        </DismissKeyboard>
    );
};