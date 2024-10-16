import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

interface DadosVIdeos {
    thumbnail: string;
    channelImage: string;
    title: string;
    channelName: string;
    details: string
}

function VideoComponent (video: DadosVIdeos) {
    return(
        <Container>
            <ImageBanner src={video.thumbnail}/>
            <TitleContainer>
                <ChannelImage>{video.channelImage}</ChannelImage>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.channelName}</TextCard>
                    <TextCard>{video.details}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;