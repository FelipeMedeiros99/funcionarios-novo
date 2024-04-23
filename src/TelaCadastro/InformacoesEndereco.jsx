import { useState } from "react"

import './index.css'

import EditarEndereco from './EditarEndereco'

{/* <input type="text"
onChange={alteraInput}0
name={elementos.elemento}
value={informacoesEnderecoInput[index].elemento}
/> */}

const InformacoesEndereco = ({ informacoesEnderecoInput, setInformacoesEnderecoInput }) => {
    const [componentesDeAtivacao, setComponentesDeAtivacao] = useState({indice:null, visibilidade:false})

    const apagarEndereco = (indice)=>{
        let copia = [...informacoesEnderecoInput]
        copia.splice(indice, 1)
        setInformacoesEnderecoInput([...copia])
    }

    const ativarEdicaoDeEndereco = (novoIndice) =>{
        setComponentesDeAtivacao({indice:novoIndice, visibilidade:true})
    }



    return (
        <div className="endereco tabela">
            <div className="linha topo">
                <span>id</span> 
                <span>tipo</span>
            </div>
            {informacoesEnderecoInput.map((endereco, index) => (
                <>  
                    {console.log(endereco)}
                    <div className={index%2===0?"linha par": 'linha impar'}>
                        <span className="id">{index+1}</span>
                        <span className="identificador">{endereco.Identificador}</span>
                        <span className="icones">
                            <ion-icon name="create-outline" onClick={()=>ativarEdicaoDeEndereco(index)} ></ion-icon>
                            <ion-icon name="trash-outline" onClick={()=>apagarEndereco(index)}></ion-icon>
                        </span>
                    </div>
                </>
            ))}
        <EditarEndereco
           informacoesEnderecoInput={informacoesEnderecoInput}
           setInformacoesEnderecoInput={setInformacoesEnderecoInput}
           componentesDeAtivacao={componentesDeAtivacao}
           />
        </div>
    )
}


export default InformacoesEndereco