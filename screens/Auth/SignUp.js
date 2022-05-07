import React, { useState } from "react";
import {StatusBar, KeyboardAvoidingView} from "react-native";
import styled from "styled-components/native";
import { createAccount } from "../../api";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";
import { isEmail } from "../../utils";


const Container = styled.View`
    flex:1 ;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.View`
    margin-bottom: 30px;
`;

export default ({ navigation: { navigate } }) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const isFormValid = () => {
        if(
            firstname===""||
            lastname ===""||
            email===""||
            password===""
            ){
            alert("All fields are required.");
            return false;
        }
        if(!isEmail(email)){
            alert("Please add a valid email.");
            return false;
        }
        return true;
    }
    const handleSubmit = async () => {
        if (!isFormValid()){
            return;
        }
        setLoading(true);
        try{
            const { status } = await createAccount({
                first_name: firstname,
                last_name: lastname,
                email: email,
                username:email,
                password: password
            });
            console.log(status)
            if (status === 200 || status === 201){
                alert("Account created. Sign in");
                navigate("SignIn", { email, password });
            }
            
        } catch(e){
            alert(e);
            console.warn(e);
        } finally{
            setLoading(false);
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
                            autoCapitalize="words" 
                            stateFn={setFirstname}
                        />
                        <Input 
                            value={lastname} 
                            placeholder="Last name" 
                            autoCapitalize="words" 
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
                    <Btn loading={loading} text={"Sign Up"} accent onPress={handleSubmit} />
                    </KeyboardAvoidingView>
            </Container>
        </DismissKeyboard>
    );
};