import styled from 'styled-components'

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: end;
`

const StyledBox = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 24px;
  padding: 56px 24px;
  text-align: center;
`

const StyledContactItem = styled.a`
  text-decoration: none;
  margin: 4px;
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  color: black;
  font-weight: 600;

  svg {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    fill: #226fb0;
  }
`

export { StyledContent, StyledBox, StyledContactItem }
