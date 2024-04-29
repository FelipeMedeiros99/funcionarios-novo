const EditarEndereco = (props) => {
    const { 
        setAtivadorDaTelaDeEditarEndereco,
        ativadorDaTelaDeEditarEndereco
        } = props
        
        console.log(props)
        
        const {telaAtiva, indiceDoEndereco, endereco} = ativadorDaTelaDeEditarEndereco
        const chaves = Object.keys(endereco)
        console.log(chaves)



    
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
                {chaves.map((chave) => (
                    <div className = "linha" >
                            <p>{chave}:</p>
                            <input type="text" 
                                    value={endereco[indice][chave]} 
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

                {/* <div className="botoes">
                    <button onClick={salvar}>Salvar</button>
                    <button onClick={cancelar}>cancelar</button>
                    <button onClick={()=>mostrar(indice)}>mostrar</button>
                </div> */}
    
            </div>
        ):(<></>)
        )
}

export default EditarEndereco