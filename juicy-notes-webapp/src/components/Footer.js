import React from 'react';
import { FooterWrapper, Img } from '../styles/FooterStyles';

export default function Footer() {
    return (
        <FooterWrapper>
            <Img height="50%" src="https://internetowe.pja.edu.pl/img/logo_header.png"></Img>
            <Img height="50%" src="https://devmuster.pja.edu.pl/assets/hackathon.png"></Img>
        </FooterWrapper>
    );
}

