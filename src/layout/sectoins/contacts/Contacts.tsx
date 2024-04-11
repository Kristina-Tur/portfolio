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
import {font} from '../../../styles/Common';

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <FlexWrapper flexDirection={'column'} alignItems={'center'}>
                    <Wrapper>
                        <WrapperForm>
                            <Text>Get in touch with me</Text>
                            <StyledForm>
                                <Field placeholder={'Name'}/>
                                <Field type={'email'} placeholder={'E-mail'}/>
                                <Field type={'tel'} placeholder={'Phone'}/>
                                <Field as={'textarea'} placeholder={'Massage'}/>
                                <Button type={'submit'}>{'Send'}</Button>
                            </StyledForm>
                        </WrapperForm>
                        <FlexWrapper flexDirection={'column'} justifyContent={'center'} rowGap={'50px'}>
                            <WrapperContact>
                            <Contact src={location} title={'Location'} text={'Brest/Belarus'}/>
                            <Contact src={tel} title={'Phone'} text={'+375292400937'}/>
                            <Contact src={email} title={'Email'} text={'kristina.tur06121955@gmail.com'}/>
                            </WrapperContact>
                        </FlexWrapper>
                    </Wrapper>
                    <SocialList>
                        <Social iconId={'instagram'} width={'30'} height={'30'} viewBox={'0 0 24 24'}/>
                        <Social iconId={'telegram'} width={'30'} height={'30'} viewBox={'0 5 45 45'}/>
                        <Social iconId={'linkedin'} width={'30'} height={'30'} viewBox={'0 0 24 24'}/>
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

  @media ${Theme.media.tablet}{
    max-width: 590px;
    flex-direction: column;
  }
`

const WrapperForm = styled.div`
  @media ${Theme.media.tablet}{
    margin-bottom: 50px;
  }
`

const Text = styled.p`
  ${font({color: Theme.colors.text.secondary, FMax: 36, FMin: 20, weight: 500})};
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
  ${font({color: Theme.colors.text.secondary, FMax: 18, FMin: 18, weight: 400})};
  font-family: 'Roboto', sans-serif;
  border-radius: 20px;
  background-color: ${Theme.colors.neutral};
  padding: 18px 20px;
  border: none;

  &:focus-visible {
    outline: 1px solid ${Theme.colors.text.neutral};
  }
`

const Button = styled.button`
  ${font({color: Theme.colors.text.primary, FMax: 20, FMin: 20})};
  border-radius: 83px;
  background-image: ${Theme.colors.accent};
  padding: 15px 65px;
  cursor: pointer;
`

const WrapperContact = styled.div`
  @media ${Theme.media.tablet}{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 80px;
    row-gap: 50px;
  }
`

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 15px;
`



