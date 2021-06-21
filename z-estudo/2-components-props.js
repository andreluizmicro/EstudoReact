import React from 'react';

function Avatar(props) {
    return (
        <div className="avatar">
            <img src={props.user.url} alt={props.user.name} />
            <br />
            <span>{props.user.name}</span>

            <hr />
            <h1>Exemplo 2</h1>
            <div style={{ backgroundColor: '#FF0000', borderRadius: 10 }}>
                <img style={{ width: 50, height: 50 }} src={props.user.url} alt={props.user.name} />
                <br />
                <span>{props.user.name}</span>
            </div>

        </div>
    );
}

function App() {
    let user = {
        url: "https://www.google.com.br/google.jpg",
        name: "André Luiz"
    };


    return <>
        {/* <Avatar url={user.url} name={user.name} /> */}
        <Avatar user={user} />
    </>
}

export default App;