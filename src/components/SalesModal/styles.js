import styled from 'styled-components'

export const Container = styled.section`
  width: 420px;
  height: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #f8f7ff;
  border-radius: 4px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

  & > header {
    width: 100%;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    border-bottom: 1px solid #cecece;
  }
`

export const Select = styled.select`
  width: 212px;
  padding: 8px;
  font-size: 15px;
  background: #f8f7ff;
  border: 1px solid #cecece;
  border-radius: 4px;
  color: #2e265e;
  cursor: pointer;

  &:focus {
    outline: 1px solid #b8b8ff;
  }
`

export const ClientSelect = styled.section`
  width: 212px;
  display: grid;
  grid-template-columns: 1fr 32px;
  align-items: center;
  grid-gap: 6px;

  & svg {
    color: #b8b8ff;
    cursor: pointer;
    border: 1px solid #b8b8ff;
    border-radius: 50%;
  }
`

export const AddClientBox = styled.article`
  position: relative;
  display: grid;
  place-items: center;
`

export const Tooltip = styled.span`
  position: absolute;
  width: 133px;
  bottom: 100%;
  z-index: 3;
  visibility: hidden;
  padding: 6px 12px;
  background: rgba(0, 0, 0, 0.6);
  color: #f8f7ff;
  text-align: center;
  font-weight: 700;
  border-radius: 4px;

  ${AddClientBox}:hover & {
    visibility: visible;
  }
`

export const Content = styled.main`
  width: 80%;
  height: auto;
  padding: 16px 0;
`

export const Section = styled.section`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;

  & > input {
    width: 110px;
    height: 24px;
    border: 0;
    border-bottom: 1px dashed #cecece;
    background: #f8f7ff;
    text-align: right;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }

    &:focus {
      border-bottom: 1px solid #b8b8ff;
      outline: 0;
    }

    &:invalid {
      border-bottom: 1px solid #f23546;
    }
  }
`

export const TotalBox = styled.section`
  width: 80%;
  padding: 16px;
  margin: 0 auto;
  border: 1px solid #cecece;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > article {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  & span {
    font-weight: 700;
  }
`

export const Footer = styled.footer`
  width: 80%;
  height: 35px;
  display: flex;
  justify-content: space-around;
`

export const Btn = styled.button`
  width: 40%;
  height: 40px;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: ${(props) => (props.primary ? '400' : '700')};
  color: ${(props) => (props.primary ? '#9381FF' : '#F8F7FF')};
  background: ${(props) => (props.primary ? '#F8F7FF' : '#f23546')};
  border: ${(props) => (props.primary ? '1px solid #b8b8ff' : '')};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.primary ? '#F8F7FF' : '#F8F7FF')};
    background: ${(props) => (props.primary ? '#9381FF' : '#eb0f23')};
  }

  &:disabled {
    border: 1px solid #919191;
    color: #919191;
    cursor: not-allowed;

    &:hover {
      background: none;
    }
  }
`
