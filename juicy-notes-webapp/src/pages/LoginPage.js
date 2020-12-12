import React from 'react';
import LoginForm from '../components/LoginForm';
import { WelcomeWrapper, WrapperItem } from '../styles/JumbotronStyles';

function LoginPage() {
    return (
        <>
            <WelcomeWrapper>
                <WrapperItem>
                    <LoginForm />
                </WrapperItem>
            </WelcomeWrapper>
        </>
    );
}

export default LoginPage;