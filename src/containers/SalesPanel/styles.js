import styled from 'styled-components'

export const Aside = styled.aside`
  display: grid;
  max-height: calc(100vh - 45px);
  grid-template-rows: 60px 1fr 90px 65px;
  background-color: #f8f7ff;
  position: relative;
`

export const Title = styled.h2`
  text-align: center;
  padding-top: 16px;
`

export const Item = styled.li`
  width: 100%;
  min-height: 45px;
  display: grid;
  padding: 0 8px;
  grid-template-columns: 1fr 60px 20px;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s;
  user-select: none;

  &:hover {
    background-color: #b8b8ff;
    color: #f8f7ff;
  }
`

export const ListContainer = styled.section`
  width: 100%;
  overflow-y: scroll;
`

export const List = styled.ul`
  width: 100%;
  height: auto;
  padding-top: 6px;
`

export const Quantity = styled.p`
  width: 100%;
  text-align: center;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
`

export const Delete = styled.div`
  width: 20px;
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  color: #e61313;
  border-radius: 50%;

  &:hover {
    transform: scale(1.2);
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 55px;
  place-items: center;
`

export const Btn = styled.button`
  width: 80%;
  height: 45px;
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
    background: ${(props) => (props.primary ? '#9381FF' : '#f23546')};
  }
`

export const AmountContainer = styled.section`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
  border-top: 1px solid rgba(12, 12, 12, 0.1);
  box-shadow-top: 0 1px 4px 0 rgba(0, 0, 0, 0.4);
`

export const Amount = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 18px;

  & > p {
    font-weight: 300;
    margin-right: 8px;
  }

  & > span {
    width: 120px;
    padding: 8px;
    font-weight: 700;
    text-align: right;
    border: 1px solid #b8b8ff;
    border-radius: 4px;
  }
`
