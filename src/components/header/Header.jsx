import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import { Link } from 'react-router-dom'
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
                <Link
                  className={pathname === '/artigos' ? 'active' : ''}
                  to="/artigos"
                >
                  artigos
                </Link>
              </li>
              <li>
                <Link
                  className={pathname === '/contato' ? 'active' : ''}
                  to="/contato"
                >
                  contato
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
