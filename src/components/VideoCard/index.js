import {
  VideoCard,
  VideoImage,
  VideoContentCard,
  AccountImage,
  ContentCard,
  VideoHeading,
  ChannelName,
  TimeLineCard,
  Paragraph,
} from './styledComponets'
import {formatDistanceToNow} from 'date-fns'
// console.log(formatDistanceToNow(new Date(2021, 8, 20)))
const VideoItem = props => {
  const {video} = props
  const {
    profileImageUrl,
    id,
    channelName,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = video
  const formatDate = formatDistanceToNow(new Date(publishedAt))
  return (
    <VideoCard>
      <VideoImage src={thumbnailUrl} alt={channelName} />
      <VideoContentCard>
        <AccountImage src={profileImageUrl} alt={channelName} />
        <ContentCard>
          <VideoHeading>{title}</VideoHeading>
          <ChannelName>{channelName}</ChannelName>
          <TimeLineCard>
            <Paragraph>{viewCount} views</Paragraph>
            <Paragraph>{formatDate} ago</Paragraph>
          </TimeLineCard>
        </ContentCard>
      </VideoContentCard>
    </VideoCard>
  )
}
export default VideoItem
