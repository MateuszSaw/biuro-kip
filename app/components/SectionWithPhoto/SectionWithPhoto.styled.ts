import styled from 'styled-components'

const StyledSection = styled.section<{ $imageLink: string }>`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${({ $imageLink }) => $imageLink});
  position: relative;

  ${({ theme }) => `
    @media (${theme.breakpoints.tablet}) {
      height: unset;
    }
  `}
`

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    8,
    85,
    150,
    0.5
  ); /* Kolor #085596 z zachowaniem opacity */
`

const StyledContent = styled.div`
  position: relative;
  z-index: 1;
  width: ${({ theme }) => theme.sectionWidth};
  height: 100%;
  margin: 0 auto;

  ${({ theme }) => `
    @media (${theme.breakpoints.laptopSmall}) {
      width: 100%;
      padding: 0 24px;
    }
  `}

  ${({ theme }) => `
    @media (${theme.breakpoints.mobile}) {
      padding: 0 12px;
    }
  `}
`

export { StyledSection, StyledOverlay, StyledContent }
