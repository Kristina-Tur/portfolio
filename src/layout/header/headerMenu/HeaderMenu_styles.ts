import styled, {css} from 'styled-components';
import {Theme} from '../../../styles/Theme';
import {Link} from 'react-scroll';

//Menu
const MenuList = styled.li`
  position: relative; 
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${Theme.colors.text.primary};
  transition: ${Theme.animations.transition};
  
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const NavLink = styled(Link)`
  font-size: 22px;
  font-weight: 400;
  color: transparent;
  
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
    transition: ${Theme.animations.transition};
  }

  &:hover, &.active {
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

//Desktop menu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: flex-end;
    gap: 60px;
  }
`

//Mobile Menu
const MobileMenu = styled.nav`
`
const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: 17px;
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

const MenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Theme.colors.primaryBg};
  opacity: 0.95;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  transform: translateX(100%);
  transition: ${Theme.animations.transition};

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }
  
  ${props => props.isOpen && css<{isOpen: boolean}>`
    transform: translateX(0);
  `}
`

export const S = {
    NavLink,
    Mask,
    MenuList,
    DesktopMenu,
    MobileMenu,
    BurgerButton,
    MenuPopup
}