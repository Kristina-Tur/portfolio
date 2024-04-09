import styled, {css} from 'styled-components';
import {Theme} from '../../../styles/Theme';

export const MenuBurger = (props: { menuItems: Array<string> }) => {
    return (
        <StyledNav>
            <BurgerButton isOpen = {false}>
                <span></span>
            </BurgerButton>
            <StyledMenuPopup isOpen = {false}>
                <ul role={'menu'}>
                    {props.menuItems.map((item, index) => {
                        return <List key={index} role={'menuItem'}>
                            <Link href="">
                                {item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </List>
                    })}
                </ul>
            </StyledMenuPopup>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
  display: none;
  
  @media ${Theme.media.tablet} {
    display: block;
  }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: 30px;
  right: 30px;
  width: 36px;
  height: 26px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${Theme.colors.secondary};
    position: absolute;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: rgba(255, 255, 255, 0);
    `}
  }

  &::before {
    content: '';
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${Theme.colors.secondary};
    position: absolute;
    transform: translateY(-10px);

    ${props => props.isOpen && css<{isOpen: boolean}>`
      transform: rotate(-45deg) translateY(0);
    `}
  }

  &::after {
    content: '';
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${Theme.colors.secondary};
    position: absolute;
    transform: translate(12px, 10px);

    ${props => props.isOpen && css<{isOpen: boolean}>`
      transform: rotate(45deg) translateY(0);
      width: 36px;
    `}
  }
`

const StyledMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Theme.colors.primaryBg};
  opacity: 0.9;
  display: none;
  
  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }
`

const Link = styled.a`
  font-size: 36px;
  font-weight: 400;

  color: transparent;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${Theme.colors.text.primary};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`
const List = styled.li`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-image: ${Theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -8px;
    right: -8px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(20deg) translateX(4px);

      & + ${Mask} {
        transform: skewX(12deg) translateX(-4px);
      }
    }
  }
`