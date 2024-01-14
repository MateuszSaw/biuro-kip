import styled from 'styled-components'

const MainContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-image: url('app/statics/images/footerWave.svg');
  background-size: cover;
  background-position: center;
  position: relative;
`

const StyledContent = styled.div`
  z-index: 1;
  width: ${({ theme }) => theme.sectionWidth};
  height: ${({ theme }) => theme.sectionHeight};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 21px;
  font-weight: 500;
  text-align: center;
`

const StyledHeader = styled.header`
  margin: 80px 0 24px;
  font-size: 42px;
  font-weight: 600;

  span {
    color: #5776fa;
  }
`

const StyledSubtitle = styled.span``

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
  StyledSubtitle,
  StyledContactInfo,
}
