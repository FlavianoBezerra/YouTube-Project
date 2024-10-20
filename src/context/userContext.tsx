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
            // Lança o erro para que o handleSubmit possa lidar com ele
            throw error;
        }
    };    

    const handleRegister = (email: string, password: string, name: string) => {
        api.post('/user/sign-up', { email, password, name })
            .then(({ data }) => {
                localStorage.setItem('token', data.token);
                setToken(data.token);
                getUser(data.token);
            })
            .catch((error) => {
                console.log('Não foi possível fazer o cadastro', error);
            });
    }

    return(
        <UserContext.Provider value={{ login, user, handleLogin, logOut, handleRegister }}>
            {children}
        </UserContext.Provider>
    )
};