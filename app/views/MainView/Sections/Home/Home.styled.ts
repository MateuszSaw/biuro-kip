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

const StyledSubHeader = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 16px 0 32px;

  ${({ theme }) => `
      @media (${theme.breakpoints.tabletVertical}) {
        margin: 8px 0 30px;
      }

      @media (${theme.breakpoints.tablet}) {
        font-size: 20px;
        margin: 20px 0 40px;
      }
      @media (${theme.breakpoints.mobile}) {
        font-size: 16px;
        margin: 8px 0 12px;
      }
  `}
`
const StyledTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  span {
    max-width: 1100px;
    padding-bottom: 16px;

    ${({ theme }) => `
    @media (${theme.breakpoints.tablet}) {
      max-width: 600px;
    }

    @media (${theme.breakpoints.mobile}) {
      max-width: unset;
    }
  `}
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
    border-bottom: 1px solid white;
  }
`

const StyledFooterInfo = styled.div`
  margin-top: auto;
  align-self: center;
  margin: 40px 0;
`

export {
  StyledHeader,
  StyledSubHeader,
  StyledWrapper,
  StyledTextContainer,
  StyledFooterInfo,
}
