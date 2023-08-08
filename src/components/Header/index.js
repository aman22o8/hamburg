// Write your code here
import './index.css'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header_container">
    <Link to="/" className="my_links">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button
          type="button"
          data-testid="hamburgerIconButton"
          className="trigger-button"
        >
          <GiHamburgerMenu className="icon1" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="hamburg_container">
          <button
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
            className="trigger-button"
          >
            <IoMdClose className="icon1" />
          </button>
          <ul className="sidebyside">
            <li>
              <Link to="/" className="my_links" onClick={() => close()}>
                <AiFillHome className="icon1" />
                <p className="same">Home</p>
              </Link>
            </li>
            <li>
              <Link to="/about" className="my_links" onClick={() => close()}>
                <BsInfoCircleFill className="icon1" />
                <p className="same">About</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
