import {Theme} from '../../../styles/Theme';
import styled, {css} from 'styled-components';
import {font} from '../../../styles/Common';

const Project = styled.div`
  max-width: 300px;
  min-height: 510px;
  width: 100%;
  
  background-color: ${Theme.colors.primaryBg};
  border: 1px solid ${Theme.colors.neutral};
  border-radius: 26px;
  text-align: center;
  box-shadow: 0 8px 32px 0 ${Theme.colors.border.projectBoxShadow};

  position: relative;

  @media ${Theme.media.mobile}{
    max-width: 200px;
    min-height: 440px;
  }
`

const Title = styled.h3`
  width: 100%;
  ${font({FMax: 30, FMin: 25, weight: 700, letter: '2px'})};
  background-image: ${Theme.colors.translucentAccent};
  padding: 10px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  transform-origin: top left;

  @media ${Theme.media.mobile}{
    top: 42%;
  }
`

const Image = styled.img`
  width: 100%;
  border-radius: 26px 26px 0 0;
  margin-bottom: 40px;

  @media ${Theme.media.mobile}{
    margin-bottom: 25px;
  }
`

const Text = styled.p`
  ${font({color: Theme.colors.text.primary, FMax: 20, FMin: 18, weight: 700})};
  padding: 0 10px;
  margin-bottom: 35px;

  @media ${Theme.media.mobile}{
    margin-bottom: 20px;
  }
`

const Link = styled.a<{active?: boolean}>`
  ${font({color: Theme.colors.text.primary, FMax: 18, FMin: 18})};
  border-bottom: 1px solid ${Theme.colors.text.accent};
  border-radius: 83px;
  padding: 5px 25px;

  &:hover {
    background-image: ${Theme.colors.accent};
    border-bottom: none;
  }

  ${props => props.active && css<{active?: boolean}>`
    background-image: ${Theme.colors.accent};
    border-bottom: none;
  `}
`

export const S = {
    Project,
    Title,
    Image,
    Text,
    Link
}