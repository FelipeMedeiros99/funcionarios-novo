import { useEffect, useState } from "react"

import '../index.css'

import EditarEndereco from "./EditarEndereco"

{/* <input type="text"
onChange={alteraInput}0
name={elementos.elemento}
value={inputsDeEndereco[index].elemento}
/> */}

const InformacoesEndereco = (props) => {
    const { 
        indiceDoFuncionarioASerEditado, 
        dadosGerais,
        modeloEndereco,
        inputsDeEndereco,
        setInputsDeEndereco,
        // editarInput,
        // setInputsDeEndereco, 
        // adicionarNovoEndereco, 
        // setAdicionarNovoEndereco, 
        // setComponentesDeAtivacao,
        } = props


        
    const [ativadorDaTelaDeEditarEndereco, setAtivadorDaTelaDeEditarEndereco] = useState({telaAtiva:false, indiceDoEndereco:null, endereco:[]}) 
     
    useEffect(()=>{
            if(indiceDoFuncionarioASerEditado===null){
                setInputsDeEndereco([{...modeloEndereco}])
            }else{
                const copiaEndereco = [JSON.parse(JSON.stringify(...dadosGerais[indiceDoFuncionarioASerEditado].Endereco))]
                setInputsDeEndereco([...copiaEndereco])
            }

    }, [])

    
    const editarEndereco = (indiceDoEndereco, endereco) =>{
        setAtivadorDaTelaDeEditarEndereco({telaAtiva:true, indiceDoEndereco:indiceDoEndereco, endereco:endereco})
    }
    
    const apagarEndereco = (indiceDoEnderecoASerRemovido)=>{
        console.log('apagar endereco')
        let copiaDeEnderecos = [...inputsDeEndereco]
        copiaDeEnderecos.splice(indiceDoEnderecoASerRemovido, 1)
        setInputsDeEndereco([...copiaDeEnderecos])
    }

    const adicionarEndereco =() =>{
        console.log('adicionar endereco')
    }

    // useEffect(()=>{
    //     if(adicionarNovoEndereco){
    //         editarEndereco(inputsDeEndereco.length-1, inputsDeEndereco[inputsDeEndereco.length-1])
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
                <div key={index} className={index%2===0?"linha par": 'linha impar'}>
                    <span className="id">{index+1}</span>
                    <span className="identificador">{endereco.Identificador}</span>
                    <span className="icones">
                        <ion-icon name="create-outline" onClick={()=>editarEndereco(index, endereco)} ></ion-icon>
                        <ion-icon name="trash-outline" onClick={()=>apagarEndereco(index)}></ion-icon>
                    </span>
                </div>
            
            ))}
            <button onClick={adicionarEndereco}><ion-icon name="add-circle-outline"></ion-icon></button>
        
            
            <EditarEndereco 
                setAtivadorDaTelaDeEditarEndereco={setAtivadorDaTelaDeEditarEndereco}
                indiceDoFuncionarioASerEditado={indiceDoFuncionarioASerEditado}
                ativadorDaTelaDeEditarEndereco={ativadorDaTelaDeEditarEndereco}
                inputsDeEndereco={inputsDeEndereco}
                setInputsDeEndereco={setInputsDeEndereco}
                dadosGerais={dadosGerais}
                modeloEndereco={modeloEndereco}
            />

        </div>
    )
}


export default InformacoesEndereco