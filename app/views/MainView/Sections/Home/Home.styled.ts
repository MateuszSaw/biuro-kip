import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-image: url('app/statics/images/xyz.png');
  background-size: cover;
  background-position: center;
  position: relative;

  color: white;
  font-weight: 500;
  font-size: 21px;

  :last-child {
    margin-bottom: 48px;
    z-index: 1;
  }
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

// Komponent do tekstu
const Text = styled.div`
  z-index: 1;
  width: ${({ theme }) => theme.sectionWidth};
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  & > :first-child {
    margin-top: 10%;
    font-weight: 600;
    font-size: 72px;
  }

  & > :nth-child(2) {
    margin-top: 6%;
    max-width: 800px;
    p {
      margin: 0;
      padding-bottom: 8px;
      font-size: 24px;
      font-weight: 600;
    }
  }
  & > :nth-child(3) {
    margin-top: 48px;
    max-width: 800px;
  }
`

export { MainContainer, Overlay, Text }
