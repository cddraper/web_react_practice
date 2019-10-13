// External Dependencies
import React from 'react';
import styled from 'styled-components';

// Local Dependencies
import picOne from '../assets/photos/picOne.jpg';
import picTwo from '../assets/photos/picTwo.jpg';
import picThree from '../assets/photos/picThree.jpg';


const Wrapper = styled.div({
    display: 'flex',
    width: '50%',
    height: '50vh',
    justifyContent: 'space-around',
    alignItems: 'center',
});

const StyledImg = styled.img({
    maxHeight: '100%',
})

// Component Definition
const Carousel = () => {
    const [location, setLocation] = useState(0);

    const picArr = [picOne, picTwo, picThree];
    const picArrLength = picArr.length;



    return (
        <Wrapper>
            <StyledButton />
            <StyledImg />
            <StyledButton />
        </Wrapper>
    )
}

export default Carousel;