import styled, {css} from 'styled-components';
import {Theme} from '../../../../styles/Theme';
import {font} from '../../../../styles/Common';

const Nav = styled.nav`
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

const Link = styled.a<{active: boolean}>`
  background-color: ${Theme.colors.primaryBg};
  ${font({color: Theme.colors.text.primary, FMax: 20, FMin: 16, weight: 400, lineHeight: 1.7})};
  text-transform: capitalize;
  border-bottom: 1px solid ${Theme.colors.text.accent};
  border-radius: 83px;
  padding: 0 25px;
  
  transition: ${Theme.animations.transition};

  &:hover {
    background-image: ${Theme.colors.accent};
    border-bottom: none;
    
  }
  
  ${props => props.active && css<{active: boolean}>`
    background-image: ${Theme.colors.accent};
    border-bottom: none;
  `}
`

export const S = {
    Nav,
    DotsWrapper,
    Link
}