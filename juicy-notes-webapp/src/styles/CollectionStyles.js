import styled from 'styled-components/macro';

export const CollectionWrapper = styled.div`
    width: 100%;
    grid-auto-flow: row;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-auto-rows: auto;
    background-color: green;
    padding-top: 50px;
    padding-bottom: 50px;
`;

export const CollectionElement = styled.div`
    background-color: red;
    width: 500px;
    height: 300px;
`;