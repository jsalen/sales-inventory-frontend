import styled from 'styled-components'

const VARIANT = {
  primary: '#09f',
  warning: 'rgba(219,43,18,0.8)',
  gray: '#888888',
}

const HEIGHT = {
  sm: '35px',
  md: '45px',
  lg: '55px',
}

export const Btn = styled.button`
  width: 100%;
  height: ${(props) => HEIGHT[props.hsize] || HEIGHT.md};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => VARIANT[props.variant] || VARIANT.primary};
  color: #f9f9f9;
  font-weight: 700;

  & svg {
    margin-left: 4px;
  }

  &:hover {
    cursor: pointer;
  }
`
