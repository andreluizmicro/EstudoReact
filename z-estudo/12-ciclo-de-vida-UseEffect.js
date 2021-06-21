import React, { useState, useEffect } from 'react';


function App() {

    const [contagem, setContagem] = useState(0);

    // OBS!!!!
    // useEffect(() => {
    //     document.title = `Contagem : ${contagem}`;
    // }, []); 
    // SE O ARRAY COMO SEGUNDO PARAMETRO ESTIVER VAZIO A FUNÇÂO SERÁ EXECUTADA UM ÚNICA VEZ, OU SEJA RODA APENAS UMA VEZ ASSIM QUE O
    // COMPONENTE FOR PARA TELA.

    // No caso abaixo [contagem] é uma variável observadora ou observable, quando o seu valor é alterado ela executa a função anônima a esquerda
    // Então toda vez que mudar o valor de contagem a fução anônima é chamada

    useEffect(() => {
        { contagem == 0 ? document.title = `Inicou a tela` : document.title = `Contagem : ${contagem}` }
    }, [contagem]);


    function aumentarAction() {
        setContagem(contagem + 1);
    }

    return (
        <>
            <h1>Contagem: {contagem}</h1>
            <button onClick={aumentarAction}>Aumentar Número</button>
        </>
    );

}

export default App;