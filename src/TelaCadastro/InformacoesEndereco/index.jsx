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
            // adicionarNovoEndereco, 
            // setAdicionarNovoEndereco, 
            // setComponentesDeAtivacao,
        } = props

    console.log('inputs de endereco: ', inputsDeEndereco)

    // const apagarEndereco = (indice)=>{
    //     let copia = [...inputsDeEndereco]
    //     copia.splice(indice, 1)
    //     setInputsDeEndereco([...copia])
    // }

    // const ativarEdicaoDeEndereco = (novoIndice, endereco) =>{
    //     setAdicionarNovoEndereco(false)

    //     setComponentesDeAtivacao({indice:novoIndice, visibilidade:true, endereco:endereco})
    // }

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
            {inputsDeEndereco.map((endereco, index) => (
                <>  
                    <div className={index%2===0?"linha par": 'linha impar'}>
                        <span className="id">{index+1}</span>
                        <span className="identificador">{endereco.Identificador}</span>
                        <span className="icones">
                            <ion-icon name="create-outline" onClick={()=>ativarEdicaoDeEndereco(index, endereco)} ></ion-icon>
                            <ion-icon name="trash-outline" onClick={()=>apagarEndereco(index)}></ion-icon>
                        </span>
                    </div>
                </>
            ))}
        
        </div>
    )
}


export default InformacoesEndereco