import React from 'react';
import styled from 'styled-components';

const Site = styled.div`
    width: 400px;
    height: 400px;
    background-color: #CCC;
`;

const Title = styled.h1`
    font-size: 18px;
    padding: 5px;
`;

const Botao = styled.button`
    font-size: 19px;    
    padding: 15px;
`;

function App() {
    return (
        <Site>
            <Title>Título de teste</Title>
            <Botao>Clique aqui</Botao>
        </Site>
    );
}

export default App;