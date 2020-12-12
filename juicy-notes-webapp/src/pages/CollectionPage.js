import React from 'react';
import { ContentWrapper, TitleWrapper, Title, SortSelector, CollectionElement, CollectionWrapper } from '../styles/CollectionStyles';


function CollectionPage() {
    return (
        <ContentWrapper>
            <TitleWrapper>
                <Title>Zestaw numer 1</Title>
                <SortSelector></SortSelector>
            </TitleWrapper>
            <CollectionWrapper>
                <CollectionElement>assaas</CollectionElement>
                <CollectionElement>assaas</CollectionElement>
                <CollectionElement>assaas</CollectionElement>
                <CollectionElement>assaas</CollectionElement>
                <CollectionElement>assaas</CollectionElement>
                <CollectionElement>assaas</CollectionElement>
            </CollectionWrapper>
        </ContentWrapper>
    );
}

export default CollectionPage;