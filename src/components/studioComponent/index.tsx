import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";
import NoImg from '../../assets/no-img.png';

interface DadosVIdeos {
    thumbnail: string;
    title: string;
    channelName: string;
    details: string
}

function StudioComponent (video: DadosVIdeos) {
    return(
        <Container>
            <ImageBanner src={video.thumbnail}/>
            <TitleContainer>
                <ChannelImage><img alt="" src={NoImg} style={{width: '100%', borderRadius: '50%'}} /></ChannelImage>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.channelName}</TextCard>
                    <TextCard>{video.details}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default StudioComponent;