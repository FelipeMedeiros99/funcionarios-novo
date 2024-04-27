import { useState } from "react"

const EditarEndereco = (props) => {
    const { informacoesEnderecoInput, 
            setInformacoesEnderecoInput,
            componentesDeAtivacao,
            setAdicionarNovoEndereco,
            setComponentesDeAtivacao,
            adicionarNovoEndereco} = props
    const {indice, visibilidade, endereco} = componentesDeAtivacao

    

    const salvar = () =>{
        let copia = {...componentesDeAtivacao}
        copia.visibilidade=false
        setComponentesDeAtivacao({...copia})

        let copiaEndereco = [...informacoesEnderecoInput]
        setInformacoesEnderecoInput([...copiaEndereco])
    
    }


    const cancelar = ()=>{
        let copia = {...componentesDeAtivacao}
        copia.visibilidade=false
        setComponentesDeAtivacao({...copia})

        if(adicionarNovoEndereco){
            let copiaEndereco = [...informacoesEnderecoInput]
            copiaEndereco.pop()
            setInformacoesEnderecoInput([...copiaEndereco])
        }

    }
    
    const mostrar = (elemento) => {
        console.log(elemento)
        
    }


    return (
        visibilidade?(
            <>
            {Object.keys(endereco).map((chave) => (
                <div className = "linha" >
                        <p>{chave}:</p>
                        <input type="text" 
                                value={informacoesEnderecoInput[indice][chave]} 
                                name={chave}
                                onChange={(elemento) => {
                                    const nome = elemento.target.name
                                    const valor = elemento.target.value
                                    let copiaEndereco = [...informacoesEnderecoInput]
                                    copiaEndereco[indice][nome] = valor
                                    setInformacoesEnderecoInput([...copiaEndereco]) 
                                }}  
                        />

                </div >
            ))}
            <div className="botoes">
                <button onClick={salvar}>Salvar</button>
                <button onClick={cancelar}>cancelar</button>
                <button onClick={()=>mostrar(props)}>mostrar</button>
            </div>
        </>
        ):(<></>)
        )
}

export default EditarEndereco