// External Dependencies
import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav({
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '20% 80%',
    background: 'slateblue',
    height: '50px',
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

class Navbar extends React.Component {
    render(){
        return (
            <StyledNav>
                <img src="#" />
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