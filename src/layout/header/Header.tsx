import React from 'react';
import styled from 'styled-components';

// rsc

export const Header = () => {
    return (
        <StyledHeader>
            <nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contacts</a>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`

`

