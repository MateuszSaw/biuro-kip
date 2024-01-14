import Layout from 'components/Layout'
import { FunctionComponent } from 'react'
import AboutMe from './Sections/AboutMe'
import WhyChooseUs from './Sections/WhyChooseUs'
import Offer from './Sections/Offer/Offer'
import Home from './Sections/Home'
import Contactv2 from './Sections/Contactv2'

const MainView: FunctionComponent = () => (
  <Layout>
    <Home />
    <WhyChooseUs />
    <AboutMe />
    <Offer />
    <Contactv2 />
  </Layout>
)

export default MainView
