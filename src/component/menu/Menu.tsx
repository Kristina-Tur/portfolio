import React from 'react';
import styled from 'styled-components';
import {Theme} from '../../styles/Theme';

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledNav>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <Link href="">{item}</Link>
                    </li>
                })}
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 70px;
  }
`

const Link = styled.a`
  color: ${Theme.colors.text.primary};
  font-size: 20px;
  font-weight: 400;
  line-height: 136%;
  border-radius: 70px;
  border: 2px solid ${Theme.colors.neutral};
  padding: 5px 40px;
  
  &:hover{
    background-color: ${Theme.colors.neutral};
    color: ${Theme.colors.text.secondary};
  }
`

