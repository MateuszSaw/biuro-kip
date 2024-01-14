import styled from 'styled-components'

const StyledBox = styled.div<{
  $bgImageUrl: string
  $fill: string
  $scaleUp?: boolean
}>`
  padding: 28px;
  box-shadow: 0px 0px 14px 2px rgba(191, 191, 191, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 550px;
  max-width: 450px;
  background-image: url(${({ $bgImageUrl }) => $bgImageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 24px;

  svg {
    fill: ${({ $fill }) => $fill};
  }

  ${({ $scaleUp }) =>
    $scaleUp
      ? `
      transform: scale(1.08);
      z-index: 1;
    background-color: white;
  `
      : ''}
`
const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > :first-child {
    width: 50%;
    font-size: 32px;
    font-weight: 600;
    margin: 0;
    padding-bottom: 42px;
    color: white;
  }

  & > :last-child {
    width: 50%;
    width: 80px;
    height: 80px;
  }
`

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 16px;
  padding: 28px 0 14px;
  overflow: hidden;

  svg {
    min-width: 18px;
    min-height: 28px;
    max-width: 18px;
    max-height: 28px;
    margin-right: 8px;
  }
`

const StyledItem = styled.div`
  display: flex;
  padding-bottom: 8px;
`

const StyledButton = styled.button<{
  $rgbColorValues: string
  $secondaryColor: string
}>`
  margin-top: 14px;
  text-decoration: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 24px;
  border: 1px solid transparent;

  border-radius: 80px;
  transition: all 300ms ease;

  ${({ theme, $rgbColorValues, $secondaryColor }) => `
    color: ${theme.colors.white};
    background-color: rgb(${$rgbColorValues});
    box-shadow: 0 3px 12px 0 rgba(${$rgbColorValues}, 0.3);

    &:hover {
      background-color: rgba(${$rgbColorValues}, 0.6);
      border: 1px solid ${$secondaryColor};
    }
  `}
`

export { StyledList, StyledItem, StyledBox, StyledHeader, StyledButton }
