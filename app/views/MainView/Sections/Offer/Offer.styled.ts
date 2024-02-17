import styled from 'styled-components'

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > :first-child {
    text-align: center;
  }
`

const StyledSubtitle = styled.header`
  text-align: center;

  p {
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 14px;
    ${({ theme }) => `
      @media (${theme.breakpoints.tabletVertical}) {
        font-size: 16px;
      }
    `}
  }
`

const StyledBoxContent = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => `
      @media (${theme.breakpoints.tablet}) {
        flex-direction: column;
      }
  `}
`

export { StyledWrapper, StyledBoxContent, StyledSubtitle }
