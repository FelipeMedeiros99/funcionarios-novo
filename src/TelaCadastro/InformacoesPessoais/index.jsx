import { useEffect, useState } from "react"

const InformacoesPessoais = (props) => {

    const {
        inputsInformacoesPessoais,
        setInputsInformacoesPessoais,
        dadosGerais,
        indiceDoFuncionarioASerEditado,
    } = props

    // console.log('dados gerais: ', dadosGerais[indiceDoFuncionarioASerEditado])
    // console.log('inputs de informacoes pessoais: ', inputsInformacoesPessoais)


    const listaDosElementosQueSeraoExibidos = ['Nome', 'Idade']

    const editarInputsDeDadosPessoais = (evento, nomeDoComponente) => {
        let valor = evento.target.value
        let copiaDeDadosInputs = { ...inputsInformacoesPessoais }
        copiaDeDadosInputs[nomeDoComponente] = valor
        setInputsInformacoesPessoais({ ...copiaDeDadosInputs })
    }


    useEffect(()=>{
        if (indiceDoFuncionarioASerEditado===null){
            setInputsInformacoesPessoais({Nome:'', Idade:'', Endereco:[]})
        }else{
            setInputsInformacoesPessoais({...dadosGerais[indiceDoFuncionarioASerEditado]})
        }

    }, [])
    
    return (
        <>
            {listaDosElementosQueSeraoExibidos.map((nomeDoComponente, index) => (
                <div key={index} className="linha">
                    <p>{nomeDoComponente}:</p>
                    <input
                        type="text"
                        onChange={(evento)=>editarInputsDeDadosPessoais(evento, nomeDoComponente)}
                        value={inputsInformacoesPessoais[nomeDoComponente]} 
                        />
                </div>
            ))}


        </>
    )
}


export default InformacoesPessoais