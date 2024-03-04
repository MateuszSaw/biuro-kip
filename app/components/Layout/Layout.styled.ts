import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: none;

  ${({ theme }) => `
      @media (${theme.breakpoints.tablet}) {
      display: block;
    }
  `}
`

export default StyledWrapper
