import Footer from 'components/Footer'
import ScrollToTop from 'components/ScrollToTop'
import Topbar from 'components/Topbar'
import { FunctionComponent, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout: FunctionComponent<Props> = ({ children }) => (
  <>
    <div id="homePage">
      <Topbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  </>
)

export default Layout
