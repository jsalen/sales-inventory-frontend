import styled from 'styled-components'

export const ModalContainer = styled.article`
  width: 320px;
  height: auto;
  padding: 16px;
  display: grid;
  align-items: center;
  grid-template-rows: 30px 1fr 45px;
  grid-gap: 16px;
  background: #f8f7ff;
  text-align: center;

  & h1 {
    font-size: 18px;
    font-weight: 700;
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
`
