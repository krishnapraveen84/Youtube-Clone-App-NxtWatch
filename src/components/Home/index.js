import {Component} from 'react'
import Cookies from 'js-cookie'

import VideoItem from '../VideoCard'
import {RiCloseFill} from 'react-icons/ri'
import {
  HomeContainer,
  AllContentContainer,
  PopUpContainer,
  CloseButton,
  BannerCard,
  BannerImag,
  NavItemsDiv,
  RoutesCard,
  RouteNames,
  Paragraph,
  HomeIcon,
  FireIcon,
  GameIcon,
  SaveIcon,
  LinkEl,
  VidoesContainer,
  SearchContainer,
  SearchInput,
  SearchIcon,
  IconDiv,
  VideosListContainer,
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

import Header from '../Header'

const apiStates = {
  inProgress: 'LOADING',
  success: 'SUCCESS',
  fail: 'FAIl',
}

class Home extends Component {
  state = {
    isDark: false,
    banner: true,
    apiStatus: apiStates.inProgress,
    searchInput: '',
    videosList: [],
  }

  componentDidMount = () => {
    this.getVideosList()
  }

  getVideosList = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const videosUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videosUrl, options)
    const data = await response.json()
    const formattedData = data.videos.map(each => ({
      channelName: each.channel.name,
      profileImageUrl: each.channel.profile_image_url,
      id: each.id,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    if (response.ok) {
      this.setState({videosList: formattedData, apiStatus: apiStates.success})
    } else {
      this.setState({apiStatus: apiStates.fail})
    }
  }

  onChangeTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  closeBanner = () => {
    this.setState({banner: false})
  }

  renderBaneer = () => (
    <PopUpContainer className="popup-container">
      <CloseButton type="button" onClick={this.closeBanner}>
        <RiCloseFill size={24} />
      </CloseButton>
      <BannerCard>
        <BannerImag
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <Paragraph>Buy NXT Watch Premium prepaid plans with UPI</Paragraph>
      </BannerCard>
    </PopUpContainer>
  )

  render() {
    const {isDark, banner, videosList} = this.state
    const color = isDark ? '#ffffff' : 'black'
    return (
      <HomeContainer isDark={isDark} className="home-bg-container">
        <Header isDark={isDark} onChangeTheme={this.onChangeTheme} />
        <AllContentContainer>
          <NavItemsDiv isDark={isDark}>
            <LinkEl to="/" className="links">
              <RoutesCard>
                <HomeIcon className="icons" size={26} />
                <RouteNames isDark={isDark}>Home</RouteNames>
              </RoutesCard>
            </LinkEl>
            <LinkEl className="links">
              <RoutesCard>
                <FireIcon className="icons" size={26} />
                <RouteNames isDark={isDark}>Trending</RouteNames>
              </RoutesCard>
            </LinkEl>
            <LinkEl className="links">
              <RoutesCard>
                <GameIcon className="icons" size={26} />
                <RouteNames isDark={isDark}>Gamming</RouteNames>
              </RoutesCard>
            </LinkEl>
            <LinkEl className="links">
              <RoutesCard>
                <SaveIcon className="icons" size={28} />
                <RouteNames isDark={isDark}>Saved Videos</RouteNames>
              </RoutesCard>
            </LinkEl>
          </NavItemsDiv>
          <VidoesContainer>
            {banner && this.renderBaneer()}
            <SearchContainer>
              <SearchInput isDark={isDark} placeholder="Search" type="text" />
              <IconDiv isDark={isDark}>
                <SearchIcon isDark={isDark} />
              </IconDiv>
            </SearchContainer>
            <VideosListContainer>
              {videosList.map(each => (
                <VideoItem key={each.id} video={each} />
              ))}
            </VideosListContainer>
          </VidoesContainer>
        </AllContentContainer>
      </HomeContainer>
    )
  }
}

export default Home
