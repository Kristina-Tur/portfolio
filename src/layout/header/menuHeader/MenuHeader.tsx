import styled from 'styled-components';
import {Theme} from '../../../styles/Theme';

export const MenuHeader = (props: { menuItems: Array<string> }) => {
    return (
        <StyledNav>
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
        </StyledNav>
    );
};

const StyledNav = styled.nav`
  ul {
    display: flex;
    gap: 60px;
  }
  
  @media ${Theme.media.tablet}{
    display: none;
  }
`

const Link = styled.a`
  font-size: 20px;
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
  
  &::before{
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
    &::before{
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