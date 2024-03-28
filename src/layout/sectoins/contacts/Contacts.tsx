import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../component/SectionTitle';
import {FlexWrapper} from '../../../component/FlexWrapper';
import {Button} from '../../../component/Button';
import {Contact} from './Contact';
import {Icon} from '../../../component/icon/icon';

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <FlexWrapper justifyContent={'space-around'}>
                <StyledForm>
                    <Text>Get in touch with me</Text>
                    <Field placeholder={'Name'}/>
                    <Field type={'email'} placeholder={'E-mail'}/>
                    <Field type={'tel'} placeholder={'Phone'}/>
                    <Field as={'textarea'}/>
                    <Button type={'submit'}>{'Send'}</Button>
                </StyledForm>
                <StyledMyContact>
                    <Contact title={'Location'} text={'Brest/Belarus'}/>
                    <Contact title={'Phone'} text={'+375292400937'}/>
                    <Contact title={'Email'} text={'kristina.tur06121955@gmail.com'}/>
                </StyledMyContact>
            </FlexWrapper>
            <Social>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'instagram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'js'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'js'}/>
                        </SocialLink>
                    </SocialItem>

                </SocialList>
            </Social>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`

`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 430px;
  width: 100%;
`
const Text = styled.h3`

`
const Field = styled.input`

`

const StyledMyContact = styled.div`

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



