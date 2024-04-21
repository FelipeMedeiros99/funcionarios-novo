import { useState, useEffect } from 'react'

import InformacoesEndereco from './InformacoesEndereco'

import './index.css'


const modeloEndereco = { Identificador: '', Numero: '', Logradouro: '', Complemento: '', Cidade: '', Estado: '', Bairro: '' }

const TelaCadastro = ({dados, setDados}) => {
    const [informacoesEnderecoInput, setInformacoesEnderecoInput] = useState([{...modeloEndereco}])
    const [informacoesPessoais, setInformacoesPessoais] = useState({Nome:'', Idade:'', Endereco:''})

    const adicionarEndereco = () => {
        setInformacoesEnderecoInput([...informacoesEnderecoInput, modeloEndereco])
    }

    const editaDadosPessoais = (elemento) =>{
        let nome = elemento.target.name
        let valor = elemento.target.value
        let copiaInformacoesPessoais = {...informacoesPessoais}
        copiaInformacoesPessoais[nome] = valor
        setInformacoesPessoais({...copiaInformacoesPessoais})
    }

    const verObjeto = () => console.log(informacoesPessoais)

    const salvarObjeto = () => {

        let copiaInformacoes = {...informacoesPessoais}
        copiaInformacoes.Endereco = [...informacoesEnderecoInput]
        let copiaDados = [...dados]
        copiaDados.push(copiaInformacoes)
        setDados([...copiaDados])
    }

    
    return (
        <div className="tela-cadastro">
            <p>dados pessoais:</p>
            <div className="linha">
                <p>nome:</p><input type="text" placeholder="" name='Nome' onChange={editaDadosPessoais} value={informacoesPessoais.Nome}/>
            </div>
            <div className="linha">
                <p>idade:</p><input type="text" placeholder="" name='Idade' onChange={editaDadosPessoais} value={informacoesPessoais.Idade}/>
            </div>

            <div className='endereco'>
                <p>informações de endereço:</p>
                <InformacoesEndereco 
                    informacoesEnderecoInput={informacoesEnderecoInput}
                    setInformacoesEnderecoInput={setInformacoesEnderecoInput}
                />
                <button onClick={adicionarEndereco}>adicionar endereço</button>
                <button onClick={salvarObjeto}>Salvar</button>

            </div>


        </div>
    )
}

export default TelaCadastro