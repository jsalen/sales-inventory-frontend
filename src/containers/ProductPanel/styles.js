import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 45px);
  display: grid;
  grid-template-rows: 60px 1fr 55px;
  background-color: #d1d1f1;
`

export const FormContainer = styled.section`
  width: 100%;
  padding: 12px;
  background-color: #b8b8ff;
  box-shadow: 1px 0 3px rgba(0, 0, 0, 0.3);

  & > form {
    width: 60%;
    margin: 0 auto;
  }
`

export const Footer = styled.footer`
  width: 100%;
  background-color: #b8b8ff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`

export const CategoryList = styled.ul`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    height: 55px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    font-weight: 16px;
    font-weight: 700;
    color: #f8f7ff;
    cursor: pointer;
    border-top: 2px solid transparent;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: #b8b8ff;
      border-top: 2px solid #9381ff;
    }
  }
`

export const ProductList = styled.section`
  width: 100%;
  padding: 12px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 12px;
  overflow-y: scroll;
`
