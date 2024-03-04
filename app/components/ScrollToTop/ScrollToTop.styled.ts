import styled from 'styled-components'

const StyledWrapper = styled.div<{ $ShouldBeVisible: boolean }>`
  display: none;
  position: fixed;
  bottom: 5%;
  right: 2%;
  z-index: 2;
  width: auto;
  align-items: flex-end;
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
  `}
`

export { StyledWrapper }
