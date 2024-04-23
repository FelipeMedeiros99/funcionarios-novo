import { createRoot } from 'react-dom/client'
import { useState } from 'react'

import data from './data'
import Tabela from './Tabela'
import TelaCadastro from './TelaCadastro'

import "./styles/reset.css"
import './styles/index.css'


const App = () =>{

  const [dados, setDados] = useState(data)
  const [telaCadastroAtiva, setTelaCadastroAtiva] = useState(false)
  const [indice, setIndice] = useState(null)
  const [informacoesEnderecoInput, setInformacoesEnderecoInput] = useState([])
  const [informacoesPessoais, setInformacoesPessoais] = useState({})

  return (
    <>
      <Tabela dados={dados} 
              setDados={setDados} 
              setTelaCadastroAtiva={setTelaCadastroAtiva}
              setIndice={setIndice}
              setInformacoesEnderecoInput={setInformacoesEnderecoInput}
              setInformacoesPessoais={setInformacoesPessoais}/> 

      <TelaCadastro indice={indice} 
                    dados={dados} 
                    setDados={setDados} 
                    telaAtiva={telaCadastroAtiva}
                    setTelaCadastroAtiva={setTelaCadastroAtiva}
                    informacoesEnderecoInput={informacoesEnderecoInput}
                    setInformacoesEnderecoInput={setInformacoesEnderecoInput}
                    informacoesPessoais={informacoesPessoais}
                    setInformacoesPessoais={setInformacoesPessoais}
                    />

    </>
  )
}


const root = document.querySelector('.root')
createRoot(root).render(<App/>)