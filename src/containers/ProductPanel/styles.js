import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 55px;
`

export const FormContainer = styled.section`
  width: 100%;
  padding: 12px;
  background-color: #555555;

  & > form {
    width: 60%;
    margin: 0 auto;
  }
`

export const Footer = styled.footer`
  width: 100%;
  background-color: #555555;
`

export const CategoryList = styled.ul`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid #999999;

  & li {
    height: 55px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #444444;
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
