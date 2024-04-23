import { useState, useEffect } from 'react'

import InformacoesEndereco from './InformacoesEndereco'
import InformacoesPessoais from './InformacoesPessoais'

import './index.css'


const modeloEndereco = { Identificador: '', Numero: '', Logradouro: '', Complemento: '', Cidade: '', Estado: '', Bairro: '' }

const TelaCadastro = (props) => {

    const {setTelaCadastroAtiva, 
           indice, 
           dados, 
           setDados, 
           telaAtiva, 
           informacoesEnderecoInput, 
           setInformacoesEnderecoInput, 
           informacoesPessoais, 
           setInformacoesPessoais} = props

        console.log(informacoesEnderecoInput)
        console.log(informacoesPessoais)
    console.log(indice)
    
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
        if(indice===null){
            console.log('estou aqui')
            setInformacoesEnderecoInput([{...modeloEndereco}])
            setInformacoesPessoais({Nome:'', Idade:'', Endereco:''})
        }else{
            console.log('fui renderizado')
            setInformacoesEnderecoInput([...dados[indice].Endereco])
            setInformacoesPessoais({...dados[indice], Endereco:''})
        }
    },[indice])
    
    
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