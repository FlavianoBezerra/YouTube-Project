import { useState, useEffect, useRef, useContext } from 'react';
import DropDownIcon from '../../icons/dropDown';
import { Container, Divider, DropDownContainer, DropDownImg, Img, Left, MenuItem, Text, UserInfo } from './styles';
import SettingsIcon from '../../icons/settings';
import HelpIcon from '../../icons/help';
import SendFeedbackIcon from '../../icons/sendFeedback';
import YourDataIcon from '../../icons/yourData';
import AppearanceIcon from '../../icons/appearance';
import LanguageIcon from '../../icons/language';
import RestrictedMode from '../../icons/restrictedMode';
import PlaceIcon from '../../icons/place';
import KeyboardShortcutsIcon from '../../icons/keyboardShortcuts';
import NoImg from "../../assets/no-img.png";
import { UserContext } from '../../context/userContext';
import LeaveIcon from '../../icons/leave';
import GoogleAccountIcon from '../../icons/googleAccount';
import ChangeAccountIcon from '../../icons/changeAccount';
import YoutubeStudioIcon from '../../icons/youtubeStudio';
import PurchasesAndSubscriptionIcon from '../../icons/purchasesAndSubscription';
import NextButton from "../../assets/next-button.png";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function DropDownMenu() {
  const { login, user, logOut } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const DropDownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const handleClickOutside = (event: { target: any }) => {
    if (DropDownRef.current && !DropDownRef.current.contains( event.target )) {
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
    { icon: <GoogleAccountIcon/>, link: '/google_account', label: 'Conta do Google' },
    { icon: <ChangeAccountIcon/>, link: '/change_account', label: 'Mudar de conta', next: <Img src={NextButton} alt='Next'/> },
    { icon: <LeaveIcon/>, link: () => logOut(), label: 'Sair', divider: <Divider /> },
    { icon: <YoutubeStudioIcon/>, link: '/youtube_studio', label: 'YouTube Studio' },
    { icon: <PurchasesAndSubscriptionIcon/>, link: '/purchases_subscription', label: 'Compras e assinaturas', divider: <Divider /> },
    { icon: <YourDataIcon/>, link: '/your_datas', label: 'Seus dados no YouTube' },
    { icon: <AppearanceIcon/>, link: '/appearance', label: 'Tema do dispositivo', next: <Img src={NextButton} alt='Next'/> },
    { icon: <LanguageIcon/>, link: '/language', label: 'Idioma: Português', next: <Img src={NextButton} alt='Next'/> },
    { icon: <RestrictedMode/>, link: '/restricted_mode', label: 'Modo restrito: desativado', next: <Img src={NextButton} alt='Next'/> },
    { icon: <PlaceIcon/>, link: '/place', label: 'Local: Brasil', next: <Img src={NextButton} alt='Next'/> },
    { icon: <KeyboardShortcutsIcon/>, link: '/keyboard_shortcuts', label: 'Atalhos do teclado', divider: <Divider /> },
    { icon: <SettingsIcon/>, link: '/settings', label: 'Configurações', divider: <Divider /> },
    { icon: <HelpIcon/>, link: '/help', label: 'Ajuda' },
    { icon: <SendFeedbackIcon/>, link: '/send_feedback', label: 'Enviar feedback' },
  ];

  return (
    <Container ref={DropDownRef} onClick={ () => setIsOpen(!isOpen) }>      
      {login ? <DropDownImg alt="No img" src={NoImg} /> : <DropDownIcon/>}     
      {isOpen && (
        <DropDownContainer show={ isOpen }>
          {login ? (
            <>
              <UserInfo >
                <DropDownImg src={NoImg} alt='NOt imagem'/>
                <div>
                  <Text>{user && user.name ? user.name : 'Erro ao buscar nome'}</Text><br />
                  <Text>@{user && user.name ? user.name : 'Erro ao buscar nome'}</Text><br />
                  <Link to='/your_channel'>Acessar seu canal</Link>
                </div>
              </UserInfo>
              <Divider />            
            </>
            ) : null
          }
          {menuItems.map((item, index) => (
            <>
              <MenuItem key={index} onClick={() => {
                if (typeof item.link === 'function') {
                  item.link();
                } else {
                  navigate(item.link);
                }
              }}>
                <Left>
                  {item.icon}
                  <span style={{ marginLeft: '10px' }}>{item.label}</span>
                </Left>
                {item.next}
              </MenuItem>
              {item.divider}           
            </>
          ))}
        </DropDownContainer>
        
      )}
    </Container>
  );
};

export default DropDownMenu;