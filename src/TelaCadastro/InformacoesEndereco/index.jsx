import { useEffect, useState } from "react"

import '../index.css'
{/* <input type="text"
onChange={alteraInput}0
name={elementos.elemento}
value={inputsDeEndereco[index].elemento}
/> */}






const InformacoesEndereco = (props) => {
    const { 
            editarInput,
            inputsDeEndereco, 
            setInputsDeEndereco, 
            indiceDoFuncionarioASerEditado,
            dadosGerais,
            modeloEndereco,
            // adicionarNovoEndereco, 
            // setAdicionarNovoEndereco, 
            // setComponentesDeAtivacao,
        } = props


    const dadosDeEnderecoDoFuncionario =  indiceDoFuncionarioASerEditado===null?
                                          [modeloEndereco]:
                                          dadosGerais[indiceDoFuncionarioASerEditado].Endereco

    
    const ativarEdicaoDeEndereco = (novoIndice, endereco) =>{
        console.log('botao1')
        // setAdicionarNovoEndereco(false)
        // setComponentesDeAtivacao({indice:novoIndice, visibilidade:true, endereco:endereco})
    }
    
    const apagarEndereco = (indice)=>{
        console.log('botao2')
        // let copia = [...inputsDeEndereco]
        // copia.splice(indice, 1)
        // setInputsDeEndereco([...copia])
    }


    // useEffect(()=>{
    //     if(adicionarNovoEndereco){
    //         ativarEdicaoDeEndereco(inputsDeEndereco.length-1, inputsDeEndereco[inputsDeEndereco.length-1])
    //         setAdicionarNovoEndereco(false)
    //     }
    //     }, [adicionarNovoEndereco])

    return (
        <div className="endereco tabela">
            <div className="linha topo">
                <span>id</span> 
                <span>tipo</span>
            </div>
            {dadosDeEnderecoDoFuncionario.map((endereco, index) => (
                <div key={index} className={index%2===0?"linha par": 'linha impar'}>
                    <span className="id">{index+1}</span>
                    <span className="identificador">{endereco.Identificador}</span>
                    <span className="icones">
                        <ion-icon name="create-outline" onClick={()=>ativarEdicaoDeEndereco(index, endereco)} ></ion-icon>
                        <ion-icon name="trash-outline" onClick={()=>apagarEndereco(index)}></ion-icon>
                    </span>
                </div>
            
            ))}
        
        </div>
    )
}


export default InformacoesEndereco