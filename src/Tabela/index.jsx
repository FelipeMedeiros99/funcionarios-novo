import './index.css'
import TelaCadastro from '../TelaCadastro'
import { useState } from 'react'


const Tabela = (props) => {
    const { 
        dadosGerais,
        setDadosGerais, 
        setIndiceDoFuncionarioASerEditado, 
        setAtivadorDaTelaDeCadastro, 
    } = props


    const editarEsteFuncionario = (index) =>{
        setIndiceDoFuncionarioASerEditado(index)
        setAtivadorDaTelaDeCadastro(true)
    }


    const apagarEsteFuncionario = (index) =>{
        let copiaDosDados = [...dadosGerais]
        copiaDosDados.splice(index, 1)
        setDadosGerais([...copiaDosDados])
    }


    const cadastrarNovoFuncionario = () =>{
        setAtivadorDaTelaDeCadastro(true)
        setIndiceDoFuncionarioASerEditado(null)
    }

    return (

        <div className="tabela">
            <div className="linha topo">
                <span className="nome">Nome</span>
                <span className="idade">Idade</span>
                <span className='icones'></span>
            </div>

            {dadosGerais.map((dadoFuncionario, index) => (
                <div key={index} className={index % 2 === 0 ? 'linha par' : 'linha impar'} >
                    <span className="nome">{dadoFuncionario.Nome}</span>
                    <span className="idade">{dadoFuncionario.Idade}</span>
                    <span className="icones">
                        <ion-icon name="create-outline" onClick={()=>editarEsteFuncionario(index)}></ion-icon>
                        <ion-icon name="trash-outline" onClick={()=>apagarEsteFuncionario(index)}></ion-icon>
                    </span>
                </div>
            ))}

            <button onClick={cadastrarNovoFuncionario}>NOVO</button>            
        </div>
    )
}

export default Tabela