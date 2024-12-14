import { useContext } from "react";
import LoginIcon from "../../icons/login";
import RegistrationIcon from "../../icons/registration";
import ShortsIcon from "../../icons/shorts";
import StartIcon from "../../icons/start";
import StudioIcon from "../../icons/studio";
import { FooterContainer, FooterLogin, Img, Label, SubContainer } from "./styles";
import { UserContext } from "../../context/userContext";
import NoImg from "../../assets/no-img.png";
import { useNavigate } from "react-router-dom";

function Footer() {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <FooterContainer>
            <SubContainer onClick={() => navigate('/')}>
                <StartIcon />
                <Label>Início</Label>
            </SubContainer>
            <SubContainer onClick={() => navigate('/shorts')}>
                <ShortsIcon />
                <Label>Shorts</Label>
            </SubContainer>
            {login ?
                <SubContainer onClick={() => navigate('/studio')}>
                    <StudioIcon />
                </SubContainer>            
            : null }
            <SubContainer onClick={() => navigate('/registrations')}>
                <RegistrationIcon />
                <Label>Inscrições</Label>
            </SubContainer>
            <SubContainer>
                {login ?
                    <>
                        <Img src={NoImg} alt="" />
                        <Label>Você</Label>                    
                    </>
                :
                    <>
                        <FooterLogin onClick={() => navigate('/login')}>
                            <LoginIcon />
                            <Label>Login</Label>                
                        </FooterLogin>
                    </>              
                }
            </SubContainer>
        </FooterContainer>
    )
}

export default Footer;