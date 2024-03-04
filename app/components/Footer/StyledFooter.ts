import styled from 'styled-components'

const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -60px;
  z-index: 3;
  ${({ theme }) => `
    @media (${theme.breakpoints.tabletVertical}) {
      // position: unset;
    }
  `}
`

const StyledButton = styled.button`
  text-decoration: none;
  border: none;
  padding: 8px;
  background: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 8px 0 20px;

  button {
    background-color: unset;
    border: unset;
  }

  svg {
    width: 40px;
    height: 40px;
  }
`

export { StyledFooter, StyledButton, StyledHeader }
