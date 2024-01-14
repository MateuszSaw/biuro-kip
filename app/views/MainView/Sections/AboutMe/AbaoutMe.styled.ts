import theme from 'constants/theme'
import styled from 'styled-components'

const StyledBackground = styled.section`
  width: 100%;
  background-color: white;
  height: 100vh;
`

const StyledWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: ${({ theme }) => theme.sectionWidth};
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  padding-top: 140px;
`

const StyledPhoto = styled.div`
  background-image: url('app/statics/images/aboutMe.jpg');
  width: 500px;
  height: 600px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`

const StyledDescription = styled.div`
  max-width: 800px;
`

const StyledTag = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 16px;
  font-weight: 600;
`

const StyledHeader = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: ${theme.colors.darkBlue};
`

const StyledText = styled.p`
  font-weight: 16px;
`

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 8px;
`

const StyledItem = styled.div`
  font-size: 18px;
  display: flex;
  height: 18px;
  width: 100%;
  height: 100%;

  svg {
    fill: ${({ theme }) => theme.colors.darkBlue};
    min-width: 18px;
    min-height: 28px;
    max-width: 18px;
    max-height: 28px;
    margin-right: 6px;
  }
`

export {
  StyledBackground,
  StyledWrapper,
  StyledDescription,
  StyledTag,
  StyledPhoto,
  StyledText,
  StyledHeader,
  StyledList,
  StyledItem,
}
