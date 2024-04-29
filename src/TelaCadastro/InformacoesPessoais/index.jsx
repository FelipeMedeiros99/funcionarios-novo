const InformacoesPessoais = (props) => {

    const {
        inputsInformacoesPessoais,
        setInputsInformacoesPessoais,
        editarInput,
        dadosGerais,
        indiceDoFuncionarioASerEditado
    } = props

    const listaDosElementosQueSeraoExibidos = ['Nome', 'Idade']
    // console.log(dadosGerais[indiceDoFuncionarioASerEditado])
    setInputsInformacoesPessoais(dadosGerais[indiceDoFuncionarioASerEditado])
    // console.log(indiceDoFuncionarioASerEditado)
    // console.log(inputsInformacoesPessoais)
    
    return (
        <>
            {listaDosElementosQueSeraoExibidos.map((nomeDoComponente, index) => (
                <div key={index} className="linha">
                    {console.log(inputsInformacoesPessoais)}
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