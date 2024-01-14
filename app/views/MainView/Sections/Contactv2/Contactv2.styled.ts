import styled from 'styled-components'

const MainContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-image: url('app/statics/images/contact.png');
  background-size: cover;
  background-position: center;
  position: relative;
`
// Komponent do przyciemnienia tła
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.6); Kolor tła z efektem przyciemnienia */
  background-color: rgba(
    8,
    85,
    150,
    0.5
  ); /* Kolor #085596 z zachowaniem opacity */
`
const StyledContent = styled.div`
  z-index: 1;
  width: ${({ theme }) => theme.sectionWidth};
  height: ${({ theme }) => theme.sectionHeight};
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  font-size: 21px;
  font-weight: 500;
`

const StyledBox = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  align-self: center;
  text-align: center;
  border-radius: 4px;
  padding: 24px;
`

const StyledHeader = styled.header`
  font-size: 42px;
  font-weight: 600;

  span {
    color: #5776fa;
  }
`

const StyledContactInfo = styled.div`
  margin-top: 125px;
  display: flex;
  width: 100%;
  justify-content: center;

  /* div { */
  a {
    min-width: 270px;
    padding: 0 92px;
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      width: 100px;
      height: 100px;
      fill: #5776fa;
    }
  }
  /* } */
`

export {
  MainContainer,
  StyledContent,
  StyledHeader,
  StyledBox,
  StyledContactInfo,
  Overlay,
}
