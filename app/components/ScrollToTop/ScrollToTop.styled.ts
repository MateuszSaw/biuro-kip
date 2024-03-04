import styled from 'styled-components'

const StyledWrapper = styled.div<{ $ShouldBeVisible: boolean }>`
  display: none;
  position: fixed;
  bottom: 1%;
  right: 1%;
  z-index: 2;
  width: auto;
  align-items: flex-end;
  /* transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out; */
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;

  svg {
    width: 40px;
    height: 40px;
    fill: #004c99;
  }

  ${({ theme, $ShouldBeVisible }) => `
      @media (${theme.breakpoints.tablet}) {
      display: ${$ShouldBeVisible ? 'block' : 'none'}
    }

    background-color: ${theme.colors.lightGrey}};
    // opacity: ${$ShouldBeVisible ? '1' : '0'};
    // visibility: ${$ShouldBeVisible ? 'visible' : 'hidden'};
  `}
`

export { StyledWrapper }
