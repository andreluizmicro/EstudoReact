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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // const handleEmailInput = (e) => {
    //     setEmail(e.target.value);
    // }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    }

    const handleButton = () => {
        alert(email + ' - ' + password);
    }

    return (
        <>
            <Input placeholder="Digite seu e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br><br></br>
            <Input placeholder="Digite sua senha" type="password" value={password} onChange={handlePasswordInput} /><br></br><br></br>
            <button onClick={handleButton}>Logar</button>
        </>
    );
}

export default App;