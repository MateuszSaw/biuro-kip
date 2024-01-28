import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  color: white;
  font-weight: 500;
  font-size: 21px;

  ${({ theme }) => `
    @media (${theme.breakpoints.tabletVertical}) {
      font-size: 18px;
    }

    @media (${theme.breakpoints.tablet}) {
      font-size: 16px;
    }

    @media (${theme.breakpoints.mobile}) {
      font-size: 15px;
    }
  `}
`

const StyledContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  & > :first-child {
    margin-top: 10%;
    font-weight: 600;
    font-size: 72px;

    ${({ theme }) => `
      @media (${theme.breakpoints.laptopSmall}) {
        font-size: 62px;
      }

      @media (${theme.breakpoints.tabletVertical}) {
        font-size: 52px;
        margin-top: 150px;
      }

      @media (${theme.breakpoints.tablet}) {
        font-size: 42px;
      }

     @media (${theme.breakpoints.mobile}) {
        text-align: center;
        font-size: 42px;
        margin-top: 100px;
      }
    `}
  }

  & > :nth-child(2) {
    margin-top: 4%;
    max-width: 800px;
    ${({ theme }) => `
        @media (${theme.breakpoints.tabletVertical}) {
          max-width: 700px;
          margin-top: 8%;
        }
        @media (${theme.breakpoints.tablet}) {
          margin-top: 12%;
        }
        @media (${theme.breakpoints.mobile}) {
          max-width: 100%;
          margin: 24px 0;
        }
      `}

    p {
      margin: 0;
      padding-bottom: 8px;
      font-size: 24px;
      font-weight: 600;

      ${({ theme }) => `
        @media (${theme.breakpoints.tabletVertical}) {
          font-size: 22px;
        }

        @media (${theme.breakpoints.tablet}) {
          font-size: 18px;
        }

        @media (${theme.breakpoints.mobile}) {
          font-size: 16px;
          padding-bottom: 18px;
        }
      `}
    }
  }

  & > :nth-child(3) {
    margin-top: 48px;
    max-width: 800px;
    ${({ theme }) => `
      @media (${theme.breakpoints.tabletVertical}) {
        max-width: 700px;
      }

      @media (${theme.breakpoints.tablet}) {
       
      }

      @media (${theme.breakpoints.mobile}) {
        max-width: 100%;
        margin-top: unset;
      }
    `}
  }
`

const StyledFooterInfo = styled.div`
  margin-bottom: 92px;
  /* align-self: center; */
  text-align: center;
  ${({ theme }) => `
      @media (${theme.breakpoints.mobile}) {
        margin: 24px 0;
      }
    `}
`

export { StyledWrapper, StyledContent, StyledFooterInfo }