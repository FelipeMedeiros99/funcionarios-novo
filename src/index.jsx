import { createRoot } from 'react-dom/client'
import { useState } from 'react'

import data from './data'
import Tabela from './Tabela'
import TelaCadastro from './TelaCadastro'

import "./styles/reset.css"
import './styles/index.css'


const App = () =>{

  const [dados, setDados] = useState(data)
  console.log(dados)

  return (
    <>
      <Tabela dados={dados}/> 
      {/* <button onClick={cadastrar}>Adcionar</button> */}
      <TelaCadastro dados={dados} setDados={setDados}/>
    </>
  )
}


const root = document.querySelector('.root')
createRoot(root).render(<App/>)