import styled from 'styled-components'

const StyledSection = styled.section<{ $backgroundColor?: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor || theme.colors.white};
`

const StyledWrapper = styled.div`
  width: ${({ theme }) => theme.sectionWidth};
  height: 100vh;
  margin: 0 auto;
  padding: 92px 0 24px 0;

  ${({ theme }) => `
    @media (${theme.breakpoints.laptopSmall}) {
     width: 100%;
    }

    @media (${theme.breakpoints.tabletVertical}) {
      height: unset;
      padding: 60px 0 32px 0;
    }
  `}
`

export { StyledSection, StyledWrapper }
