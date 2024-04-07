import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../component/titles/SectionTitle';
import {FlexWrapper} from '../../../component/FlexWrapper';
import {Contact} from './Contact';
import {Container} from '../../../component/Container';
import {Theme} from '../../../styles/Theme';
import location from './../../../assets/images/svg/location.svg'
import tel from './../../../assets/images/svg/telephone.svg'
import email from './../../../assets/images/svg/email.svg'
import ins from './../../../assets/images/svg/instagram.svg'
import {Social} from '../../../component/social/Social';

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <FlexWrapper flexDirection={'column'} alignItems={'center'}>
                    <Wrapper>
                        <div>
                            <Text>Get in touch with me</Text>
                            <StyledForm>
                                <Field placeholder={'Name'}/>
                                <Field type={'email'} placeholder={'E-mail'}/>
                                <Field type={'tel'} placeholder={'Phone'}/>
                                <Field as={'textarea'} placeholder={'Massage'}/>
                                <Button type={'submit'}>{'Send'}</Button>
                            </StyledForm>
                        </div>
                        <FlexWrapper flexDirection={'column'} justifyContent={'center'} rowGap={'50px'}>
                            <Contact src={location} title={'Location'} text={'Brest/Belarus'}/>
                            <Contact src={tel} title={'Phone'} text={'+375292400937'}/>
                            <Contact src={email} title={'Email'} text={'kristina.tur06121955@gmail.com'}/>
                        </FlexWrapper>
                    </Wrapper>
                    <SocialList>
                        <Social iconId={'instagram'} width={'28'} height={'28'} viewBox={'0 0 2500 2500'}/>
                        <Social iconId={'telegram'} width={'28'} height={'28'} viewBox={'0 5 50 50'}/>
                        <Social iconId={'linkedin'} width={'28'} height={'28'} viewBox={'0 0 45 45'}/>
                    </SocialList>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${Theme.colors.secondary};
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
  padding: 18px 20px;
  border: none;
  color: ${Theme.colors.text.secondary};

  &:focus-visible {
    outline: 1px solid ${Theme.colors.text.neutral};
  }
`

const Button = styled.button`
  color: ${Theme.colors.text.primary};
  font-size: 20px;
  font-weight: 600;
  border-radius: 83px;
  background-image: ${Theme.colors.accent};
  padding: 15px 65px;
  cursor: pointer;
`

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
`



