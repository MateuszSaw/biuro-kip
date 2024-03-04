import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;

  ${({ theme }) => `
    background-color: ${theme.colors.white};

    @media (${theme.breakpoints.tablet}) {
      //  position: relative;
    }
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
    @media (${theme.breakpoints.laptop}) {
      width: 100%;
      padding: 8px 24px;
    }

    @media (${theme.breakpoints.mobile}) {
      width: 100%;
      padding: 8px 12px;
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
    @media (${theme.breakpoints.tabletVertical}) {
      height: 54px;
    }

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

export { StyledHeader, StyledWrapper, StyledLogo }
