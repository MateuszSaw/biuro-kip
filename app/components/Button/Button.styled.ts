import styled from 'styled-components'

const StyledButton = styled.button`
  text-decoration: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 24px;
  color: #fff;
  background-color: #417ec9;
  box-shadow: 0 3px 12px 0 rgba(11, 96, 168, 0.3);
  border-radius: 80px;
  transition: all 300ms ease;

  &:hover {
    background-color: #0b60a8;
    box-shadow: 0 4px 10px 0 rgba(11, 96, 168, 0.4);
  }
`

export { StyledButton }
