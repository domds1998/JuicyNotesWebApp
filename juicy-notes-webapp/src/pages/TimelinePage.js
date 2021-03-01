import React from 'react';
import { ContentWrapper, CollectionWrapper, CollectionItem, CollectionPin } from '../styles/TimelineStyles';

let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function renderTimeLine() {

    let counter = 1;

    let result = array.map(value =>
        <>
            <CollectionPin>{value}</CollectionPin>
            <CollectionItem background="#eaeaea" columnStart={counter % 2 === 0 ? "3" : "1"} rowStart={counter} rowEnd={counter++ + 2}>
                {value}
            </CollectionItem>
        </>
    );

    return result;
}

function TimelinePage() {
    return (
        <ContentWrapper>
            <CollectionWrapper>
                {renderTimeLine()}
            </CollectionWrapper>
        </ContentWrapper>
    );
}

export default TimelinePage;