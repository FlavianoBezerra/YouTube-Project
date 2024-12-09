import { useState, useEffect, useRef } from 'react';
import { Container, Divider, DropDownContainer, DropInformation, LogoImg, MenuItem } from './styles';
import { useNavigate } from 'react-router-dom';
import HamburgerIcon from '../../assets/hamburger.png';
import YouTubeLogo from '../../assets/YouTube-Logo.png';
import TrendingIcon from '../../icons/trending';
import ShoppingIcon from '../../icons/shopping';
import MusicIcon from '../../icons/music';
import MoviesIcon from '../../icons/movies';
import LiveIcon from '../../icons/live';
import GamesIcon from '../../icons/games';
import NewsIcon from '../../icons/news';
import SportsIcon from '../../icons/sports';
import CoursesIcon from '../../icons/courses';
import PodcastsIcon from '../../icons/podcasts';
import YoutubePremiumIcon from '../../icons/youtubePremium';
import YoutubeMusicIcon from '../../icons/youtubeMusic';
import YoutubeKidsIcon from '../../icons/youtubeKids';

function DrawerMenu() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const DropDownRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: { target: any }) => {
        if (DropDownRef.current && !DropDownRef.current.contains(event.target )) {
        setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuItems = [
        { id: 1,name: 'Em alta', link: '/trending', icon: <TrendingIcon/> },
        { id: 2,name: 'Shopping', link: '/shopping', icon: <ShoppingIcon/> },
        { id: 3,name: 'Música', link: '/music', icon: <MusicIcon/> },
        { id: 4,name: 'Filmes', link: '/movies', icon: <MoviesIcon/> },
        { id: 5,name: 'Ao vivo', link: '/live', icon: <LiveIcon/> },
        { id: 6,name: 'Games', link: '/games', icon: <GamesIcon/> },
        { id: 7,name: 'News', link: '/news', icon: <NewsIcon/> },
        { id: 8,name: 'Esportes', link: '/Sports', icon: <SportsIcon/> },
        { id: 9,name: 'Cursos', link: '/courses', icon: <CoursesIcon/> },
        { id: 10,name: 'Podcast', link: '/podcast', icon: <PodcastsIcon/>, divider: <Divider /> },        
        { id: 1,name: 'YouTube Premium', link: '/youtube_premium', icon: <YoutubePremiumIcon/> },
        { id: 2,name: 'YouTube Music', link: '/youtube_music', icon: <YoutubeMusicIcon/> },
        { id: 3,name: 'YouTube Kids', link: '/youtube_kids', icon: <YoutubeKidsIcon/> }
    ];

  return (
    <Container ref={DropDownRef} onClick={ () => setIsOpen(!isOpen) }>      
        <img src={HamburgerIcon} alt="" style={{ height: '25px', width: '25px' }}/>    
        {isOpen && (
        <DropDownContainer show={ isOpen }>
            <LogoImg src={YouTubeLogo} alt="logo" />
            {menuItems.map((item, index) => (
                <>
                    <MenuItem key={index} onClick={() => navigate(item.link)}>
                        {item.icon}
                        <span style={{ marginLeft: '10px' }}>{item.name}</span>
                    </MenuItem>
                    {item.divider}                
                </>
            ))}
            <DropInformation>Política de Privacidade | Termos de Serviço</DropInformation>
        </DropDownContainer>
        
      )}
    </Container>
  );
};

export default DrawerMenu;