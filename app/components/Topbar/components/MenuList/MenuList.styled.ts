import styled from 'styled-components'

const StyledNavigation = styled.nav<{ open?: boolean }>`
  display: flex;

  ${({ theme, open }) => `
    @media (${theme.breakpoints.tablet}) {
      display: ${open ? 'flex' : 'none'};
      flex-direction: column;
      align-items: center;
      position: fixed;
      top: 70px;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: ${theme.colors.white};
      padding-top: 20px;    
    }

    @media (${theme.breakpoints.mobile}) {
      top: 64px;
    }

  `}
`

const StyledLink = styled.a<{ $disabledOnDesktop?: boolean }>`
  display: ${({ $disabledOnDesktop }) =>
    $disabledOnDesktop ? 'none' : 'inline-block'};
  padding: 12px 22px;
  margin-left: 8px;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 40px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(74, 58, 255, 0);
  color: ${({ theme }) => theme.colors.primaryBlue};

  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    box-shadow: 0 2px 4px rgba(74, 58, 255, 0.11);
    border: 1px solid rgba(1, 76, 173, 0.5);
    background-color: rgba(1, 76, 173, 0.1);
  }

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    display: inline-block;
    font-size: 24px;
    margin: 18px 10px 0 10px;
  }
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
    margin: 8px 4px 0 10px;
  }
`
export { StyledNavigation, StyledLink }
