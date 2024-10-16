import { Container,
        ContainerLogin,
        Description,
        FooterBoxOne,
        FooterBoxTwo,
        MenuFooter,
        MenuItem,
        MenuLogin,
        SubContainer,
        TextLogin } from "./styles";
import { useMenuContext } from "../../context/menuContext";
import { useNavigate } from "react-router-dom";
import StartIcon from "../../icons/start";
import ShortsIcon from "../../icons/shorts";
import RegistrationIcon from "../../icons/registration";
import YouIcon from "../../icons/you";
import HistoricIcon from "../../icons/historic";
import LoginIcon from "../../icons/login";
import TrendingIcon from "../../icons/trending";
import ShoppingIcon from "../../icons/shopping";
import MusicIcon from "../../icons/music";
import LiveIcon from "../../icons/live";
import GamesIcon from "../../icons/games";
import NewsIcon from "../../icons/news";
import SportsIcon from "../../icons/sports";
import CoursesIcon from "../../icons/courses";
import PodcastsIcon from "../../icons/podcasts";
import MoviesIcon from "../../icons/movies";
import YoutubePremiumIcon from "../../icons/youtubePremium";
import YoutubeMusicIcon from "../../icons/youtubeMusic";
import YoutubeKidsIcon from "../../icons/youtubeKids";
import SettingsIcon from "../../icons/settings";
import ReportingHistoryIcon from "../../icons/reportingHistory";
import HelpIcon from "../../icons/help";
import SendFeedbackIcon from "../../icons/sendFeedback";

function Menu () {
    const { menuSize } = useMenuContext();
    const navigate = useNavigate();

    const boxOne = [
        { id: 1, name: 'Início', link: '/', icon: <StartIcon/> },
        { id: 2, name: 'Shorts', link: '/shorts', icon: <ShortsIcon/> },
        { id: 3,name: 'Inscrições', link: '/registrations   ', icon: <RegistrationIcon/> }    
    ];
    
    const boxTwo = [
        { id: 1, name: 'Você', link: '/you', icon: <YouIcon/> },
        { id: 2,name: 'Histórico', link: '/historic', icon: <HistoricIcon/> }
    ];
    
    const boxThree = [
        { id: 1,name: 'Em alta', link: '/trending', icon: <TrendingIcon/> },
        { id: 2,name: 'Shopping', link: '/shopping', icon: <ShoppingIcon/> },
        { id: 3,name: 'Música', link: '/music', icon: <MusicIcon/> },
        { id: 4,name: 'Filmes', link: '/movies', icon: <MoviesIcon/> },
        { id: 5,name: 'Ao vivo', link: '/live', icon: <LiveIcon/> },
        { id: 6,name: 'Games', link: '/games', icon: <GamesIcon/> },
        { id: 7,name: 'News', link: '/news', icon: <NewsIcon/> },
        { id: 8,name: 'Esportes', link: '/Sports', icon: <SportsIcon/> },
        { id: 9,name: 'Cursos', link: '/courses', icon: <CoursesIcon/> },
        { id: 10,name: 'Podcast', link: '/podcast', icon: <PodcastsIcon/> }
    ];
    
    const boxFour = [
        { id: 1,name: 'YouTube Premium', link: '/youtube_premium', icon: <YoutubePremiumIcon/> },
        { id: 2,name: 'YouTube Music', link: '/youtube_music', icon: <YoutubeMusicIcon/> },
        { id: 3,name: 'YouTube Kids', link: '/youtube_kids', icon: <YoutubeKidsIcon/> }    
    ];
    
    const boxFive = [
        { id: 1,name: 'Configurações', link: '/settings', icon: <SettingsIcon/> },
        { id: 2,name: 'Histórico de denúncias', link: '/reporting_history', icon: <ReportingHistoryIcon/> },
        { id: 3,name: 'Ajuda', link: '/help', icon: <HelpIcon/> },
        { id: 4,name: 'Enviar feedback', link: '/send_feedback', icon: <SendFeedbackIcon/> }
    ];
    
    const menuWhenClosed = [
        { id: 1,name: 'Início', link: '/', icon: <StartIcon/> },
        { id: 2,name: 'Shorts', link: '/shorts', icon: <ShortsIcon/> },
        { id: 3,name: 'Inscrições', link: '/registrations', icon: <RegistrationIcon/> },
        { id: 4,name: 'Você', link: '/you', icon: <YouIcon/> },
        { id: 5,name: 'Histórico', link: '/historic', icon: <HistoricIcon/> }
    ];

    return(
        <Container menuSize={menuSize}>
            {menuSize ? (                
                <>
                    <SubContainer menuSize={menuSize}>
                        {boxOne.map((item) => (
                            <MenuItem key={item.id} menuSize={menuSize} onClick={() => navigate(item.link)}>
                                {item.icon}                    
                                <span>{item.name}</span>
                            </MenuItem>
                        ))}
                    </SubContainer>
                    <SubContainer menuSize={menuSize}>            
                        {boxTwo.map((item) => (
                            <MenuItem key={item.id} menuSize={menuSize} onClick={() => navigate(item.link)}>
                                {item.icon}
                                <span>{item.name}</span>
                            </MenuItem>
                        ))}
                    </SubContainer>
                    <SubContainer menuSize={menuSize}>
                        <ContainerLogin>
                            <TextLogin>Faça login para curtir vídeos, comentar e se inscrever</TextLogin>
                            <MenuLogin onClick={() => navigate('/login')}><LoginIcon/> Fazer login</MenuLogin>
                        </ContainerLogin>
                    </SubContainer>
                    <SubContainer menuSize={menuSize}>
                        <Description>
                            <h3>Explorar</h3>
                        </Description>
                        {boxThree.map((item) => (
                            <MenuItem key={item.id} menuSize={menuSize} onClick={() => navigate(item.link)}>
                                {item.icon}
                                <span>{item.name}</span>
                            </MenuItem>
                        ))}
                    </SubContainer>
                    <SubContainer menuSize={menuSize}>
                        <Description>
                            <h3>Mais do YouTube</h3>
                        </Description>
                        {boxFour.map((item) => (
                            <MenuItem key={item.id} menuSize={menuSize} onClick={() => navigate(item.link)}>
                                {item.icon}
                                <span>{item.name}</span>
                            </MenuItem>
                        ))}
                    </SubContainer>
                    <SubContainer menuSize={menuSize}>
                        {boxFive.map((item) => (
                            <MenuItem key={item.id} menuSize={menuSize} onClick={() => navigate(item.link)}>
                                {item.icon}
                                <span>{item.name}</span>
                            </MenuItem>
                        ))}
                    </SubContainer>
                    <MenuFooter>
                        <FooterBoxOne>Sobre Imprensa<br/>Direitos autorais Fale Conosco<br/>Criadores Anunciar<br/>Desenvolvedores</FooterBoxOne>
                        <FooterBoxOne>Termos Privacidade<br/>Política de Segurança &<br/>Como funciona o YouTube<br/>Testar novos recursos</FooterBoxOne>
                        <FooterBoxTwo>© 2024 Flaviano Bezerra</FooterBoxTwo>
                    </MenuFooter>
                </>
            ) :
                <>
                    <SubContainer menuSize={menuSize}>
                        {menuWhenClosed.map((item) => (
                            <MenuItem key={item.id} menuSize={menuSize} onClick={() => navigate(item.link)}>
                                {item.icon}
                                <span>{item.name}</span>
                            </MenuItem>
                        ))}
                    </SubContainer>
                </>
            }
        </Container>
    )
}

export default Menu;