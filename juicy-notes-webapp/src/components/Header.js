import React from 'react';
import { HeaderWrapper, Logo } from '../styles/HeaderStyles';
import Navbar from './Navbar';
import LogoTekst from '../images/LogoTekst.png';

export default function Header() {
    return (
        <HeaderWrapper>
            <Logo src={LogoTekst} />
            <Navbar />
        </HeaderWrapper>
    );
}