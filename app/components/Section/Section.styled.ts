import styled from 'styled-components'

const StyledSection = styled.section<{ $backgroundColor?: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor || theme.colors.white};
`

const StyledWrapper = styled.div`
  width: ${({ theme }) => theme.sectionWidth};
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 92px 0 24px 0;

  ${({ theme }) => `
    @media (${theme.breakpoints.laptop}) {
      width: 100%;
      padding: 92px 12px 24px 12px;
    }

    @media (${theme.breakpoints.tabletVertical}) {
      height: unset;
      min-height: unset;
      padding: 70px 12px 32px 12px;
    }

    @media (${theme.breakpoints.tablet}) {
      padding: 24px 12px;

    }
  `}
`

export { StyledSection, StyledWrapper }
