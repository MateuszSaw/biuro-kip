import styled from 'styled-components'

const StyledHamburgerLines = styled.div<{ $isOpen: boolean }>`
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
      ${({ $isOpen }) => $isOpen && 'transform: rotate(45deg);'}
    }

    &:nth-child(2) {
      ${({ $isOpen }) => $isOpen && 'transform: scaleY(0);'}
    }

    &:nth-child(3) {
      transform-origin: 0% 100%;
      ${({ $isOpen }) => $isOpen && 'transform: rotate(-45deg);'}
    }
  }
`

export { StyledHamburgerLines }
