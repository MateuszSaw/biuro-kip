import styled from 'styled-components'

const StyledHeaderContent = styled.div`
  align-self: center;
  text-align: center;
  width: 100%;
`

const StyledCardsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 450px);
  grid-template-rows: repeat(auto-fill, 300px);
  gap: 24px;
  justify-content: center;
  padding: 0 20px;

  ${({ theme }) => `
    @media (${theme.breakpoints.mobile}) {
      grid-template-columns: repeat(auto-fill, 390px);
      grid-template-rows: repeat(auto-fill, 350px);
    }
  `}

  & > div {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 12px;
    box-shadow: 12px 19px 24px -22px rgba(0, 0, 0, 1);

    svg {
      width: 64px;
      height: 64px;
      fill: #226fb0;
    }

    a {
      text-decoration: none;
      color: white;
      font-weight: 600;
    }

    li {
      text-align: left;
      padding-top: 4px;
    }

    p {
      margin: 24px 0;
      font-size: 18px;

      font-weight: bold;
    }

    span {
      margin: 24px 0;
    }

    & > div {
      padding-top: 24px;
      border-top: 1px solid #226fb0;

      font-size: 14px;
      text-align: center;
      line-height: 1.4;
    }
  }

  & > :nth-child(2),
  & > :nth-child(4),
  & > :nth-child(6) {
    background-color: #226fb0;
    color: ${({ theme }) => theme.colors.white};
    fill: ${({ theme }) => theme.colors.white};

    & > div {
      border-top: 1px solid ${({ theme }) => theme.colors.white};
    }

    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }

  & > :hover {
    svg {
      transition: transform 0.5s ease;
      transform: scale(1.5);
    }
  }
`

export { StyledHeaderContent, StyledCardsBox }
