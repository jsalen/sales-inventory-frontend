import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .react-datepicker-wrapper {
    width: auto;
  }

  & input {
    height: 25px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    border: 1px solid #f8f7ff;
  }
`

export const Button = styled.button`
  position: relative;
  width: 25px;
  height: 25px;
  display: grid;
  place-items: center;
  color: #f8f7ff;
  border-radius: 0 6px 6px 0;
  background: #b8b8ff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #b8b8ff;
    background: #f8f7ff;
  }
`

export const Tooltip = styled.span`
  position: absolute;
  width: auto;
  bottom: 100%;
  z-index: 3;
  visibility: hidden;
  padding: 6px 12px;
  background: rgba(0, 0, 0, 0.6);
  color: #f8f7ff;
  text-align: center;
  font-weight: 700;
  border-radius: 4px;

  ${Button}:hover & {
    visibility: visible;
  }
`
