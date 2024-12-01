import { useState, useEffect, useRef } from 'react';
import { Container, DropDownContainer, InitialText, MenuItem } from './styles';
import { useNavigate } from 'react-router-dom';

function DropDownCreateAccount() {
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
    { label: 'Para uso pessoal', link: '/registers' },
    { label: 'Para uma criança', link: '/registers' },
    { label: 'Para trabalho ou empresa', link: '/registers' }
  ];

  return (
    <Container ref={DropDownRef} onClick={ () => setIsOpen(!isOpen) }>      
      <InitialText>Criar conta</InitialText>    
      {isOpen && (
        <DropDownContainer show={ isOpen }>
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={() => navigate(item.link)}>
              <span style={{ marginLeft: '10px' }}>{item.label}</span>
            </MenuItem>
          ))}
        </DropDownContainer>
        
      )}
    </Container>
  );
};

export default DropDownCreateAccount;