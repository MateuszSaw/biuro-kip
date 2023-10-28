import { FunctionComponent } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import router from 'constants/router'
import theme from 'constants/theme'
import GlobalStyle from 'common/GlobalStyle'

const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>
)

export default App
