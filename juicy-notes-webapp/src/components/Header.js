import React from 'react';
import { HeaderWrapper, Logo, Title } from '../styles/HeaderStyles';
import Navbar from './Navbar';

export default function Header() {
    return (
        <HeaderWrapper>
            <Logo />
            <Title>Test</Title>
            <Navbar />
        </HeaderWrapper>
    );
}