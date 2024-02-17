import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 650px 1fr;
  gap: 40px;
  justify-content: center;
  align-items: center;
  ${({ theme }) => `
    @media (${theme.breakpoints.laptop}) {
      grid-template-columns: 1fr 550px 1fr;
    }
    
    @media (max-width: 1380px) {
        grid-template-columns: 1fr 400px 1fr;
        gap: 20px;

    }
    @media (${theme.breakpoints.tabletVertical}) {
      grid-template-columns: 45% 50%;
      
      & > :last-child {
        display: none
      }
    }
    @media (${theme.breakpoints.tablet}) {
      display: flex;  
      flex-direction: column;
      & > :first-child {
        width: 400px;
        height: 500px;
      }
    }
    @media (${theme.breakpoints.mobile}) {
      & > :first-child {
        width: 350px;
        height: 450px;
      }
    }
  `}
`

const StyledPhoto = styled.div<{ $imageLink: string }>`
  background-image: url(${({ $imageLink }) => $imageLink});
  height: 800px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 24px;

  ${({ theme }) => `
    @media (${theme.breakpoints.laptop}) {
      height: 700px;
    }
    @media (${theme.breakpoints.tabletVertical}) {
      height: 600px;
    }
  `}
`

const StyledContent = styled.div`
  text-align: center;

  header {
    text-align: center;
  }

  ${({ theme }) => `
    @media (${theme.breakpoints.tablet}) {
      max-width: 770px;
    }
  `}
`

export { StyledWrapper, StyledPhoto, StyledContent }
