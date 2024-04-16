import {Theme} from '../../../styles/Theme';
import styled from 'styled-components';
import backgroundImageWebp from './../../../assets/images/map.webp'
import backgroundImagePng from './../../../assets/images/map.png'
import {font} from '../../../styles/Common';

const AboutMe = styled.section`
  background-image: image-set('${backgroundImageWebp}' type('image/webp'),
  '${backgroundImagePng}' type('image/png'));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;

  position: relative; //for animation of Particles
`

const Wrapper = styled.div`
  position: relative;
  z-index: 0;

  @media ${Theme.media.tablet}{
    display: flex;
    justify-content: center;
  }
`

const BlurWrapper = styled.div`
  max-width: 560px;
  width: 100%;
  min-height: 562px;
  border-radius: 100px 0;
  border: 2px solid ${Theme.colors.secondary};
  background-image: linear-gradient(147deg, rgba(255, 255, 255, 0.50) -6.76%, rgba(0, 71, 255, 0.05) 102.96%);
  backdrop-filter: blur(10px);

  position: absolute;
  z-index: -1;

  @media ${Theme.media.tablet}{
    max-width: 490px;
    min-height: 490px;
  }
`

const ContentWrapper = styled.div`
  max-width: 560px;
  width: 100%;
  border-radius: 100px 0;
  padding: 30px 40px 65px;
  
  @media ${Theme.media.tablet}{
    max-width: 490px;
  }
`

const WrapperIconList = styled.ul`
  display: flex;
  justify-content: flex-end;
  column-gap: 15px;
  margin-bottom: 20px;
`

const NameTitle = styled.h2`
  ${font({weight: 700, color: Theme.colors.text.secondary, FMax: 60, FMin: 34})};
`

const WrapperList = styled.ul`
  list-style-image: ${Theme.colors.accent};
  margin: 20px 20px 30px;
`

const ListItem = styled.li`
  ${font({weight: 400, color: Theme.colors.text.secondary, FMax: 20, FMin: 16})};
  padding-left: 15px;
  margin-bottom: 10px;
`

export const S = {
    AboutMe,
    Wrapper,
    BlurWrapper,
    ContentWrapper,
    WrapperIconList,
    NameTitle,
    WrapperList,
    ListItem
}