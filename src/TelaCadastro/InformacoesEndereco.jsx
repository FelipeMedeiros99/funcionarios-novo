import { useState } from "react"

import './index.css'

{/* <input type="text"
onChange={alteraInput}0
name={elementos.elemento}
value={informacoesEnderecoInput[index].elemento}
/> */}

const InformacoesEndereco = ({ informacoesEnderecoInput, setInformacoesEnderecoInput }) => {
    // console.log(console.log(informacoesEnderecoInput))

    return (
        <div className="endereco">
            {informacoesEnderecoInput.map((endereco, index) => (
                Object.keys(endereco).map((chave) =>(
                    <div className="linha">
                        <p>{chave}:</p>
                        <input type="text" 
                                value={informacoesEnderecoInput[index][chave]} 
                                name={chave}
                                onChange={(elemento) => {
                                    const nome = elemento.target.name
                                    const valor = elemento.target.value

                                    let copiaEndereco = [...informacoesEnderecoInput]
                                    copiaEndereco[index][nome] = valor
                                    setInformacoesEnderecoInput([...copiaEndereco]) 
                                }}
                                />
                    </div>
                ))
            ))}
        </div>
    )
}


export default InformacoesEndereco