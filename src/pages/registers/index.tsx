import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { Button, ButtonContainer, Container, Footer, Input, InputGroup, Label, Left, LeftImg, Select, SubContainer } from "./styles";
import { Link } from "react-router-dom";
import { AxiosError } from 'axios';

function SignUp() {
    const navigate = useNavigate();
    const { handleRegister, handleLogin } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

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

        if (password !== confirmPassword) {
            setConfirmPasswordError('As senhas não coincidem.');
            isValid = false;
        } else {
            setConfirmPasswordError(null);
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
            await handleRegister(email, password, name);
            alert('Cadastro realizado com sucesso!');
            handleLogin(email, password);
            navigate('/');
        } catch (error: unknown) {
            console.error('Erro ao realizar o cadastro:', error);
            setPasswordError('Não foi possível fazer o cadastro. Tente novamente mais tarde.');
    
            if (error instanceof AxiosError) {
                if (error.response) {
                    if (error.response.status === 409) {
                        alert('Email já existente, tente outro!');
                    } else {
                        alert('Erro ao cadastrar, tente novamente!');
                    }
                } else {
                    alert('Erro de conexão, tente novamente mais tarde!');
                }
            } else {
                // Caso não seja um AxiosError
                alert('Erro inesperado, tente novamente!');
            }
        } finally {
            setLoading(false);
        }
    };        

    return (
        <Container>
            <SubContainer>
                <Left>
                    <LeftImg src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" />
                    <h1>Criar uma conta do google</h1>
                    <p>Insira seus dados</p>
                </Left>
                <div style={{ width: '50%' }}>
                    <InputGroup onSubmit={handleSubmit}>
                        <Label htmlFor="text">Nome:</Label>
                        <Input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                                          
                        <Label htmlFor="email">E-mail ou telefone:</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {emailError && <span style={{ color: "red" }}>{emailError}</span>}

                        <Label htmlFor="password">Senha:</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {passwordError && <span style={{ color: "red" }}>{passwordError}</span>}

                        <Label htmlFor="confirm-password">Confirmar Senha:</Label>
                        <Input
                            id="confirm-password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        {confirmPasswordError && <span style={{ color: "red" }}>{confirmPasswordError}</span>}
                        
                        <ButtonContainer>
                            <Button type="submit" disabled={loading}>
                                {loading ? 'Criando conta...' : 'Avançar'}
                            </Button>
                        </ButtonContainer>
                    </InputGroup>
                </div>
            </SubContainer>
            <Footer>
                <Select>
                    <option value="pt-BR">Português (BR)</option>
                    <option value="English">Inglês</option>
                    <option value="mandarin">Mandarim</option>
                    <option value="hindi">Hindi</option>
                    <option value="spanish">Espanhol</option>
                    <option value="arabic">Árabe</option>
                    <option value="portuguese">Português</option>
                    <option value="bengali">Bengali</option>
                    <option value="russian">Russo</option>
                </Select>
                <Link to="/exemplo">Ajuda</Link>
                <Link to="/exemplo">Privacidade</Link>
                <Link to="/exemplo">Termos</Link>
            </Footer>
        </Container>
    );
}

export default SignUp;