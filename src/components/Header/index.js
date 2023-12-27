import {Link} from 'react-router-dom'
import {IoMdMenu} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {IoGameController} from 'react-icons/io5'
import {MdPlaylistAdd, MdHome} from 'react-icons/md'

import {FiLogOut} from 'react-icons/fi'

import {RiCloseFill} from 'react-icons/ri'

import {BsBrightnessHigh} from 'react-icons/bs'

import './index.css'

import 'reactjs-popup/dist/index.css'

import {
  Nav,
  Image,
  ProfileImage,
  NavItemContainer,
  Button,
  LogoutButton,
  LogoutIcon,
  PopUpMenu,
  CloseButton,
  PopupContent,
  RoutesCard,
  Pargraph,
  StyledPopup,
  FaMoonStyle,
} from './styledComponents'

const Header = props => {
  const {isDark, onChangeTheme} = props
  const diffImgs = isDark
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
  const diffIcons = !isDark ? (
    <FaMoonStyle />
  ) : (
    <BsBrightnessHigh color="#ffffff" size={24} />
  )
  const color = isDark ? '#ffffff' : 'black'
  const onThemeClick = () => {
    onChangeTheme()
  }
  return (
    <Nav isDark={isDark} className="navbar">
      <Image className="logo-img" src={diffImgs} alt="website logo" />
      <NavItemContainer className="nav-items">
        <Button onClick={onThemeClick} type="button">
          {diffIcons}
        </Button>
        <ProfileImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <LogoutButton>Logout</LogoutButton>
        <PopUpMenu className="popup-container">
          <StyledPopup
            isDark={isDark}
            modal
            trigger={
              <Button type="button">
                <IoMdMenu color={color} size={30} />
              </Button>
            }
          >
            {close => (
              <>
                <CloseButton type="button" onClick={close}>
                  <RiCloseFill color={color} size={28} />
                </CloseButton>
                <PopupContent isDark={isDark}>
                  <Link to="/" onClick={close} className="links">
                    <RoutesCard>
                      <MdHome className="icons" size={26} />
                      <Pargraph>Home</Pargraph>
                    </RoutesCard>
                  </Link>
                  <Link to="/" className="links">
                    <RoutesCard>
                      <HiFire className="icons" size={26} />
                      <Pargraph>Trending</Pargraph>
                    </RoutesCard>
                  </Link>
                  <Link to="/" className="links">
                    <RoutesCard>
                      <IoGameController className="icons" size={26} />
                      <Pargraph>Gamming</Pargraph>
                    </RoutesCard>
                  </Link>
                  <Link to="/" className="links">
                    <RoutesCard>
                      <MdPlaylistAdd className="icons" size={28} />
                      <Pargraph>Saved Videos</Pargraph>
                    </RoutesCard>
                  </Link>
                </PopupContent>
              </>
            )}
          </StyledPopup>
        </PopUpMenu>
        <LogoutIcon type="button">
          <FiLogOut color={color} size={30} />
        </LogoutIcon>
      </NavItemContainer>
    </Nav>
  )
}
export default Header
