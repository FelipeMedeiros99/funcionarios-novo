const InformacoesPessoais = ({informacoesPessoais, editaDadosPessoais}) => {
    return (
        <>
            <div className="linha">
                <p>nome:</p><input type="text" placeholder="" name='Nome' onChange={editaDadosPessoais} value={informacoesPessoais.Nome} />
            </div>
            <div className="linha">
                <p>idade:</p><input type="text" placeholder="" name='Idade' onChange={editaDadosPessoais} value={informacoesPessoais.Idade} />
            </div>
        </>
    )
}


export default InformacoesPessoais