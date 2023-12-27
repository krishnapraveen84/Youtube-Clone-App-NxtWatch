import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {IoMdMenu, IoIosSearch} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {IoGameController} from 'react-icons/io5'
import {MdPlaylistAdd} from 'react-icons/md'

// .............................     styels   ................................//
export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => (props.isDark ? 'black' : '#ffffff')};
`
export const AllContentContainer = styled.div`
  display: flex;
  width: 100%;
`
export const PopUpContainer = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    height: 230px;
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
  }
`
export const Button = styled.button`
  background-color: transparent;
  ouline: none;
  border-style: none;
  margin-right: 6px;
`
export const CloseButton = styled.button`
  margin-left: auto;
  width: 30px;
  background-color: transparent;
  outline: none;
  border-style: none;
`
export const BannerCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`
export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 520;
  color: #475569;
  margin-right: 15px;
`
export const BannerImag = styled.img`
    width: 45%;
    @media screen and (min-width: 768px){
        width: 25%;
        margin-right: 15px
        height: 200px
    }
`

export const NavItemsDiv = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: cneter;
    align-center: center;
    width: 28%;
    padding: 35px;
    background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  }
  
`
export const RoutesCard = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
`
export const RouteNames = styled.p`
  font-size: 17px;
  font-weight: 530;
  margin-left: 22px;
  color: ${props => (props.isDark ? '#ffffff' : '')};
`
export const HomeIcon = styled(IoMdMenu)`
  font-size: 2px;
`
export const FireIcon = styled(HiFire)`
  font-size: 2px;
`
export const GameIcon = styled(IoGameController)`
  font-size: 2px;
`
export const SaveIcon = styled(MdPlaylistAdd)`
  font-size: 2px;
`
export const LinkEl = styled(Link)`
  text-decoration: none;
`
export const VidoesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`
export const SearchContainer = styled.div`
  height: 41px;
  width: 60%;
  display: flex;
  align-items: center;
  outline: none;
  border-style: solid;
  border-width: 0.6px;
  border-color: #d7dfe9;
  margin: 20px;
  border-radius: 6px;
`
export const SearchInput = styled.input`
  height: 38px;
  width: 85%;
  padding-left: 10px;
  outline: none;
  font-size: 16px;
  border-style: none;
  color: ${props => (props.isDark ? '#f8fafc' : '#616e7c')};
  background-color: transparent;
`
export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 39px;
  background-color: #d7dfe9;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: ${props => (props.isDark ? '#313131' : '')};
`
export const SearchIcon = styled(IoIosSearch)`
  font-size: 22px;
  color: ${props => (props.isDark ? '#ffffff' : '#7e858e')};
`
export const VideosListContainer = styled.ul`
  display: flex;
  align-items: center;
  background-color: #f1f5f9;
  flex-wrap: wrap;
  list-type: none;
  padding-left: 0px;
  padding: 20px;
  
  
`
