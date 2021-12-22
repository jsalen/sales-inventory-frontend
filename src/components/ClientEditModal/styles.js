import styled from 'styled-components'

export const Container = styled.article`
  width: 340px;
  padding: 16px;
  display: grid;
  grid-template-rows: 38px 1fr 45px;
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
`

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-gap: 12px;
`

export const FormGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 65px 3fr;
  grid-gap: 8px;
  align-items: center;

  & label {
    text-align: right;
  }

  & textarea {
    border: 1px solid #cecece;
    border-radius: 4px;
    padding: 8px;
    caret-color: #9381ff;
    resize: none;

    &:focus {
      outline: 1px solid #b8b8ff;
    }
  }

  & input {
    height: 30px;
    border: 1px solid #cecece;
    border-radius: 4px;
    padding: 8px;
    caret-color: #9381ff;

    &:focus {
      outline: 1px solid #b8b8ff;
    }
  }
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: flex-end;
`

export const Button = styled.button`
  width: 130px;
  height: 35px;
  color: ${(props) => (props.primary ? '#2e265e' : '#f8f7ff')};
  background: ${(props) => (props.primary ? '#f8f7ff' : '#9381ff')};
  border: ${(props) => (props.primary ? '1px solid #9381ff' : '0')};
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? '#f8f7ff' : '#7365c8')};
  }
`
