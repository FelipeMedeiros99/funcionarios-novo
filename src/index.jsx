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


  return (
    <>
      <Tabela dados={dados} 
              setDados={setDados} 
              setTelaCadastroAtiva={setTelaCadastroAtiva}
              setIndice={setIndice}/> 
      <TelaCadastro indice={indice} 
                    dados={dados} 
                    setDados={setDados} 
                    telaAtiva={telaCadastroAtiva}
                    setTelaCadastroAtiva={setTelaCadastroAtiva}
                    />

    </>
  )
}


const root = document.querySelector('.root')
createRoot(root).render(<App/>)