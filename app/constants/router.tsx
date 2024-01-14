import { createBrowserRouter } from 'react-router-dom'
import Paths from './Paths'
import MainView from 'views/MainView'

const router = createBrowserRouter([
  {
    path: Paths.Home,
    element: <MainView />,
  },
])

export default router
