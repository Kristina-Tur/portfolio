import React from 'react';
import styled from 'styled-components';
import {Theme} from '../../../../styles/Theme';
import {Dots} from './components/Dots';
import {font} from '../../../../styles/Common';

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledNav>
            <DotsWrapper>
                <Dots/>
            </DotsWrapper>
            <ul role={'menu'}>
                {props.menuItems.map((item, index) => {
                    return <li key={index} role={'menuItem'}>
                        <Link href="#">{item}</Link>
                    </li>
                })}
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
  position: relative;
  z-index: 0;
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 70px;

    @media ${Theme.media.mobile}{
      flex-direction: column;
      align-items: center;
    }
  }
`

const DotsWrapper = styled.div`
  position: absolute;
  z-index: -1;
  top: -35px;
  left: 20px;

  @media ${Theme.media.mobile}{
    display: none;
  }
`

const Link = styled.a`
  background-color: ${Theme.colors.primaryBg};
  ${font({color: Theme.colors.text.primary, FMax: 20, FMin: 16, weight: 400, lineHeight: 1.7})};
  text-transform: uppercase;
  border-bottom: 1px solid ${Theme.colors.text.accent};
  border-radius: 83px;
  padding: 5px 25px;

  &:hover {
    background-image: ${Theme.colors.accent};
    border-bottom: none;
  }
`

