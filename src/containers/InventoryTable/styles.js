import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

const VARIANT = {
  primary: '#9381FF',
  success: 'rgba(17, 158, 11, 0.8)',
  warning: 'rgba(219, 43, 18, 0.8)',
}

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2);
`

export const TableHead = styled.thead`
  position: sticky;
  top: 0;
  height: 50px;
  background-color: #f8f7ff;
  font-weight: 700;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
  z-index: 2;
`

export const TableBody = styled.tbody`
  width: 100%;
  height: auto;
  font-weight: 400;
`

export const TableRow = styled.tr`
  width: 100%;
  height: 45px;
  color: #2e265e;
  transition: all 0.25s ease;

  &:nth-child(even) {
    background: #f8f7ff;
  }

  &:hover {
    background-color: #bab5df;
    color: #f8f7ff;
  }
`

export const TableCell = styled.td`
  width: ${(props) => (props.lg ? '50%' : '16.6%')};
  padding-left: ${(props) => (props.lg ? '20px' : 0)};
  text-align: ${(props) => (props.center ? 'center' : 'left')};
`
export const TableActions = styled.td`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const Button = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => VARIANT[props.variant] || VARIANT.warning};
  cursor: pointer;
  user-select: none;
  border: 1px solid #7863a6;

  &:hover {
    background-color: ${(props) => VARIANT[props.variant] || VARIANT.warning};
    color: #f8f7ff;
    border: 0;
  }
`

export const Tooltip = styled.span`
  position: absolute;
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
