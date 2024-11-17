import VideoComponent from "../../components/videoComponent";
import { Container, HomeContainer, SubContainer, ContainerVideos, Description, ShortsContainer, ShortsVideos } from "./styles";
import { useMenuContext } from "../../context/menuContext";
import RedShortsIcon from "../../icons/redShorts";
import ShortsComponet from "../../components/shortsComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Header from "../../components/header";
import Menu from "../../components/menu";
import VideoCategory from "../../components/videoCategories";
import { useCategoryContext } from "../../context/categoryContext";


function Home () {

    const [videos, setVideos] = useState<DadosVideos[]>([]);
    const { menuSize } = useMenuContext();
    const {categoryId} = useCategoryContext();

    

    interface DadosVideos {
        id: string;
        snippet: {
            title: string;
            thumbnails: {
                high: {
                    url: string;
                }
                maxres: {
                    url: string;
                }
            }
            channelTitle: string;
            publishedAt: string;
        },
        statistics: {
            viewCount: string;
        }
    }

    useEffect(() => {      
      load();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryId]);


    const api_key = 'AIzaSyAKhHheugI2-xT65wMaqKl-URd1xJxHf4k';
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=48&regionCode=br&videoCategoryId=${categoryId}&key=${api_key}`;


    async function load() {
        try {
          const resposta = await axios.get(url)
          setVideos(resposta.data.items)
        } catch (error) {
          console.log(error)
        }
    }

    function formatViewCount(viewCount: number): string {
        if (viewCount >= 1000000) {
            return `${(viewCount / 1000000).toFixed(0)} mi visualizações`
        } else if (viewCount >= 1000) {
            return `${(viewCount / 1000).toFixed(0)} mil de visualizações`
        } else {
            return `${viewCount} visualizações`
        }
    }

    function getPublishedTime(publishedAt: string) {
        const now = moment();
        const publishedTime = moment(publishedAt);
        const diffDays = now.diff(publishedTime, 'days');
    
        if (diffDays <= 0) {
          return 'hoje';
        } else if (diffDays === 1) {
          return 'há 1 dia';
        } else if (diffDays <= 7) {
          return `há ${diffDays} dias`;
        } else if (diffDays <= 30) {
          const diffWeeks = Math.floor(diffDays / 7);
          if (diffWeeks === 1) {
            return 'há 1 semana';
          } else {
            return `há ${diffWeeks} semanas`;
          }
        } else if (diffDays <= 365) {
          const diffMonths = Math.floor(diffDays / 30);
          if (diffMonths === 1) {
            return 'há 1 mês';
          } else {
            return `há ${diffMonths} meses`;
          }
        } else {
          const diffYears = Math.floor(diffDays / 365);
          if (diffYears === 1) {
            return 'há 1 ano';
          } else {
            return `há ${diffYears} anos`;
          }
        }
    }

    return(
      <HomeContainer>
        <Header/>
        <SubContainer>
          <Menu/>
          <Container>
            <VideoCategory/>
            <ContainerVideos menuSize={menuSize}>
              {videos.map((video) => (
                <VideoComponent
                  title={video.snippet.title}
                  thumbnail={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                  channelImage={video.snippet.channelTitle.slice(0, 2).toUpperCase()}
                  channelName={video.snippet.channelTitle}
                  details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`}
                  key={video.id}
                />
              ))}

            </ContainerVideos>
            <ShortsContainer>
              <Description>
                <RedShortsIcon/>
                <h3>Shorts</h3>
              </Description>
              <ShortsVideos>
                <ShortsComponet/>
                <ShortsComponet/>
                <ShortsComponet/>
                <ShortsComponet/>
                <ShortsComponet/>
                <ShortsComponet/>
              </ShortsVideos>
            </ShortsContainer>
          </Container>
        </SubContainer>
      </HomeContainer>
    )
}

export default Home;