import Layout from 'components/Layout'
import { FunctionComponent } from 'react'
import WhyChooseUs from './Sections/WhyChooseUs'
import Offer from './Sections/Offer/Offer'
import Home from './Sections/Home'
import Contact from './Sections/Contact'
import Company from './Sections/Company'

const MainView: FunctionComponent = () => (
  <Layout>
    <Home />
    <WhyChooseUs />
    <Company />
    <Offer />
    <Contact />
  </Layout>
)

export default MainView
