import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  span {
    font-weight: 600;
  }

  ${({ theme }) => `
    @media (${theme.breakpoints.laptop}) {
      font-size: 16px;
    }
    @media (${theme.breakpoints.laptopSmall}) {
      font-size: 14px; 
    }

    @media (${theme.breakpoints.mobile}) {
      p {
        margin: 6px 0;
      }
    }
  `}
`

export { StyledWrapper }
