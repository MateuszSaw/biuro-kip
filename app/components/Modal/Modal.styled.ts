import styled from 'styled-components'

const StyledModal = styled.dialog`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`

const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  max-height: 95%;
  display: flex;
  flex-direction: column;
  z-index: 2100;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 255, 255);
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,
    rgba(0, 0, 0, 0.14) 0px 24px 38px 3px,
    rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
  border-radius: 24px;

  ${({ theme }) => `
    @media (${theme.breakpoints.tabletVertical}) {
        width: 90%;
        max-height: 85%;
        top: 45%;
    }
  `}
`

export { StyledModal, StyledWrapper }
