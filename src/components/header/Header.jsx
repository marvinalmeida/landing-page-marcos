import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import { Link } from 'react-router-dom'
import { Wrapper } from './Header-styles'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import SideBar from '../sideBar/SideBar'
const Header = () => {
  const { pathname } = window.location

  const isMobile = window.innerWidth < 768

  return (
    <>
      <Wrapper>
        {isMobile ? (
          <>
            <SideBar />
          </>
        ) : (
          <>
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
                <div>
                  <Link to="/login">
                    <PersonOutlineIcon />
                  </Link>
                </div>
              </nav>
            </div>
          </>
        )}
      </Wrapper>
    </>
  )
}

export default Header
