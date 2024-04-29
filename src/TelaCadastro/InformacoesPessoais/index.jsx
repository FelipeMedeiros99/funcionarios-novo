import { useEffect, useState } from "react"

const InformacoesPessoais = (props) => {

    const {
        inputsInformacoesPessoais,
        setInputsInformacoesPessoais,
        dadosGerais,
        indiceDoFuncionarioASerEditado,
    } = props

    const listaDosElementosQueSeraoExibidos = ['Nome', 'Idade']

    const editarInputsDeDadosPessoais = (evento, nomeDoComponente) => {
        let valor = evento.target.value
        let copiaDeDadosInputs = { ...inputsInformacoesPessoais }
        copiaDeDadosInputs[nomeDoComponente] = valor
        setInputsInformacoesPessoais({ ...copiaDeDadosInputs })
    }


    useEffect(()=>{
        console.log(indiceDoFuncionarioASerEditado)
        indiceDoFuncionarioASerEditado===null?
        setInputsInformacoesPessoais({Nome:'', Idade:'', Endereco:[]}):
        setInputsInformacoesPessoais(dadosGerais[indiceDoFuncionarioASerEditado])
    }, [])

    return (
        <>
            {listaDosElementosQueSeraoExibidos.map((nomeDoComponente, index) => (
                <div key={index} className="linha">
                    <p>{nomeDoComponente}:</p>
                    <input
                        type="text"
                        name={nomeDoComponente}
                        onChange={(evento)=>editarInputsDeDadosPessoais(evento, nomeDoComponente)}
                        value={inputsInformacoesPessoais[nomeDoComponente]} 
                        />
                </div>
            ))}

        </>
    )
}


export default InformacoesPessoais