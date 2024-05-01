import { useEffect, useState } from 'react'
import './index.css'



const EditarEndereco = (props) => {
    const { 
        dadosGerais,
        setAtivadorDaTelaDeEditarEndereco,
        ativadorDaTelaDeEditarEndereco,
        inputsDeEndereco,
        setInputsDeEndereco,
        indiceDoFuncionarioASerEditado
        } = props       
    const {telaAtiva, indiceDoEndereco, endereco} = ativadorDaTelaDeEditarEndereco
    
    const chaves = Object.keys(endereco)




    const fecharTelaDeInformacoesDeEndereco = () =>{
        setAtivadorDaTelaDeEditarEndereco({telaAtiva:false, indiceDoEndereco:null, endereco:[]})
    }


    const cancelar = () =>{
        let copiaDadosIniciaisDoFuncionario = JSON.parse(JSON.stringify({...dadosGerais[indiceDoFuncionarioASerEditado]}))
        // let copiaDadosIniciaisDoFuncionario = {...dadosGerais[indiceDoEndereco]}
        setInputsDeEndereco([...copiaDadosIniciaisDoFuncionario.Endereco])
        fecharTelaDeInformacoesDeEndereco()
    }

    
    const salvarInformacoesDeEndereco = () =>{
        fecharTelaDeInformacoesDeEndereco()
    }

    
    const editarInputDeEndereco = (elemento, chave) =>{
        const valor = elemento.target.value
        let copiaEndereco = [...inputsDeEndereco]
        copiaEndereco[indiceDoEndereco][chave] = valor
        setInputsDeEndereco([...copiaEndereco])
    } 


    // const {indice, visibilidade, endereco} = componentesDeAtivacao
    
    // console.log(informacoesEnderecoInput)
    // console.log(indice)
    

    // const salvar = () =>{
    //     let copia = {...componentesDeAtivacao}
    //     copia.visibilidade=false
    //     setComponentesDeAtivacao({...copia})

    //     let copiaEndereco = [...informacoesEnderecoInput]
    //     setInformacoesEnderecoInput([...copiaEndereco])
    
    // }


    // const cancelar = ()=>{
    //     let copia = {...componentesDeAtivacao}
    //     copia.visibilidade=false
    //     setComponentesDeAtivacao({...copia})

    //     if(adicionarNovoEndereco){
    //         let copiaEndereco = [...informacoesEnderecoInput]
    //         copiaEndereco.pop()
    //         setInformacoesEnderecoInput([...copiaEndereco])
    //     }

    // }
    
    // const mostrar = (elemento) => {
    //     console.log(elemento)
        
    // }


    return (
        telaAtiva?(
            <div className="container-tela-de-endereco">
                <div className="tela-de-endereco">
                    <h2>EDITAR ENDEREÇO</h2>
                    {chaves.map((chave, index) => (
                        <div key={index} className = "linha" >
                            <p>{chave}:</p>
                            <input  type="text" 
                                    value={inputsDeEndereco[indiceDoEndereco][chave]} 
                                    name={chave}
                                    onChange={(elemento) => editarInputDeEndereco(elemento, chave)}  
                            />
                        </div >
                    ))}

    
                    <div className="botoes">
                        <button onClick={salvarInformacoesDeEndereco}>SALVAR</button>
                        <button onClick={cancelar}>CANCELAR</button>
                    </div>
        
                </div>
            </div>
        ):(<></>)
        )
}

export default EditarEndereco