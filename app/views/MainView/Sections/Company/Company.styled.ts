import styled from 'styled-components'

const StyledWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  height: 100%;

  & > :first-child,
  & > :last-child {
    width: 600px;
  }

  & > div {
    margin: 0 8px;
  }
`

const StyledPhoto = styled.div<{ $imageLink: string }>`
  background-image: url(${({ $imageLink }) => $imageLink});
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 24px;

  /* width: 355px;
  height: 480px;
  background-image: url(${({ $imageLink }) => $imageLink});
  background-size: cover;
  background-position: center;
  position: absolute;
  transition: transform 0.3s ease;
  border-radius: 24px; */

  /* &:hover {
    transform: scale(1.1);
    z-index: 10;
  }

  &:nth-child(1) {
    left: 0;
    top: 0;
    z-index: 1;
    opacity: 0.7; 
  }

  &:nth-child(2) {
    left: 150px; 
    top: 20px;
    z-index: 3;
    width: 500px;
    height: 600px;
  }

  &:nth-child(3) {
    left: 300px; 
    top: 40px;
    z-index: 2;
    opacity: 0.7; 
  } */
`

const StyledContent = styled.div`
  text-align: center;
  width: 60%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 600;
  }

  p {
    /* font-size: 16px; */
  }

  header {
    text-align: center;
  }
`
const StyledTag = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin-top: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
`

const StyledHeader = styled.p`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkBlue};
`

export { StyledWrapper, StyledPhoto, StyledContent, StyledTag, StyledHeader }
