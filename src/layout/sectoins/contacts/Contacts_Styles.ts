import styled from 'styled-components';
import {Theme} from '../../../styles/Theme';
import {font} from '../../../styles/Common';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${Theme.colors.secondary};
  border-radius: 80px;
  max-width: 940px;
  width: 100%;
  padding: 55px 55px;
  margin-bottom: 65px;

  @media ${Theme.media.tablet} {
    max-width: 590px;
    flex-direction: column;
    margin-top: -20px;
  }

  @media ${Theme.media.mobile} {
    padding: 30px 30px;
    border-radius: 50px;
  }
`

const WrapperForm = styled.div`
  @media ${Theme.media.tablet} {
    margin-bottom: 50px;
  }
`

const Text = styled.p`
  ${font({color: Theme.colors.text.secondary, FMax: 36, FMin: 25, weight: 500})};
  margin-bottom: 25px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  min-width: 430px;
  width: 100%;

  textarea {
    resize: none;
    height: 140px;
  }

  @media ${Theme.media.mobile}{
    min-width: 250px
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

const WrapperContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 50px;
  
  @media ${Theme.media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    column-gap: 80px;
    row-gap: 40px;
  }
`

const WrapperSocialContacts = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 30px;
`

export const S = {
    Wrapper,
    WrapperForm,
    Text,
    Form,
    Field,
    Button,
    WrapperContacts,
    WrapperSocialContacts
}