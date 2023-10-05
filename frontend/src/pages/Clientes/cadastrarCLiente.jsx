import { useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { Cliente } from "../../models/Cliente";
import { globalContext } from "../../context/context";
import { FailNotifications, SucssesNotifications } from "../../components/Notifications";
import { useNavigate } from "react-router-dom";

export const CadastrarCLientePage = () => {
    const [cliente, setCliente] = useState(new Cliente());
    const { state } = useContext(globalContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCliente({...cliente, [name]: value});
    }

    const handleCadastraCliente = async (e) => {
        e.preventDefault();

        const request = await fetch('http://localhost:8000/clientes/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${state.token}`,
            },
            body:JSON.stringify(cliente),
        });

        if (request.ok) {
            SucssesNotifications('Cadastrado com Sucesso');
            navigate('/Clientes/');

        }else{
            FailNotifications('Erro ao cadastrar')
        }

    };

    return(
        <>
            <Title>Cadastrar Cliente</Title>
            <form>
                <input type="text" name="nome" onChange={handleChange}/> <br />
                <input type="text" name="cpf" onChange={handleChange}/> <br />
                <textarea name="endereco" id="" cols="30" rows="3" onChange={handleChange}></textarea><br />
                <input type="date" name="data_nascimento" onChange={handleChange}/><br />
                <input type="email" name="email" onChange={handleChange}/><br />

                <Button action={handleCadastraCliente}>Cadastrar</Button>

            </form>
        </>
    );
};