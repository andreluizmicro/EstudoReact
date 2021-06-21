function App() {

    const [email, setEmail] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    return (
        <>
            <Input placeholder="Digite seu e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            {email.length > 0 &&
                <div>
                    <p>A mensagem deve ter no máximo 20 caracteres</p>
                    <p>{email.length} <b>caractere{email.length == 1 ? '' : 's'}</b></p>
                </div>
            }

            <hr />
            <h2>Verificando se o usuário está logado.</h2>

            {/* {isLogged == true &&
                <button>Sair</button>
            }

            {isLogged == false &&
                <button>Fazer login</button>
            } */}

            {isLogged ? <button>Sair</button> : <button>Fazer login</button>}

        </>
    );
}

export default App;