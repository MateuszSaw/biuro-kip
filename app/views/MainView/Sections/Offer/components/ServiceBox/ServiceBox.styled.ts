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
  height: 550px;
  width: 450px;
  background-image: url(${({ $bgImageUrl }) => $bgImageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 24px;
  background-color: white;

  svg {
    fill: ${({ $fill }) => $fill};
  }

  ${({ $scaleUp }) =>
    $scaleUp
      ? `
        height: 585px;
        width: 500px;
        z-index: 1;
       `
      : ''}

  ${({ theme }) => `
    @media (${theme.breakpoints.laptopSmall}) {
      height: 500px;
      width: 380px;    
    }

    @media (${theme.breakpoints.tabletVertical}) {
      height: 500px;
      width: 300px; 
      padding: 20px 12px;
    }

    @media (${theme.breakpoints.tablet}) {
      width: unset;
      height: unset;
      background-image: unset;
      padding: unset;
      margin-bottom: 20px;
    }
  `};
`

const StyledHeader = styled.div<{ $rgbColorValue: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${({ theme, $rgbColorValue }) => `
      @media (${theme.breakpoints.tablet}) {
        background-color: rgb(${$rgbColorValue});
        border-radius: 24px;
        justify-content: unset;
        align-items: center;
        padding: 0px 14px;
      }
    `}
`

const StyledTitle = styled.div`
  width: 50%;
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  padding-bottom: 42px;
  color: white;

  ${({ theme }) => `
      @media (${theme.breakpoints.tabletVertical}) {
        font-size: 24px;  
      }

      @media (${theme.breakpoints.tablet}) {
        padding-bottom: unset;
        width: unset;
        order: 1;
      }
      @media (${theme.breakpoints.mobile}) {
        font-size: 20px;
      }
    `}
`
const StyledIcon = styled.div`
  svg {
    margin-right: 14px;
    width: 50%;
    width: 80px;
    height: 80px;
    ${({ theme }) => `
      @media (${theme.breakpoints.tabletVertical}) and (min-width: 950px) {
        width: 60px;
        height: 60px;
      }

      @media (${theme.breakpoints.tablet}) {
        margin: 6px 14px 0 20px;
        width: 50px;
        height: 50px;
        order: 2;
      }

      @media (${theme.breakpoints.mobile}) {
        margin: 4px 14px 0 8px;
        width: 32px;
        height: 32px;

      }
    `}
  }
`
const StyledExpandButton = styled.div<{ $openMobileList: boolean }>`
  display: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: 4px;

  ${({ theme, $openMobileList }) => `
    color: ${theme.colors.white};
    svg {
      width: 28px;
      height: 28px;
      fill: ${theme.colors.white};
    }

    @media (${theme.breakpoints.tablet}) {
     margin-left: auto;
      order: 2;
      display: flex;
      align-items: center;

      svg {
        transition: transform 0.3s ease-in-out;
        transform: ${$openMobileList ? 'rotate(180deg)' : 'rotate(0deg)'};
      }
    }

    @media (${theme.breakpoints.mobile}) {
      span {
        display: none;
      }
    }
  `}
`

const StyledList = styled.div<{ $openMobileList: boolean }>`
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

  ${({ theme, $openMobileList }) => `
      @media (${theme.breakpoints.tabletVertical}) and (min-width: 950px) {
        font-size: 14px;
      }
      
      @media (${theme.breakpoints.tablet}) {
        padding: unset;
        transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out;
        opacity: ${$openMobileList ? '1' : '0'};
        height: ${$openMobileList ? '100%' : '0'};
      & > :first-child {
          padding-top: 20px;
        }
      }
    `}
`

const StyledItem = styled.div`
  display: flex;
  padding-bottom: 8px;
  ${({ theme }) => `
    @media (${theme.breakpoints.tablet}) {
      padding: 4px 20px;
    }
  `}
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

  ${({ theme }) => `
      @media (${theme.breakpoints.tabletVertical}) and (min-width: 950px) {
        font-size: 14px;
        padding: 10px 18px;
      }

       @media (${theme.breakpoints.tablet}) {
        display: none;
      }
    `}
`

export {
  StyledTitle,
  StyledIcon,
  StyledList,
  StyledItem,
  StyledBox,
  StyledHeader,
  StyledButton,
  StyledExpandButton,
}
