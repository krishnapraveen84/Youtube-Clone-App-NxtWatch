import styled from 'styled-components'
import {FaMoon} from 'react-icons/fa'
import Popup from 'reactjs-popup'

export const StyledPopup = styled(Popup)`
  &-content {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 25px;
    background-color: ${props => (props.isDark ? 'black' : '#ffffff')};
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    padding: 25px;
    padding-right: 45px;
    padding-left: 35px;
  }
`
export const Image = styled.img`
  width: 30%;
  @media screen and (min-width: 768px) {
    width: 15%;
  }
`
export const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 23%;
    justify-content: space-evenly;
  }
`

export const Button = styled.button`
  background-color: transparent;
  ouline: none;
  border-style: none;
  margin-right: 6px;
`
export const FaMoonStyle = styled(FaMoon)`
  font-size: 22px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-top: 8px;
  }
`
export const LogoutIcon = styled.button`
  background-color: transparent;
  ouline: none;
  border-style: none;
  margin-right: 6px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    padding-top: 6px;
    padding-left: 14px;
    display: flex;
    background-color: transparent;
    ouline: none;
    border-style: solid;
    border-color: #3b82f6;
    color: #3b82f6;
    font-size: 15px;
    font-weight: 550;
    border-radius: 6px;
    height: 35px;
    width: 80px;
  }
`
export const ProfileImage = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 40px;
    height: 40px;
    margin-right: 8px;
    margin-left: 8px;
  }
`

export const PopUpMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const CloseButton = styled.button`
  margin-left: auto;
  width: 30px;
  background-color: transparent;
  outline: none;
  border-style: none;
`
export const PopupContent = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? 'black' : '#ffffff')};
`
export const RoutesCard = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
`
export const Pargraph = styled.p`
  font-size: 20px;
  font-weight: 530;
  margin-left: 22px;
`
