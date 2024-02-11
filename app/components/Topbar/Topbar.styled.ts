import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;

  ${({ theme }) => `
    background-color: ${theme.colors.white};
  `}
`

const StyledWrapper = styled.div`
  width: ${({ theme }) => theme.sectionWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;

  ${({ theme }) => `
    @media (${theme.breakpoints.laptopSmall}) {
      width: 100%;
      padding: 8px 24px;
    }

    @media (${theme.breakpoints.mobile}) {
      width: 100%;
      padding: 0px 12px;
    }
  `}
`

const StyledLogo = styled.a`
  background-image: url('/logo4.svg');
  width: 220px;
  height: 64px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  ${({ theme }) => `
    @media (${theme.breakpoints.tablet}) {
      &:hover {
        transform: unset;
      }
    }

    @media (${theme.breakpoints.mobile}) {
      width: 180px;
    }
  `}
`

const StyledNavigation = styled.nav<{ open?: boolean }>`
  display: flex;

  ${({ theme, open }) => `
    @media (${theme.breakpoints.tablet}) {
      display: ${open ? 'flex' : 'none'};
      flex-direction: column;
      align-items: center;
      position: fixed;
      top: 80px;
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
    font-size: 32px;
    margin: 24px 10px 0 10px;
  }
`

const StyledButton = styled.div`
  display: none;

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    cursor: pointer;
  }
`

const StyledIcon = styled.div`
  display: none;

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`

export {
  StyledHeader,
  StyledWrapper,
  StyledLogo,
  StyledNavigation,
  StyledLink,
  StyledButton,
  StyledIcon,
}
