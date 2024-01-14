import styled from 'styled-components'

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const StyledHeader = styled.header`
  text-align: center;

  p {
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 32px;
  }
`

const StyledBoxContent = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { StyledWrapper, StyledBoxContent, StyledHeader }
