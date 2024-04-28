const InformacoesPessoais = (props) => {

    const {
        inputsInformacoesPessoais,
        editarInput
    } = props

    const listaDosElementosQueSeraoExibidos = ['Nome', 'Idade']

    return (
        <>
            {listaDosElementosQueSeraoExibidos.map((nomeDoComponente, index) => (
                <div key={index} className="linha">
                    <p>{nomeDoComponente}:</p>
                    <input
                        type="text"
                        name={nomeDoComponente}
                        onChange={(evento)=>editarInput(evento, nomeDoComponente)}
                        value={inputsInformacoesPessoais.nomeDoComponente} 
                        />
                </div>
            ))}
        </>
    )
}


export default InformacoesPessoais