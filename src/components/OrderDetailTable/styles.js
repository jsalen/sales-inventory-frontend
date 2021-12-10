import styled from 'styled-components'

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
    background: #b8b8ff;
  }

  &:hover {
    background-color: #bab5df;
    color: #f8f7ff;
  }
`

export const TableCell = styled.td`
  width: ${(props) => (props.lg ? '50%' : '16.6%')};
  padding-left: ${(props) => (props.lg ? '30px' : 0)};
  text-align: ${(props) => (props.center ? 'center' : 'left')};
`
