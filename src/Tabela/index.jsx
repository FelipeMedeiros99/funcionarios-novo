import './index.css'
import TelaCadastro from '../TelaCadastro'
import { useState } from 'react'


const Tabela = ({dados, setDados, setTelaCadastroAtiva, setIndice}) => {
                                    

    const apagarElemento = (indice) =>{
        let copiaDados = [...dados]
        copiaDados.splice(indice, 1)
        setDados([...copiaDados])
    }

    const editaElemento = (index) =>{
        setIndice(index)
        setTelaCadastroAtiva(true)
    }
    
    const cadastrar = () =>{
        setIndice(null)
        setTelaCadastroAtiva(true)
    }


    return (
        <div className="tabela">
            <div className="linha">
                    <span className="nome">nome</span> 
                    <span className="">idade</span>
                </div>
            {dados.map((dado, index) => (
                <div className="linha">
                    <span className="nome">{dado.Nome}</span> 
                    <span className="">{dado.Idade}</span>
                    <span className="icones">
                        <ion-icon name="create-outline" onClick={()=>editaElemento(index)}></ion-icon>
                        <ion-icon name="trash-outline" onClick={()=>apagarElemento(index)}></ion-icon>
                    </span>
                </div>
            ))}

            <button onClick={cadastrar}>Cadastrar</button>            
        </div>
    )
}

export default Tabela