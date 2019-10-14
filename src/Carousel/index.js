// External Dependencies
import React from 'react';
import styled from 'styled-components';

// Local Dependencies
import picOne from '../assets/photos/picOne.jpg';
import picTwo from '../assets/photos/picTwo.jpg';
import picThree from '../assets/photos/picThree.jpg';
import CarouselButton from './carouselButton';


const Wrapper = styled.div({
    display: 'flex',
    width: '50%',
    height: '50vh',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 'auto',
    marginTop: '2em',
});

const StyledImg = styled.img({
    maxHeight: '100%',
    borderRadius: '5px',
    border: "solid black 1px",
})

// Component Definition
const Carousel = () => {
    const [location, setLocation] = React.useState(0);

    const picArr = [picOne, picTwo, picThree];
    const picArrLength = picArr.length;

    const handleLeftClickCTA = () => {
        let nextLocation = location -1;
        if(nextLocation < 0){
            nextLocation = picArrLength - 1;
        }
        setLocation(nextLocation);
    }

    const handleRightClickCTA = () => {
        let nextLocation = location + 1;
        if(nextLocation >= picArrLength){
            nextLocation = 0;
        }
        setLocation(nextLocation);
    }


    return (
        <Wrapper>
            <CarouselButton onClickCTA={handleLeftClickCTA} >Hello</CarouselButton>
            <StyledImg src={picArr[location]}/>
            <CarouselButton onClickCTA={handleRightClickCTA}>{">"}</CarouselButton>
        </Wrapper>
    )
}

export default Carousel;