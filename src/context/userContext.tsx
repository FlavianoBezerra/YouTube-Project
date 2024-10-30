import { createContext, useEffect, useState } from "react";
import api from "../api";

export const UserContext = createContext({} as any);

export const UserStorage = ( {children}: any ) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);

    const getUser = (token: string) => {
        api.get('/user/get-user', {headers: {Authorization: token}}).then(({ data }) => {
           setUser(data.user);
           setLogin(true);
        }).catch ((error) => {
            console.log('Usuário não autenticado', error);
        })
    }

    useEffect(() => {
        getUser(token);
    },[token]);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleLogin = async (email: string, password: string) => {
        try {
            const { data } = await api.post('/user/sign-in', { email, password });
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
            return data; // Retorna os dados se necessário
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
                throw error; // Rejeita a promise com o erro
            });
    };    

    return(
        <UserContext.Provider value={{ login, user, handleLogin, logOut, handleRegister }}>
            {children}
        </UserContext.Provider>
    )
};