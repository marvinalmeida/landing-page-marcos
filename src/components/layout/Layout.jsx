import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = ({ children }) => (
  <>
    <Header />
    {children} <Footer />
  </>
)

export default Layout
