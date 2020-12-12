import React from 'react';
import { RegisterWrapper, RegisterFormWrapper } from '../styles/RegisterForm';
import { Input } from '../styles/GlobalStyles';

function RegisterForm() {
    return (
        <RegisterWrapper>
            <RegisterFormWrapper>
                <Input width="420px" height="80px" type="text" placeholder="Login"></Input>
                <Input width="420px" height="80px" type="text" placeholder="Email"></Input>
                <Input width="420px" height="80px" type="text" placeholder="Password"></Input>
                <Input type="submit" value="Sign up"></Input>
            </RegisterFormWrapper>
        </RegisterWrapper>
    );
}

export default RegisterForm;