import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../component/SectionTitle';
import {FlexWrapper} from '../../../component/FlexWrapper';
import {Button} from '../../../component/Button';
import {Contact} from './Contact';
import {Icon} from '../../../component/icon/icon';
import {Container} from '../../../component/Container';
import {Theme} from '../../../styles/Theme';
import ins from './../../../assets/images/svg/instagram.svg'

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <Wrapper>
                    <div>
                        <Text>Get in touch with me</Text>
                        <StyledForm>
                            <Field placeholder={'Name'}/>
                            <Field type={'email'} placeholder={'E-mail'}/>
                            <Field type={'tel'} placeholder={'Phone'}/>
                            <Field as={'textarea'} placeholder={'Massage'}/>
                            <Button type={'submit'} maxWidth={'100px'}>{'Send'}</Button>
                        </StyledForm>
                    </div>
                    <StyledMyContact>
                        <Contact title={'Location'} text={'Brest/Belarus'}/>
                        <Contact title={'Phone'} text={'+375292400937'}/>
                        <Contact title={'Email'} text={'kristina.tur06121955@gmail.com'}/>
                    </StyledMyContact>
                </Wrapper>
                <Social>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Img src={ins}/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                </Social>

            </Container>
        </StyledContacts>
    );
};
const Img = styled.img`
  max-width: 28px;
  width: 100%;
  margin-left: 15px;
`
const StyledContacts = styled.section`
    margin: 0 auto;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${Theme.colors.secondaryBg};
  border-radius: 80px;
  max-width: 940px;
  width: 100%;
  padding: 55px 55px;
  margin-bottom: 65px;
`
const Text = styled.p`
  color: ${Theme.colors.text.secondary};
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 25px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  min-width: 430px;
  width: 100%;

  textarea {
    resize: none;
    height: 140px;
  }
`

const Field = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  border-radius: 20px;
  background-color: ${Theme.colors.neutral};
  padding: 24px 20px;
  border: none;

  color: ${Theme.colors.text.secondary};

  &:focus-visible {
    outline: 1px solid ${Theme.colors.text.neutral};
  }
`

const StyledMyContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`
const Social = styled.div`

`
const SocialList = styled.ul`
  display: flex;
  justify-content: center;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`



