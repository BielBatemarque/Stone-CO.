import { useParams } from "react-router-dom";
import { Title } from "../../components/Title";
import { useEffect, useState } from "react";
import { Estoque } from '../../models/Estoque';
import { FundoForm, FundoTitle, StyledForm } from '../Clientes/styles';


export const MaisInformacoesEstoque = () => {
    const [estoque, setEstoque] = useState(new Estoque());
    const { id } = useParams(':id');
    const [material, setMaterial] = useState({});

    const handleLoadEstoque = async () => {
        const request = await fetch(`http://localhost:8000/estoques/${id}/`);
        const response = await request.json();
    
        if (response.material) {
            setEstoque(response);
            const requestMaterial = await fetch(`http://localhost:8000/materiais/${response.material}/`);
            const responseMaterial = await requestMaterial.json();
            setMaterial(responseMaterial);
        } else {
            console.error("Propriedade 'material' não encontrada na resposta da primeira requisição.");
        }
    };



    useEffect(() => {
        handleLoadEstoque();
    }, []);

    return(
        <>
            <FundoTitle>
                <Title mt={0}>Estoque: {material.nome}</Title>
            </FundoTitle>
            <FundoForm>
                <p style={{margin: '0'}}>Quantidade de metros: {estoque.quantidade_metros}</p>
            </FundoForm>
        </>
    );
};