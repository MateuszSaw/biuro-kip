import styled from 'styled-components'

const StyledHeader = styled.div<{ $rgbColorValues: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  border-radius: 24px;

  P {
    font-size: 32px;
    font-weight: 600;
    margin: 0;
    color: white;
  }

  button {
    background-color: unset;
    border: unset;
    padding: 8px;
  }

  svg {
    width: 40px;
    height: 40px;
    fill: white;
  }

  ${({ theme, $rgbColorValues }) => `
    background-color: rgb(${$rgbColorValues});

    @media (${theme.breakpoints.tabletVertical}) {
        P {
          font-size: 24px;
        }

        svg {
          width: 32px;
          height: 32px;
        }
    }
  `}
`

const StyledList = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin: 12px;
  padding-top: 12px;
  overflow-y: auto;

  ${({ theme }) => `
    @media (${theme.breakpoints.tabletVertical}) {
      font-size: 14px;
    }
  `}
`

const StyledItem = styled.div<{ $secondaryColor: string }>`
  display: flex;
  padding-bottom: 18px;

  svg {
    min-width: 20px;
    min-height: 20px;
    width: 20px;
    height: 20px;
    margin: 4px 8px 0 0;
    fill: ${({ $secondaryColor }) => $secondaryColor};
  }
  ${({ theme }) => `
    @media (${theme.breakpoints.tabletVertical}) {
      padding-bottom: 8px;

      svg {
        margin: 2px 6px 0 0;
      }
    }
  `}
`

export { StyledHeader, StyledList, StyledItem }
