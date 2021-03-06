import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 400px;
    height: 30px;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #000;
`;

function App() {

    const [texto, setTexto] = useState('');

    // Função anônima
    const handleInput = (e) => {
        setTexto(e.target.value);
    }

    return (
        <>
            <label>DIgite sua mensagem:</label><br></br>
            <Input type="text" value={texto} onChange={handleInput} />
            <p>{texto}</p>
            <p>{texto.length} caracteres.</p>
        </>
    );
}

export default App;