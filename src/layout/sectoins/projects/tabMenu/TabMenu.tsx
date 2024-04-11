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
                    return <List key={index} role={'menuItem'}>
                        <Link href="#">{item}</Link>
                    </List>
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

const List = styled.li`

  @media ${Theme.media.mobile}{
    max-width: 200px;
    width: 100%;
    min-height: 30px;
  }
  max-width: 100px;
  width: 100%;
  min-height: 30px;
  background-color: ${Theme.colors.primaryBg};
  border-radius: 70px;
  border: 2px solid ${Theme.colors.neutral};
  text-align: center;

  &:hover{
    background-color: ${Theme.colors.neutral};
  }
`

const Link = styled.a`
  ${font({color: Theme.colors.text.primary, FMax: 20, FMin: 18, weight: 400, lineHeight: 1.7})};
  padding: 5px 88px;

  &:hover{
    color: ${Theme.colors.text.secondary};
  }
`

