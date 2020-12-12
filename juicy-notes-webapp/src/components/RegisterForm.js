import React from 'react';
import { RegisterWrapper, RegisterFormWrapper } from '../styles/RegisterForm';
import { Input } from '../styles/GlobalStyles';

function RegisterForm() {
    return (
        <RegisterWrapper>
            <RegisterFormWrapper>
                <Input width="357px" height="60px" fontSize="1em" type="text" placeholder="Login"></Input>
                <Input width="357px" height="60px" fontSize="1em" type="text" placeholder="Email"></Input>
                <Input width="357px" height="60px" fontSize="1em" type="text" placeholder="Hasło"></Input>
                <Input width="235px" height="44px" bgColor="#22635e" fontSize="1em" type="submit" value="Zarejestruj"></Input>
                <Input width="150px" height="30px" bgColor="#f48473" type="submit" value="Zaloguj się"></Input>
            </RegisterFormWrapper>
        </RegisterWrapper>
    );
}

export default RegisterForm;