// External Dependencies
import React from 'react';
import styled from 'styled-components';

// Internal Dependencies
import latteArt from '../assets/photos/latteArt.jpg';

const StyledNav = styled.nav({
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '20% 80%',
    background: 'slateblue',
    height: '70px',
    padding: '3px',
})

const StyledUl = styled.ul({
    display: 'flex',
    justifySelf: 'flex-end',
    listStyle: 'none',
})

const StyledA = styled.a({
    textDecoration: 'none',
    color: 'white',
    paddingRight: '2em',
})

const StyledImg = styled.img`
    max-height: 100%;
    border: 2px solid lightblue;
    border-radius: 50%;
`

class Navbar extends React.Component {
    render(){
        return (
            <StyledNav>
                <StyledImg src={latteArt} />
                <StyledUl>
                    <li><StyledA href="#">Home</StyledA></li>
                    <li><StyledA href="#">About</StyledA></li>
                    <li><StyledA href="#">Contact</StyledA></li>
                </StyledUl>
            </StyledNav>
        )
    }
}

export default Navbar;