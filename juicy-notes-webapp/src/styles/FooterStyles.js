import styled from 'styled-components/macro';

export const FooterWrapper = styled.div`
    height: 125px;
    width: 100%;
    background-color: #ffec9d;
    display: flex;
    align-items: center;
    padding: 20px;

    & > Img:last-of-type {
        margin-left: auto;
    }
`;

export const Img = styled.img`
    height: ${props => props.height};
`;