import React from 'react';
import { ContentWrapper, TitleWrapper, Title, Face, Reverse, CollectionFlashcard, Bin, Juice, CollectionWrapper } from '../styles/TimelineStyles';
import LiniaGora from '../images/LiniaGora.png'

function TimelinePage() {
    return (
        <ContentWrapper>
            <TitleWrapper>
                <Title>OŚ CZASU</Title>
            </TitleWrapper>
            <CollectionWrapper>
                <CollectionFlashcard>
                    <Bin></Bin>
                </CollectionFlashcard>
                <CollectionFlashcard>
                    <Face>Zestaw 1</Face>
                    <Juice src={LiniaGora} />
                </CollectionFlashcard>
                <CollectionFlashcard>
                    <Juice></Juice>
                    <Reverse>Zestaw 2</Reverse>
                </CollectionFlashcard>
                <CollectionFlashcard>
                    <Face>Zestaw 3</Face>
                    <Juice></Juice>
                </CollectionFlashcard>
                <CollectionFlashcard>
                    <Juice></Juice>
                    <Reverse>Zestaw 4</Reverse>
                </CollectionFlashcard>
            </CollectionWrapper>
        </ContentWrapper>
    );
}

export default TimelinePage;