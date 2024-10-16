import { Banner, ChannelContainer, ChannelImage, Container, DescriptionContainer, TextCard, TextContainer, Title, TitleContainer } from "./styles";

interface DadosVideo {
  title: string
  thumbnail: string
  channelImage: string
  channelName: string
  details: string
  description: string
}

function VideoComponent(video : DadosVideo) {
  return (
    <Container>
      <Banner style={{backgroundImage: `url(${video.thumbnail})`}}></Banner>
      <TitleContainer>
        <TextContainer>
          <Title>{video.title}</Title>
          <TextCard>{video.details}</TextCard>
        </TextContainer>
        <ChannelContainer>
          <ChannelImage>
            {video.channelImage}
          </ChannelImage>
          <TextCard>{video.channelName}</TextCard>
        </ChannelContainer>
        <DescriptionContainer>
          <TextCard>
            {video.description}
          </TextCard>
        </DescriptionContainer>
      </TitleContainer>
    </Container>
  )
}

export default VideoComponent;