import { createBrowserRouter } from 'react-router-dom'
import Home from 'views/Home'
import Paths from './Paths'
import Contact from 'views/Contact'

const router = createBrowserRouter([
  {
    path: Paths.Home,
    element: <Home />,
  },
  {
    path: Paths.Contact,
    element: <Contact />,
  },
])

export default router
