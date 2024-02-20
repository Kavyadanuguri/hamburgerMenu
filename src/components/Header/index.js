// Write your code here
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  console.log(props)

  return (
    <nav className="nav-container">
      <Link to="/">
        <img
          className="website-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        />
      </Link>

      <Popup
        modal
        className="popup-content"
        trigger={
          <button
            className="logo-btn"
            data-testid="hamburgerIconButton"
            type="button"
          >
            <GiHamburgerMenu role="button" className="menu-icon" />
          </button>
        }
      >
        {close => (
          <div>
            <div className="icon-corner">
              <button
                className="logo-btn"
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose role="button" size="30" color="#616e7c" />
              </button>
            </div>
            <ul className="kavya">
              <Link className="link-element" to="/">
                <li className="con1">
                  <AiFillHome className="icons" onClick={() => close()} />
                  <p className="header-p1">Home</p>
                </li>
              </Link>
              <Link className="link-element" to="/about">
                <li className="con1">
                  <BsInfoCircleFill className="icons" onClick={() => close()} />
                  <p className="header-p1">About</p>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </nav>
  )
}

export default Header
