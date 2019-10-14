// External Dependencies
import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    height: 1em;
    width: 1em;
    border-radius: 50%;
    outline: none;
    border: 2px solid gray;
    margin: 1em;

    &:active {
        background: darkgray;
    }
`

// Component Definition
const CarouselButton = (props) => {
    return (
        <StyledButton onClick={props.onClickCTA} />
    )
}


export default CarouselButton;