import React, { useContext, useState } from 'react';
import { ColumForm, Container, ImageContainer, SemiContainerInputs, StyledButton, StyledImame } from "./styles";
import { globalContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { FailNotifications, SucssesNotifications } from '../../components/Notifications';
import { FloatLabel } from '../../components/FloatLabel';
import granito from '../../assets/granito.png';
import { Title } from '../../components/Title/index';

export const LoginScreen = () => {
    const { dispatch } = useContext(globalContext);
    const navigate = useNavigate();

    const [login, setLogin] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin((prevLogin) => ({
            ...prevLogin,
            [name]: value,
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const apiLogin = 'http://localhost:8000/login/';
            const request = await fetch(apiLogin, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(login),
            });
            const response = await request.json();
            console.log(response);
            const { token, user, superUser, id } = response;

            if (token){
                dispatch({type: 'autentication', payload: token, username: user, isSuperUser: superUser, user: id});
                navigate('/Home/');
                SucssesNotifications('Autenticado com sucecesso')
            }

            if (!request.ok){
                FailNotifications('Credênciais Inválidas');
            }

        }catch(e){
            console.log(`Erro na api: ${e}`);
        }
    };

    return (
        <div className="LoginScreen">
            <Container>
                <ImageContainer>
                        <StyledImame src={granito} alt="" />
                </ImageContainer>
                <SemiContainerInputs>
                    <div style={{
                        width: '100%',
                        textAlign: 'center',
                    }}>
                        <Title>Stone CO.</Title>
                    </div>

                    <ColumForm onSubmit={handleLogin} method='POST'>

                        <FloatLabel type="text" name="username" text="Nome de Usuário" onChange={handleChange} value={login.username} />
                        <FloatLabel type='password' text="Senha" required name="password" onChange={handleChange} value={login.password} />

                        <StyledButton type="submit">Entrar</StyledButton>
                    </ColumForm>
                </SemiContainerInputs>
            </Container>
        </div>
    );
};