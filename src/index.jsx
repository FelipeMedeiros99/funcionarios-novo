import { createRoot } from 'react-dom/client'
import { useState } from 'react'

import data from './data'
import Tabela from './Tabela'
import TelaCadastro from './TelaCadastro'

import "./styles/reset.css"
import './styles/index.css'

const modeloEndereco = { Identificador: '', Numero: '', Logradouro: '', Complemento: '', Cidade: '', Estado: '', Bairro: '' }

const App = () =>{
  
  const [dadosGerais, setDadosGerais] = useState(data)
  const [indiceDoFuncionarioASerEditado, setIndiceDoFuncionarioASerEditado] = useState(null)
  const [ativadorDaTelaDeCadastro, setAtivadorDaTelaDeCadastro] = useState(false)
  const [inputsDeEndereco, setInputsDeEndereco] = useState([])
  const [inputsInformacoesPessoais, setInputsInformacoesPessoais] = useState({})
  // const [componentesDeAtivacao, setComponentesDeAtivacao] = useState({indiceDoFuncionarioASerEditado:null, visibilidade:false,   endereco:''})  
  

  console.log('inputs dados pessoais: ', inputsInformacoesPessoais)
  console.log('inputs dados endereco: ', inputsDeEndereco)

  
  return ( 
    <>
      <Tabela 
        dadosGerais={dadosGerais} 
        setDadosGerais={setDadosGerais} 
        setIndiceDoFuncionarioASerEditado={setIndiceDoFuncionarioASerEditado}
        setAtivadorDaTelaDeCadastro={setAtivadorDaTelaDeCadastro}
        // setInputsDeEndereco={setInputsDeEndereco}
        // setInputsInformacoesPessoais={setInputsInformacoesPessoais}
        // setComponentesDeAtivacao={setComponentesDeAtivacao}
        // componentesDeAtivacao={componentesDeAtivacao}
      /> 

      <TelaCadastro 
        ativadorDaTelaDeCadastro={ativadorDaTelaDeCadastro}
        setAtivadorDaTelaDeCadastro={setAtivadorDaTelaDeCadastro}
        inputsInformacoesPessoais={inputsInformacoesPessoais}
        setInputsInformacoesPessoais={setInputsInformacoesPessoais}
        inputsDeEndereco={inputsDeEndereco}
        setInputsDeEndereco={setInputsDeEndereco}
        indiceDoFuncionarioASerEditado={indiceDoFuncionarioASerEditado} 
        dadosGerais={dadosGerais} 
        setDadosGerais={setDadosGerais} 
        modeloEndereco={modeloEndereco}
        // componentesDeAtivacao={componentesDeAtivacao}
        // setComponentesDeAtivacao={setComponentesDeAtivacao}
      />

    </>
  )
}


const root = document.querySelector('.root')
createRoot(root).render(<App/>)