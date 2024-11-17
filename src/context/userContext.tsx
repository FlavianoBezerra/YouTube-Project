import { createContext, useEffect, useState, useCallback } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [userVideos, setUserVideos] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token') as string);

    const getVideos = useCallback(async (token: string, user_id: string) => {
        try {
            console.log('Buscando vídeos para o usuário:', user_id);
            const response = await api.get(`/videos/get-video/${user_id}`, { headers: { authorization: token } });
    
            console.log('Resposta do servidor:', response); // Veja a resposta completa
            if (response.status === 200) {
                if (response.data && response.data.videos) {
                    console.log('Vídeos encontrados:', response.data.videos);
                    setUserVideos(response.data.videos);
                } else {
                    console.log('Nenhum vídeo encontrado para este usuário.');
                }
            } else {
                console.log('Erro na resposta do servidor, status:', response.status);
            }
        } catch (error) {
            console.log('Erro ao buscar vídeos', error);
        }
    }, []);    

    const createVideos = async (token: string, user_id: string, videoTitle: string, videoDescription: string, imageUrl: string, post_time: Date) => {
        try {
            // Garantir que o post_time esteja em formato ISO, '2024-11-11T02:12:44.411Z'
            const formattedPostTime = post_time.toISOString();
            const response = await api.post(`/videos/create-video/${user_id}`, { user_id, videoTitle, videoDescription, imageUrl, post_time: formattedPostTime }, { headers: { Authorization: token } });
            if (response.status === 200) {
                alert('Vídeo enviado com sucesso!');
                getUser(token);
            } else {
                alert('Erro ao enviar vídeo, tente novamente.');
                console.error(`Resposta do servidor: ${response.status} - ${response.statusText}`);
            }
        } catch (error: any) {
            if (error.response) {
                console.error('Erro na resposta do servidor:', error.response);
                alert(`Erro no servidor: ${error.response.status} - ${error.response.data.message || 'Tente novamente mais tarde.'}`);
            } else if (error.request) {
                console.error('Erro na requisição:', error.request);
                alert('Erro ao se comunicar com o servidor. Verifique sua conexão.');
            } else {
                console.error('Erro desconhecido:', error.message);
                alert('Erro desconhecido. Tente novamente mais tarde.');
            }
        }
    };    

    const getUser = useCallback(async (token: string) => {
        try {
            const response = await api.get('/user/get-user', { headers: { Authorization: token } });
            if (response.status === 200) {
                setUser(response.data.user);
                setLogin(true);
                getVideos(token, response.data.user.id);
            }
        } catch (error) {
            console.log('Usuário não autenticado', error);
        }
    }, [getVideos]);

    useEffect(() => {
        if (token) {
            getUser(token);
        }
    }, [token, getUser]);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
        setUserVideos([]);
    };

    const handleLogin = async (email: string, password: string) => {
        try {
            const { data } = await api.post('/user/sign-in', { email, password });
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
            navigate('/');
            return data;
        } catch (error) {
            console.log('Não foi possível fazer o login:', error);
        }
    };

    const handleRegister = (email: string, password: string, name: string) => {
        return api.post('/user/sign-up', { email, password, name })
            .then(({ data }) => {
                localStorage.setItem('token', data.token);
                setToken(data.token);
                getUser(data.token);
                return data;
            })
            .catch((error) => {
                console.log('Não foi possível fazer o cadastro', error);
                throw error;
            });
    };

    return (
        <UserContext.Provider value={{ token, login, user, handleLogin, logOut, handleRegister, createVideos, userVideos }}>
            {children}
        </UserContext.Provider>
    );
};