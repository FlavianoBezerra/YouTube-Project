import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { Buttons, Container, Footer, InputGroup, Left, SubContainer } from "./styles";

function SignUp() {
    const navigate = useNavigate();
    const { handleRegister } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
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
            await handleRegister(email, password);
            alert('Cadastro realizado com sucesso!'); // Exemplo de feedback
            navigate('/login');
        } catch (error) {
            console.error('Erro ao realizar o cadastro:', error);
            setPasswordError('Não foi possível fazer o cadastro. Tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <SubContainer>
                <Left>
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" />
                    <h1>Criar uma conta do google</h1>
                    <p>Insira seus dados</p>
                </Left>
                <div>
                    <form onSubmit={handleSubmit}>
                        <InputGroup>                    
                            <label htmlFor="email">E-mail ou telefone:</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {emailError && <span style={{ color: "red" }}>{emailError}</span>}

                            <label htmlFor="password">Senha:</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {passwordError && <span style={{ color: "red" }}>{passwordError}</span>}

                            <label htmlFor="confirm-password">Confirmar Senha:</label>
                            <input
                                id="confirm-password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            {confirmPasswordError && <span style={{ color: "red" }}>{confirmPasswordError}</span>}
                        </InputGroup>
                        <Buttons>
                            <div>
                                <button type="submit" disabled={loading}>
                                    {loading ? 'Criando conta...' : 'Avançar'}
                                </button>
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
                    <a href="/exemplo">Ajuda</a>
                    <a href="/exemplo">Privacidade</a>
                    <a href="/exemplo">Termos</a>
            </Footer>
        </Container>
    );
}

export default SignUp;