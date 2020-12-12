import React from 'react';
import { RegisterWrapper, RegisterFormWrapper } from '../styles/RegisterForm';
import { Input } from '../styles/GlobalStyles';

function RegisterForm() {
    return (
        <RegisterWrapper>
            <RegisterFormWrapper>
                <Input width="357px" height="60px" type="text" placeholder="Login"></Input>
                <Input width="357px" height="60px" type="text" placeholder="Email"></Input>
                <Input width="357px" height="60px" type="text" placeholder="Hasło"></Input>
                <Input width="235px" height="44px" bgColor="#22635e" type="submit" value="Zarejestruj"></Input>
                <Input width="235px" height="44px" bgColor="#f48473" type="submit" value="Stwórz konto"></Input>
            </RegisterFormWrapper>
        </RegisterWrapper>
    );
}

export default RegisterForm;