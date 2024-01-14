import Topbar from 'components/Topbar'
import { FunctionComponent, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout: FunctionComponent<Props> = ({ children }) => (
  <div id="homePage">
    <Topbar />
    <main>{children}</main>
  </div>
)

export default Layout
