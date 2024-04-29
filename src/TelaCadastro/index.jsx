import { useState, useEffect } from 'react'

import InformacoesPessoais from './InformacoesPessoais'
import InformacoesEndereco from './InformacoesEndereco'
// import EditarEndereco from './EditarEndereco'

import './index.css'


const TelaCadastro = (props) => {
    
    const { 
            ativadorDaTelaDeCadastro,
            inputsInformacoesPessoais,
            setInputsInformacoesPessoais,
            inputsDeEndereco,
            setInputsDeEndereco,
            indiceDoFuncionarioASerEditado,
            dadosGerais,
            setDadosGerais,
            modeloEndereco,
            // componentesDeAtivacao,
            // setComponentesDeAtivacao,
            // setAtivadorDaTelaCadastro,
        } = props


    // const [adicionarNovoEndereco, setAdicionarNovoEndereco] = useState(false)
        
    
    const editarInput = (evento, nomeDoComponente) => {
        let valor = evento.target.value
        let copiaInputsInformacoesPessoais = { ...inputsInformacoesPessoais }
        copiaInputsInformacoesPessoais[nomeDoComponente] = valor
        setInputsInformacoesPessoais({ ...copiaInputsInformacoesPessoais })
    }


    // const editarInput = (evento) => {
    //     let nome = evento.target.name
    //     let valor = evento.target.value
    //     let copiaInputsInformacoesPessoais = { ...inputsInformacoesPessoais }
        
    //     copiaInputsInformacoesPessoais[nome] = valor
    //     setInputsInformacoesPessoais({ ...copiaInputsInformacoesPessoais })
    // }


    // const adicionarEndereco = () => {   
    //     // setInputsDeEndereco([...inputsDeEndereco, modeloEndereco])
    //     setAdicionarNovoEndereco(true)
    //     let copia = {...componentesDeAtivacao}
    //     copia.indiceDoFuncionarioASerEditado = null
    //     setComponentesDeAtivacao({...copia})
    // }



    // const salvarObjeto = () => {
    //     let copiaInformacoes = { ...inputsInformacoesPessoais }
    //     copiaInformacoes.Endereco = [...inputsDeEndereco]
    //     let copiaDados = [...dados]
    //     if (indiceDoFuncionarioASerEditado === null) {
    //         copiaDados.push(copiaInformacoes)
    //     } else {
    //         copiaDados[indiceDoFuncionarioASerEditado] = copiaInformacoes
    //     }
    //     setDados([...copiaDados])
    //     setAtivadorDaTelaCadastro(false)
    // }

    // const fecharTela = () => {
    //     setAtivadorDaTelaCadastro(false)
    // }



    // useEffect(() => {
    //     if (indiceDoFuncionarioASerEditado === null) {
    //         setInputsDeEndereco([{ ...modeloEndereco }])
    //         setInputsInformacoesPessoais({ Nome: '', Idade: '', Endereco: '' })
    //     } else {
    //         setInputsDeEndereco([...dados[indiceDoFuncionarioASerEditado].Endereco])
    //         setInputsInformacoesPessoais({ ...dados[indiceDoFuncionarioASerEditado], Endereco: '' })
    //     }
    // }, [indiceDoFuncionarioASerEditado])


    return (
        ativadorDaTelaDeCadastro ? (
            <div className="container-tela-cadastro">
                <div className="tela-cadastro">
                    <div className='dados-pessoais'>
                        <h2>DADOS</h2>
                        <InformacoesPessoais
                            inputsInformacoesPessoais={inputsInformacoesPessoais}
                            setInputsInformacoesPessoais={setInputsInformacoesPessoais}
                            editarInput={editarInput} 
                            dadosGerais={dadosGerais}
                            indiceDoFuncionarioASerEditado={indiceDoFuncionarioASerEditado}
                        />
                    </div>

                    <div className='endereco'>
                        <h2>ENDEREÇO</h2>
                        <InformacoesEndereco
                            editarInput={editarInput}
                            inputsDeEndereco={inputsDeEndereco}
                            setInputsDeEndereco={setInputsDeEndereco}
                            indiceDoFuncionarioASerEditado={indiceDoFuncionarioASerEditado}
                            dadosGerais={dadosGerais}
                            modeloEndereco={modeloEndereco}
                        />

                        {/* <div className="botoes">
                            <button onClick={adicionarEndereco}>Adicionar</button>
                            <button onClick={salvarObjeto}>Salvar</button>
                            <button onClick={fecharTela}>cancelar</button>
                        </div> */}


                        {/* <EditarEndereco
                            inputsDeEndereco={inputsDeEndereco}
                            setInputsDeEndereco={setInputsDeEndereco}
                            componentesDeAtivacao={componentesDeAtivacao}
                            setComponentesDeAtivacao={setComponentesDeAtivacao}
                            setAdicionarNovoEndereco={setAdicionarNovoEndereco}
                            adicionarNovoEndereco={adicionarNovoEndereco}
                        /> */}

                    </div>
                </div>


            </div>
        ) : (<></>)
    )
}

export default TelaCadastro