import { useState, useEffect } from 'react'

import InformacoesEndereco from './InformacoesEndereco'
import InformacoesPessoais from './InformacoesPessoais'

import './index.css'


const modeloEndereco = { Identificador: '', Numero: '', Logradouro: '', Complemento: '', Cidade: '', Estado: '', Bairro: '' }

const TelaCadastro = ({setTelaCadastroAtiva, indice=null, dados, setDados, telaAtiva=false}) => {

    const [informacoesEnderecoInput, setInformacoesEnderecoInput] = useState([])
    const [informacoesPessoais, setInformacoesPessoais] = useState({})


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

    
    const salvarObjeto = () => {
        let copiaInformacoes = {...informacoesPessoais}
        copiaInformacoes.Endereco = [...informacoesEnderecoInput]
        let copiaDados = [...dados]
        if (indice===null){
            copiaDados.push(copiaInformacoes)
        }else{
            copiaDados[indice] = copiaInformacoes
        }
        setDados([...copiaDados])
        setTelaCadastroAtiva(false)
        
    }

    const fecharTela = () =>{
        setTelaCadastroAtiva(false)
    }



    useEffect(()=>{
        console.log('useEffect ativado')
        if(indiceAtual===null){
            console.log('novo indice igual null')
            setInformacoesEnderecoInput([{...modeloEndereco}])
            setInformacoesPessoais({Nome:'', Idade:'', Endereco:''})
        }else{
            setInformacoesEnderecoInput([...dados[indice].Endereco])
            setInformacoesPessoais({...dados[indice], Endereco:''})
        }
    },[])
    
    
    return (
        telaAtiva?(
        <div className="tela-cadastro">
            <div className='dados-pessoais'>
                <p>dados pessoais:</p>
                <InformacoesPessoais 
                    informacoesPessoais={informacoesPessoais}
                    editaDadosPessoais={editaDadosPessoais}/>
                </div>
            
            <div className='endereco'>
                <p>informações de endereço:</p>
                <InformacoesEndereco 
                    informacoesEnderecoInput={informacoesEnderecoInput}
                    setInformacoesEnderecoInput={setInformacoesEnderecoInput}
                />
                <button onClick={adicionarEndereco}>adicionar endereço</button>
                <button onClick={salvarObjeto}>Salvar</button>
                <button onClick={fecharTela}>cancelar</button>
                
            </div>


        </div>
        ):(<></>)
    )
}

export default TelaCadastro