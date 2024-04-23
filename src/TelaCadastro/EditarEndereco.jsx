const EditarEndereco = (props) => {
    const {endereco, 
           informacoesEnderecoInput, 
           setInformacoesEnderecoInput,
           componentesDeAtivacao} = props
    const {indice, visibilidade} = componentesDeAtivacao

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
        </>
        ):(<></>)
        )
}

export default EditarEndereco