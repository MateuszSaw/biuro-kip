import styled from 'styled-components'

const StyledHeader = styled.header`
  padding-bottom: 16px;
  font-size: 42px;
  font-weight: 600;

  & > span {
    color: #226fb0;
  }

  ${({ theme }) => `
    @media (${theme.breakpoints.tabletVertical}) {
      font-size: 38px;
    }
  `}
`

const StyledSubtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 32px;
`

export { StyledHeader, StyledSubtitle }
