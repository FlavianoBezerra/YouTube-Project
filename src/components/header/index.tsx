import {
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    HeaderLogin
} from "./styles";
import SinoIcon from '../../assets/sino.png';
import HamburgerIcon from '../../assets/hamburger.png';
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone-gravador.png";
import LoginIcon from "../../icons/login";
import StudioIcon from "../../icons/studio";
import YouTubeLogo from "../../assets/YouTube-Logo.png";
import { useMenuContext } from "../../context/menuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { useContext, useRef, useState } from "react";
import DropDownMenu from "../dropDownMenu";
import { useSearchContext } from "../../context/searchContext";

function Header() {
    const { setSearch } = useSearchContext();
    const { login } = useContext(UserContext);
    const { menuSize, setMenuSize } = useMenuContext();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);


    return (
        <Container>
            <LogoContainer>
                <ButtonContainer margin="0 10px 0 0" onClick={() => setMenuSize(!menuSize)}>
                    <ButtonIcon alt="" src={HamburgerIcon} />
                </ButtonContainer>
                <img style={{width: '100px', cursor: 'pointer'}} src={YouTubeLogo} alt=""/>
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput
                        placeholder="Pesquisar"
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setSearch(inputValue)
                                navigate('/search')
                            }
                        }}
                    />
                </SearchInputContainer>
                <SearchButton
                    onClick={() => {
                        if (inputValue.trim() === '') {
                          alert('Digite alguma palavra chave antes de tentar pesquisar')
                          return;
                        }
                        setSearch(inputValue)
                        navigate('/search')
                      }}
                >
                    <ButtonIcon alt="" src={SearchIcon}/>
                </SearchButton>
                <ButtonContainer margin="0 0 0 10px">
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                {login?
                    <>
                        <ButtonContainer onClick={() => navigate('/studio')}>
                            <StudioIcon />
                        </ButtonContainer>
                        <ButtonContainer>
                            <ButtonIcon alt="" src={SinoIcon} />
                        </ButtonContainer>
                        <DropDownMenu />
                    </>                    
                :
                    <>
                        <DropDownMenu />
                        <HeaderLogin onClick={() => navigate('/login')}><LoginIcon/> Fazer Login</HeaderLogin>                    
                    </>
                }
            </HeaderButton>

        </Container>
    )
}

export default Header;