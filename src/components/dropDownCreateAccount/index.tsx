import { useState, useEffect, useRef } from 'react';
import { Container, DropDownContainer } from './styles';
import { Link } from 'react-router-dom';

function DropDownCreateAccount() {
  const [isOpen, setIsOpen] = useState(false);
  const DropDownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (DropDownRef.current && !DropDownRef.current.contains(event.target as Node)) {
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
              <Link to="/registers">
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </DropDownContainer>
        
      )}
    </Container>
  );
};

export default DropDownCreateAccount;