import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { FullContainer, RegisterContainer, Title, TitleWrapper, Video, WelcomeWrapper } from '../styles/JumbotronStyles';

function JumbotronPage() {
    return (
        <>
            <FullContainer>
                <WelcomeWrapper>
                    <TitleWrapper>
                        <Video>saas</Video>
                        <Title>
                            saasasa
                        </Title>
                    </TitleWrapper>
                    <RegisterContainer>
                        <RegisterForm />
                    </RegisterContainer>
                </WelcomeWrapper>
            </FullContainer>
        </>
    );
}

export default JumbotronPage;