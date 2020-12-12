import React from 'react';
import { RegisterWrapper } from '../styles/RegisterForm';
import { Input } from '../styles/GlobalStyles';

function RegisterForm() {
    return (
        <RegisterWrapper>
            <form>
                <Input type="text" placeholder="Login"></Input>
                <Input type="text" placeholder="Password"></Input>
                <Input type="submit" value="Sign up"></Input>
            </form>
        </RegisterWrapper>
    );
}

export default RegisterForm;