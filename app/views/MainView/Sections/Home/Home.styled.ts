import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  color: white;
  font-weight: 500;
  font-size: 21px;

  ${({ theme }) => `
    @media (${theme.breakpoints.tablet}) {
      font-size: 16px;
    }
    @media (${theme.breakpoints.mobile}) {
      font-size: 14px;
    }
  `}
`

const StyledHeader = styled.div`
  font-weight: 600;
  font-size: 72px;
  padding-top: 120px;

  ${({ theme }) => `
    @media (${theme.breakpoints.tabletVertical}) {
      font-size: 54px;
    }

    @media (${theme.breakpoints.tablet}) {
      font-size: 42px;
      padding-top: 40px;
    }

    @media (${theme.breakpoints.mobile}) {
      font-size: 38px;
      text-align: center;
    }
  `}
`

const StyledSubtitle = styled.div`
  max-width: 900px;
  padding-bottom: 50px;

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }

  ${({ theme }) => `
    
    @media (${theme.breakpoints.tablet}) {
      max-width: 600px;
    }

    @media (${theme.breakpoints.mobile}) {
      max-width: unset;
      padding-bottom: 18px;

    }
  `}

  p {
    font-size: 24px;
    font-weight: 600;
    padding: 20px 0 60px;

    ${({ theme }) => `
      @media (${theme.breakpoints.tabletVertical}) {
        padding: 8px 0 30px;
      }

      @media (${theme.breakpoints.tablet}) {
        font-size: 20px;
        padding: 20px 0 40px;
      }
      @media (${theme.breakpoints.mobile}) {
        font-size: 16px;
        padding: 8px 0 12px;
      }
  `}
  }
`
const StyledFooterInfo = styled.div`
  margin-top: auto;
  align-self: center;
  padding-bottom: 40px;
`

export { StyledHeader, StyledWrapper, StyledSubtitle, StyledFooterInfo }
