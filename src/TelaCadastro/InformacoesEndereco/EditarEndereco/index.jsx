import { useEffect, useState } from 'react'
import './index.css'



const EditarEndereco = (props) => {
    const { 
        dadosGerais,
        setAtivadorDaTelaDeEditarEndereco,
        ativadorDaTelaDeEditarEndereco,
        inputsDeEndereco,
        setInputsDeEndereco,
        indiceDoFuncionarioASerEditado,
        modeloEndereco,
        } = props       
    const {telaAtiva, indiceDoEndereco, endereco} = ativadorDaTelaDeEditarEndereco
    const [copiaDadosIniciaisDoFuncionario, setCopiaDosDadosIniciais] = useState(JSON.parse(JSON.stringify({...dadosGerais[indiceDoFuncionarioASerEditado]})))
    const chaves = Object.keys(modeloEndereco)


    const fecharTelaDeInformacoesDeEndereco = () =>{
        setAtivadorDaTelaDeEditarEndereco({telaAtiva:false, indiceDoEndereco:null, endereco:[]})
    }


    const cancelar = () =>{
        
        if(indiceDoFuncionarioASerEditado===null){
            setInputsDeEndereco([{...modeloEndereco}])
            fecharTelaDeInformacoesDeEndereco()

        }else{
            const copia = [...inputsDeEndereco]
            copia.splice(copia.length-1, 1)
            setInputsDeEndereco([...copia])
            fecharTelaDeInformacoesDeEndereco()

        }
    }

    
    const salvarInformacoesDeEndereco = () =>{
        setCopiaDosDadosIniciais(JSON.parse(JSON.stringify(inputsDeEndereco)))
        fecharTelaDeInformacoesDeEndereco()
    }

    
    const editarInputDeEndereco = (elemento, chave) =>{
        const valor = elemento.target.value
        let copiaEndereco = [...inputsDeEndereco]
        copiaEndereco[indiceDoEndereco][chave] = valor
        setInputsDeEndereco([...copiaEndereco])
    } 


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