import styled from 'styled-components/macro';

export const ContentWrapper = styled.div`
    width: 100%;
    background-color: white;
    height: 100vh;
`;

export const TitleWrapper = styled.div`
    background-color: pink;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
`;

export const Title = styled.p`
    font-size: 50px;
`;

export const SortSelector = styled.select`
    width: 100px;
`;

export const CollectionWrapper = styled.div`
    width: 100%;
    grid-auto-flow: row;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 0fr));
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