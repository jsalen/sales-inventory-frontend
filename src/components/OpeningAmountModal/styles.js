import styled from 'styled-components'

export const ModalContainer = styled.article`
  width: 320px;
  padding: 16px;
  display: grid;
  grid-template-rows: 38px 1fr;
  grid-gap: 16px;
  background: #f8f7ff;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);

  & h1 {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    border-bottom: 1px solid #cecece;
  }

  & p {
    text-align: center;
  }
`

export const ModalButton = styled.button`
  width: 130px;
  height: 35px;
  color: ${(props) => (props.primary ? '#2e265e' : '#f8f7ff')};
  background: ${(props) => (props.primary ? '#f8f7ff' : '#9381ff')};
  border: ${(props) => (props.primary ? '1px solid #9381ff' : '0')};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? '#f8f7ff' : '#7365c8')};
  }

  &:disabled {
    border: 1px solid #919191;
    color: #919191;
    cursor: not-allowed;
  }
`

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-gap: 18px;
`

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & label {
    width: 100%;
  }

  & input {
    width: 150px;
    height: 30px;
    border: 1px solid #cecece;
    border-radius: 4px;
    padding: 8px;
    caret-color: #9381ff;

    &:focus {
      outline: 1px solid #b8b8ff;
    }

    &:invalid {
      outline: 1px solid #f23546;
    }
  }
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
