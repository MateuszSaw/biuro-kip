import styled from 'styled-components'

const StyledWrapper = styled.div`
  margin: auto;
  margin: 20px;
  padding-right: 24px;
  overflow-y: auto;

  h2 {
    font-size: 20px;
  }
  p {
    margin-bottom: 10px;
  }
`

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`

const StyledItem = styled.li`
  &::before {
    content: '•';
    margin-right: 5px;
  }
`

export { StyledWrapper, StyledList, StyledItem }
