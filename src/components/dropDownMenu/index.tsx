import { useState, useEffect, useRef } from 'react';
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
import { Link } from 'react-router-dom';

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const DropDownRef = useRef<HTMLDivElement | null>(null);

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
    { icon: <YourDataIcon/>, label: 'Seus dados no YouTube' },
    { icon: <AppearanceIcon/>, label: 'Tema do dispositivo' },
    { icon: <LanguageIcon/>, label: 'Idioma: Português' },
    { icon: <RestrictedMode/>, label: 'Modo restrito: desativado' },
    { icon: <PlaceIcon/>, label: 'Local: Brasil' },
    { icon: <KeyboardShortcutsIcon/>, label: 'Atalhos do teclado' },
    { icon: <SettingsIcon/>, label: 'Configurações' },
    { icon: <HelpIcon/>, label: 'Ajuda' },
    { icon: <SendFeedbackIcon/>, label: 'Enviar feedback' },
  ];

  return (
    <Container ref={DropDownRef} onClick={ () => setIsOpen(!isOpen) }>      
      <DropDownIcon/>     
      {isOpen && (
        <DropDownContainer show={ isOpen }>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to="/exemplo">
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </DropDownContainer>
        
      )}
    </Container>
  );
};

export default DropDownMenu;