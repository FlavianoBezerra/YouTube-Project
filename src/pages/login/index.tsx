import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Buttons, Container, Footer, InputGroup, Left, Recuperar, SubContainer, VisitorMode } from "./styles";
import DropDownCreateAccount from "../../components/dropDownCreateAccount";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login () {
    const {handleLogin} = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
    const isValidPassword = (password: string) => password.length >= 8;

    const validateForm = () => {
        let isValid = true;

        if (!isValidEmail(email)) {
            setEmailError('Por favor, insira um e-mail válido.');
            isValid = false;
        } else {
            setEmailError(null);
        }

        if (!isValidPassword(password)) {
            setPasswordError('A senha deve ter pelo menos 8 caracteres.');
            isValid = false;
        } else {
            setPasswordError(null);
        }

        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!validateForm()) {
            return;
        }
    
        setLoading(true);
    
        try {
            await handleLogin(email, password);
            alert('Login realizado com sucesso!');
            navigate("/");
        } catch (error) {
            console.error('Erro ao realizar o login:', error);
            setPasswordError('Não foi possível fazer o login. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };  

    return(
        <Container>
            <SubContainer>
                <Left>
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" />
                    <h1>Fazer login</h1>
                    <p>Prosseguir no YouTube</p>
                </Left>
                <div>
                    <form onSubmit={handleSubmit}>
                        <InputGroup>
                            <label htmlFor="email">E-mail ou telefone</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {emailError && <span style={{color: 'red'}}>{emailError}</span>}

                            <label htmlFor="password">Senha</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {passwordError && <span style={{color: 'red'}}>{passwordError}</span>}
                        </InputGroup>
                        <Recuperar>
                            <a href="/exemplo">Esqueceu seu e-mail?</a>
                        </Recuperar>
                        <VisitorMode>
                            <p>Não está no seu computador? Use o modo visitante para fazer login com privacidade.</p>
                            <a href="/exemplo">Saiba mais sobre como usar o Modo visitante</a>
                        </VisitorMode>
                        <Buttons>
                            <div>
                                <DropDownCreateAccount />
                                <button className="enter" type="submit" disabled={loading}>Entrar</button>
                            </div>
                        </Buttons>
                    </form>
                </div>
            </SubContainer>
            <Footer>
                <select>
                    <option value="pt-BR">Português (BR)</option>
                    <option value="English">Inglês</option>
                    <option value="mandarin">Mandarim</option>
                    <option value="hindi">Hindi</option>
                    <option value="spanish">Espanhol</option>
                    <option value="arabic">Árabe</option>
                    <option value="portuguese">Português</option>
                    <option value="bengali">Bengali</option>
                    <option value="russian">Russo</option>
                </select>
                <Link to="/exemplo">Ajuda</Link>
                <Link to="/exemplo">Privacidade</Link>
                <Link to="/exemplo">Termos</Link>
            </Footer>
        </Container>
    )
}

export default Login;