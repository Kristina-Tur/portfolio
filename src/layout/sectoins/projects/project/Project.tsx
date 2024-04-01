import React from 'react';
import styled from 'styled-components';
import {Theme} from '../../../../styles/Theme';

type ProjectPropsTitle = {
    src: string
    title: string
    text: string
}

export const Project = (props: ProjectPropsTitle) => {
    return (
        <StyledProject>
            {/*<StyledProject2>*/}
                <Image src={props.src} alt={'Project'}/>
                {/*<Title>{props.title}</Title>*/}
                <Text>{props.text}</Text>
                <Link href={'#'}>View project</Link>
            {/*</StyledProject2>
            <StyledProject3></StyledProject3>*/}
        </StyledProject>
    );
};

const StyledProject = styled.div`
  /*background: rgba(52, 53, 73, 0);
  border: 1px solid hsla(0, 0%, 100%, .18);
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgb(31 38 135/66%);
  height: 200px;
  margin: 10px;
  overflow: hidden;
  position: relative;
  width: 300px;*/

  max-width: 500px;
  width: 100%;
  margin-bottom: 50px;
  border: 1px solid ${Theme.colors.neutral};
  border-radius: 50px 0 50px 0;
  padding: 25px 25px 45px;
  text-align: center;
`

/*const StyledProject2 = styled.div`
  /!**!/

  backface-visibility: hidden;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform: perspective(600px) rotateY(0deg);
  transition: transform .6s linear, -webkit-transform .6s linear;
  width: 100%;
`*/

const Image = styled.img`
  /*background-position: 50%;
  background-size: cover;
  height: 100%;
  opacity: .7;
  overflow: hidden;
  vertical-align: middle;
  width: 100%;*/
  
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 24px 8px 8px 8px;
  margin-bottom: 40px;
`

const Title = styled.h3`
  color: ${Theme.colors.text.primary};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 70px;
`

const Text = styled.p`
  color: ${Theme.colors.text.primary};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 50px;
`

const Link = styled.a`
  color: ${Theme.colors.text.primary};
  font-size: 20px;
  font-weight: 600;
  border-radius: 83px;
  background-image: ${Theme.colors.accent};
  padding: 15px 65px;
`

/*
const StyledProject3 = styled.div`
  align-items: center;
  backface-visibility: hidden;
  background: rgba(115, 201, 236, .4);
  border: 2px solid #73c9ec;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  overflow: hidden;
  position: absolute;
  transform: perspective(600px) rotateY(180deg);
  transition: transform .6s linear, -webkit-transform .6s linear;
  width: 100%;
`*/
