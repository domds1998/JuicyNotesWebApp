import React from 'react';
import { HeaderWrapper, Logo } from '../styles/HeaderStyles';
import Navbar from './Navbar';
import LogoSvg from '../images/LogoNapis.svg';

export default function Header() {
    return (
        <HeaderWrapper>
            <Logo src={LogoSvg} />
            <Navbar />
        </HeaderWrapper>
    );
}