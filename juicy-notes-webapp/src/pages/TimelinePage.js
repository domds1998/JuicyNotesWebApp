import React from 'react';
import { ContentWrapper, CollectionWrapper, CollectionItem, CollectionPin } from '../styles/TimelineStyles';

let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let colors = ["#967AFA", "#9CD964", "#F6FC79", "#25D946"]

function renderTimeLine() {

    let counter = 1;

    let result = array.map(value => {

        // var randomColor = Math.floor(Math.random() * (16777215 - 100 + 1)).toString(16);
        var randomColor = Math.floor(Math.random() * (16777215 - 10000 + 1)).toString(16);

        return <>
            <CollectionPin direction={counter % 2 === 0 ? "left" : "right"} background={'#' + randomColor}>{value}</CollectionPin>
            <CollectionItem direction={counter % 2 === 0 ? "left" : "right"} borderColor={'#' + randomColor} background="#eaeaea" columnStart={counter % 2 === 0 ? "3" : "1"} rowStart={counter} rowEnd={counter++ + 2}>
                {value}
            </CollectionItem>
        </>
    }
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