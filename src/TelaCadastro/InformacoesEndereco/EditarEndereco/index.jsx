import './index.css'

const EditarEndereco = (props) => {
    const { 
        setAtivadorDaTelaDeEditarEndereco,
        ativadorDaTelaDeEditarEndereco,
        inputsDeEndereco,
        setInputsDeEndereco,
        } = props
               
        const {telaAtiva, indiceDoEndereco, endereco} = ativadorDaTelaDeEditarEndereco
        
        const chaves = Object.keys(endereco)
        console.log('props: ', props)



    
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
            <div className="tela-de-endereco">
                <h2>EDITAR ENDEREÇO</h2>
                {chaves.map((chave, index) => (
                    <div key={index} className = "linha" >
                        <p>{chave}:</p>
                        <input  type="text" 
                                value={inputsDeEndereco[indiceDoEndereco][chave]} 
                                name={chave}
                                onChange={(elemento) => {
                                    const valor = elemento.target.value
                                    let copiaEndereco = [...inputsDeEndereco]
                                    copiaEndereco[indiceDoEndereco][chave] = valor
                                    setInputsDeEndereco([...copiaEndereco]) 
                                }}  
                        />
                    </div >
                ))}

                {/* <div className="botoes">
                    <button onClick={salvar}>Salvar</button>
                    <button onClick={cancelar}>cancelar</button>
                    <button onClick={()=>mostrar(indice)}>mostrar</button>
                </div> */}
                <button>OK</button>
    
            </div>
        ):(<></>)
        )
}

export default EditarEndereco