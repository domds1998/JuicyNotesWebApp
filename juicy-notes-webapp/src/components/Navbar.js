import React from 'react';
import { NavbarWrapper, Element } from '../styles/NavbarStyles';

export default function Navbar() {

    return (
        <NavbarWrapper>
            <Element>Home</Element>
            <Element>Wszystkie</Element>
            <Element>Zestawy</Element>
        </NavbarWrapper>
    );
}