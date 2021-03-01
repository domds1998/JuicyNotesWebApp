import styled from 'styled-components/macro';

export const ContentWrapper = styled.div`
    width: 1600px;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const TitleWrapper = styled.div`
    background-color: #fffcd5;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Title = styled.p`
    width: 357px;
    height: 52px;
    font-size: 45px;
    font-weight: 900;
    text-align: center;
    color: #22635e;
`;

export const CollectionWrapper = styled.div`
    width: 100%;
    height: 100%;
    grid-auto-flow: row;
    display: grid;
    grid-template-columns: 47.5% 15% 47.5%;
    grid-auto-rows: 100px;
    grid-gap: 5px;
    padding-bottom: 50px;
    padding-top: 50px;
`;

export const CollectionItem = styled.div`
    background-color: ${props => props.background};
    grid-column-start: ${props => props.columnStart};
    grid-row-start: ${props => props.rowStart};
    grid-row-end: ${props => props.rowEnd};
`;

export const CollectionPin = styled.div`
    background-color: blue;
    grid-column-start: 2;
`;