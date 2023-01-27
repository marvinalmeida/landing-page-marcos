import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import { Wrapper } from './Header-styles'

const Header = () => {
  const { pathname } = window.location

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="logo">
            <ImportContactsIcon />
            <p>marcos</p>
          </div>

          <nav className="navegar">
            <ul>
              <li>
                <Link className={pathname === '/' ? 'active' : ''} to="/">
                  home
                </Link>
              </li>
              <li>
                <Link className={pathname === 'Sobre' ? 'active' : ''} to="#">
                  sobre
                </Link>
              </li>
              <li>
                <Link
                  className={pathname === '/artigos' ? 'active' : ''}
                  to="/artigos"
                >
                  artigos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </>
  )
}

export default Header
