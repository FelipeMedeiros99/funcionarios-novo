import { useState, useEffect } from 'react'

import InformacoesPessoais from './InformacoesPessoais'
import InformacoesEndereco from './InformacoesEndereco'

import './index.css'


const TelaCadastro = (props) => {

    const { 
            ativadorDaTelaDeCadastro,
            setAtivadorDaTelaDeCadastro,
            inputsInformacoesPessoais,
            setInputsInformacoesPessoais,
            inputsDeEndereco,
            setInputsDeEndereco,
            indiceDoFuncionarioASerEditado,
            dadosGerais,
            setDadosGerais,
            modeloEndereco,
        } = props



    const salvarInputsInformacoesPessoais = () =>{
        const copiaDadosGerais = [...dadosGerais]
        
        if(indiceDoFuncionarioASerEditado===null){
            copiaDadosGerais.push(inputsInformacoesPessoais)
            copiaDadosGerais[copiaDadosGerais.length-1].Endereco = JSON.parse(JSON.stringify([...inputsDeEndereco]))
        }else{
            copiaDadosGerais[indiceDoFuncionarioASerEditado] = {... inputsInformacoesPessoais}
            copiaDadosGerais[indiceDoFuncionarioASerEditado].Endereco = [... inputsDeEndereco]
        }
    
        setDadosGerais([...copiaDadosGerais])
        fecharTelaDeCadastro()
    }

    const fecharTelaDeCadastro = () =>{
        setAtivadorDaTelaDeCadastro(false)
    }

    return (
        ativadorDaTelaDeCadastro ? (
            <div className="container-tela-cadastro">
                <div className="tela-cadastro">
                    <div className='dados-pessoais'>
                        <h2>DADOS</h2>
                        <InformacoesPessoais
                            inputsInformacoesPessoais={inputsInformacoesPessoais}
                            setInputsInformacoesPessoais={setInputsInformacoesPessoais}
                            dadosGerais={dadosGerais}
                            indiceDoFuncionarioASerEditado={indiceDoFuncionarioASerEditado}
                            modeloEndereco={modeloEndereco}
                        />
                    </div>

                    <div className='endereco'>
                        <h2>ENDEREÇO</h2>
                        <InformacoesEndereco
                            inputsDeEndereco={inputsDeEndereco}
                            setInputsDeEndereco={setInputsDeEndereco}
                            indiceDoFuncionarioASerEditado={indiceDoFuncionarioASerEditado}
                            dadosGerais={dadosGerais}
                            modeloEndereco={modeloEndereco}
                        />

                        <div className="botoes">
                            <button onClick={salvarInputsInformacoesPessoais}>Salvar</button>
                            <button onClick={fecharTelaDeCadastro}>cancelar</button>
                        </div>
                    </div>
                </div>


            </div>
        ) : (<></>)
    )
}

export default TelaCadastro