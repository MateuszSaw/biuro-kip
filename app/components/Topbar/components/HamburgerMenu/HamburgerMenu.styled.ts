import styled from 'styled-components'

const StyledButton = styled.div`
  display: none;

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    cursor: pointer;
  }
`

const StyledHamburgerLines = styled.div<{ $open: boolean }>`
  height: 26px;
  width: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    transition: transform 0.4s ease-in-out;

    &:nth-child(1) {
      transform-origin: 0% 0%;
      ${({ $open }) => $open && 'transform: rotate(45deg);'}
    }

    &:nth-child(2) {
      ${({ $open }) => $open && 'transform: scaleY(0);'}
    }

    &:nth-child(3) {
      transform-origin: 0% 100%;
      ${({ $open }) => $open && 'transform: rotate(-45deg);'}
    }
  }
`

export { StyledButton, StyledHamburgerLines }
