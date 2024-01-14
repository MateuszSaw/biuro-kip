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

const StyledWrapper = styled.div<{ $bgImageUrl: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 95%;
  width: 80%;
  display: flex;
  flex-direction: column;
  z-index: 2100;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 255, 255);
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,
    rgba(0, 0, 0, 0.14) 0px 24px 38px 3px,
    rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;

  padding: 32px;
  border-radius: 24px;

  background-image: url(${({ $bgImageUrl }) => $bgImageUrl});
  background-size: cover;
  background-repeat: no-repeat;
`

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 55px;
  P {
    font-size: 32px;
    font-weight: 600;
    margin: 0;
    color: white;
  }

  button {
    background-color: unset;
    border: unset;
    padding: 8px;
  }

  svg {
    width: 40px;
    height: 40px;
    fill: white;
  }
`

const StyledList = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  font-size: 18px;
`

const StyledItem = styled.div<{ $secondaryColor: string }>`
  display: flex;
  padding-bottom: 18px;

  svg {
    min-width: 20px;
    min-height: 20px;
    width: 20px;
    height: 20px;
    margin: 4px 8px 0 0;
    fill: ${({ $secondaryColor }) => $secondaryColor};
  }
`

export { StyledModal, StyledWrapper, StyledHeader, StyledList, StyledItem }
