import './index.css'
import TelaCadastro from '../TelaCadastro'
import { useState } from 'react'


const modeloEndereco = { Identificador: '', Numero: '', Logradouro: '', Complemento: '', Cidade: '', Estado: '', Bairro: '' }

const Tabela = ({dados, setDados, setTelaCadastroAtiva, setIndice, setInformacoesEnderecoInput, setInformacoesPessoais}) => {
                                    

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
        setInformacoesEnderecoInput([{...modeloEndereco}])
        setInformacoesPessoais({Nome:'', Idade:'', Endereco:''})
        setIndice(null)
        setTelaCadastroAtiva(true)
    }


    return (
        <div className="tabela">
            <div className="linha topo">
                    <span className="nome">Nome</span> 
                    <span className="idade">Idade</span>
                    <span className='icones'></span>
                </div>
            {dados.map((dado, index) => (
                <div className={index%2===0?'linha par':'linha impar'} >
                    <span className="nome">{dado.Nome}</span> 
                    <span className="idade">{dado.Idade}</span>
                    <span className="icones">
                        <ion-icon name="create-outline" onClick={()=>editaElemento(index)}></ion-icon>
                        <ion-icon name="trash-outline" onClick={()=>apagarElemento(index)}></ion-icon>
                    </span>
                </div>
            ))}

            <button onClick={cadastrar}>NOVO</button>            
        </div>
    )
}

export default Tabela