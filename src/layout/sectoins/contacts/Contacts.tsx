import React from 'react';
import {SectionTitle} from '../../../component/titles/SectionTitle';
import {FlexWrapper} from '../../../component/FlexWrapper';
import {Contact} from './components/contact/Contact';
import {Container} from '../../../component/Container';
import location from './../../../assets/images/svg/location.svg'
import tel from './../../../assets/images/svg/telephone.svg'
import email from './../../../assets/images/svg/email.svg'
import {DataSocialContacts} from './components/socialContacts/DataSocialContacts';
import {SocialContacts} from './components/socialContacts/SocialContacts';
import {S} from './Contacts_Styles'
import styled from 'styled-components';
import emailjs from '@emailjs/browser';


const DataContacts = [
    {
        src: location,
        title: 'Location',
        text: 'Brest/Belarus'
    },
    {
        src: tel,
        title: 'Phone',
        text: '+375292400937'
    },
    {
        src: email,
        title: 'Email',
        text: 'kristina.tur06121955@gmail.com'
    },

]
export const Contacts: React.FC = () => {
    /*const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current)return

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );*/
    return (
        <StyledContacts id={'contacts'}>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <FlexWrapper flexDirection={'column'} alignItems={'center'}>
                    <S.Wrapper>
                        <S.WrapperForm>
                            <S.Text>Get in touch with me</S.Text>
                            <S.Form>
                                <S.Field placeholder={'Name'}/>
                                <S.Field type={'email'} placeholder={'E-mail'}/>
                                <S.Field type={'tel'} placeholder={'Phone'}/>
                                <S.Field as={'textarea'} placeholder={'Massage'}/>
                                <S.Button type={'submit'}>{'Send'}</S.Button>
                            </S.Form>
                        </S.WrapperForm>
                        <S.WrapperContacts>
                            {DataContacts.map((d, index) => {
                                return <Contact key={index} src={d.src} title={d.title} text={d.text}/>
                            })}
                        </S.WrapperContacts>
                    </S.Wrapper>
                    <S.WrapperSocialContacts>
                        {DataSocialContacts.map((d, index) => {
                            return <SocialContacts key={index} iconId={d.iconId}/>
                        })}
                    </S.WrapperSocialContacts>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  position: relative; //for animation of Particles
`
