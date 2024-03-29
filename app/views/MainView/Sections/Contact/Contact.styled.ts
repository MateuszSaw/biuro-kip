import styled from 'styled-components'

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: end;

  ${({ theme }) => `
    @media (${theme.breakpoints.tabletVertical}) {
      padding: 20px 0 60px 0;
      justify-content: center;
    }
  `}
`

const StyledBox = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 24px;
  padding: 44px;
  text-align: center;

  ${({ theme }) => `
    @media (${theme.breakpoints.tabletVertical}) {
      padding: 24px;
      margin: 32px;
    }

    @media (${theme.breakpoints.mobile}) {
      padding: 18px;
      margin: 14px 0px;
    }
  `}
`

const StyledContactItem = styled.a`
  text-decoration: none;
  margin: 4px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  color: black;
  font-weight: 600;

  svg {
    width: 60px;
    height: 60px;
    margin-right: 8px;
    fill: #226fb0;
  }

  ${({ theme }) => `
    @media (${theme.breakpoints.mobile}) {
      padding: 12px 6px;
      font-size: 16px;

      svg {
        width: 60px;
        height: 60px;
        margin-right: 8px;
      }
    }
  `}
`

export { StyledContent, StyledBox, StyledContactItem }
