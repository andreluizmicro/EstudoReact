import React from 'react';

function BemVindo(props) {
    return <h1>Bem Vindo {props.nome}! Você tem {props.idade} anos. </h1>;
}

function getUsuario() {

}

function formatarNome(usuario) {
    return usuario.nome + ' ' + usuario.sobrenome;
}

function App() {
    let imagem = 'https://www.google.com.br/google.jpg';

    let usuario = {
        nome: 'André',
        sobrenome: 'Luiz',
        idade: 33
    }

    return <>
        <BemVindo nome="Marcos" idade="40" />
        <BemVindo nome="João" idade="15" />

        <div>Meu nome é: {formatarNome(usuario)} e tenho {usuario.idade} anos.</div>
        <img src={imagem} style={{ width: 250 }} />

    </>
}

export default App;