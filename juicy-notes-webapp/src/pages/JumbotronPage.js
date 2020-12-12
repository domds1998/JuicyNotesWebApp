import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Title, TitleWrapper, Video, WelcomeWrapper, WrapperItem } from '../styles/JumbotronStyles';

function JumbotronPage() {
    return (
        <>
            <WelcomeWrapper>
                <WrapperItem>
                    <TitleWrapper>
                        <Video></Video>
                        <Title><b>
                            Platforma pozwalająca na szybkie robienie notatek oraz fiszek.
                            W oparciu o unikatową wtyczkę, pozwala na zaznaczanie tekstu na dowolnej stronie i zapisywanie go na <font color="#f48473">Juicy</font><font color="#d55b55">Notes</font></b>
                        </Title>
                    </TitleWrapper>
                    <RegisterForm />
                </WrapperItem>
            </WelcomeWrapper>
        </>
    );
}

export default JumbotronPage;