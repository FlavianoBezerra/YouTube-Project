import { useState, useEffect, useRef } from 'react';
import { Container, DropDownContainer } from './styles';

function DropDownCreateAccount() {
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
    { label: 'Para uso pessoal' },
    { label: 'Para uma criança' },
    { label: 'Para trabalho ou empresa' }
  ];

  return (
    <Container ref={DropDownRef} onClick={ () => setIsOpen(!isOpen) }>      
      <span className='icon'>Criar conta</span>    
      {isOpen && (
        <DropDownContainer show={ isOpen }>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="/registers">
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </DropDownContainer>
        
      )}
    </Container>
  );
};

export default DropDownCreateAccount;