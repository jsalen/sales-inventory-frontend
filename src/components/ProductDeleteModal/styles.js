import styled from 'styled-components'

export const ModalContainer = styled.article`
  width: 320px;
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

  & p {
    text-align: center;
  }

  & footer {
    display: flex;
    justify-content: space-around;
  }
`

export const ModalButton = styled.button`
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
