import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { ContentWrapper } from '../styles/GlobalStyles';
import { FullContainer, Title, TitleWrapper, WelcomeWrapper, Video } from '../styles/JumbotronStyles';

function JumbotronPage() {
    return (
        <>
            <FullContainer>
                <WelcomeWrapper>
                    <TitleWrapper>
                        <Title>
                            saasasa
                    </Title>
                        <Video>saas</Video>
                    </TitleWrapper>
                    <RegisterForm />
                </WelcomeWrapper>
            </FullContainer>
            <ContentWrapper></ContentWrapper>
        </>
    );
}

export default JumbotronPage;