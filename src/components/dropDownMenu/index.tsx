import { useState, useEffect, useRef, useContext } from 'react';
import DropDownIcon from '../../icons/dropDown';
import { Container, DropDownContainer } from './styles';
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
  const { login, user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const DropDownRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const handleClickOutside = (event: { target: any; }) => {
    if (DropDownRef.current && !DropDownRef.current.contains(event.target)) {
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
    { icon: <ChangeAccountIcon/>, link: '/change_account', label: 'Mudar de conta', next: <img style={{ width: '25px' }} src={NextButton} alt='Next'/> },
    { icon: <LeaveIcon/>, link: '/leave', label: 'Sair', divider: <div className='divider'></div> },
    { icon: <YoutubeStudioIcon/>, link: '/youtube_studio', label: 'YouTube Studio' },
    { icon: <PurchasesAndSubscriptionIcon/>, link: '/purchases_subscription', label: 'Compras e assinaturas', divider: <div className='divider'></div> },
    { icon: <YourDataIcon/>, link: '/your_datas', label: 'Seus dados no YouTube' },
    { icon: <AppearanceIcon/>, link: '/appearance', label: 'Tema do dispositivo', next: <img style={{ width: '25px' }} src={NextButton} alt='Next'/> },
    { icon: <LanguageIcon/>, link: '/language', label: 'Idioma: Português', next: <img style={{ width: '25px' }} src={NextButton} alt='Next'/> },
    { icon: <RestrictedMode/>, link: '/restricted_mode', label: 'Modo restrito: desativado', next: <img style={{ width: '25px' }} src={NextButton} alt='Next'/> },
    { icon: <PlaceIcon/>, link: '/place', label: 'Local: Brasil', next: <img style={{ width: '25px' }} src={NextButton} alt='Next'/> },
    { icon: <KeyboardShortcutsIcon/>, link: '/keyboard_shortcuts', label: 'Atalhos do teclado', divider: <div className='divider'></div> },
    { icon: <SettingsIcon/>, link: '/settings', label: 'Configurações', divider: <div className='divider'></div> },
    { icon: <HelpIcon/>, link: '/help', label: 'Ajuda' },
    { icon: <SendFeedbackIcon/>, link: '/send_feedback', label: 'Enviar feedback' },
  ];

  return (
    <Container ref={DropDownRef} onClick={ () => setIsOpen(!isOpen) }>      
      {login ? <img alt="" src={NoImg} style={{width: '100%', borderRadius: '50%'}} /> : <DropDownIcon/>}     
      {isOpen && (
        <DropDownContainer show={ isOpen }>
          {login ? (
            <>
              <div style={{ height: '60px', display: 'flex', alignItems: 'center', padding: '12px' }}>
                <img style={{ height: '40px', borderRadius: '50%' }} src={NoImg} alt='NOt imagem'/>
                <div>
                  <span>{user && user.name ? user.name : 'Erro ao buscar nome'}</span><br />
                  <span>@{user && user.name ? user.name : 'Erro ao buscar nome'}</span><br />
                  <Link to='/exemplo'>Acessar seu canal</Link>
                </div>
              </div>
              <div className='divider'></div>            
            </>
            ) : null
          }
          {menuItems.map((item, index) => (
            <>
              <li key={index} onClick={() => navigate(item.link)}>
                <div style={{ display: 'flex' }}>
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <div>{item.next}</div>
              </li>
              <div>{item.divider}</div>            
            </>
          ))}
        </DropDownContainer>
        
      )}
    </Container>
  );
};

export default DropDownMenu;