import { useEffect, useState } from "react"

import '../index.css'
import './index.css'

import EditarEndereco from "./EditarEndereco"


const InformacoesEndereco = (props) => {
    const {
        indiceDoFuncionarioASerEditado,
        dadosGerais,
        modeloEndereco,
        inputsDeEndereco,
        setInputsDeEndereco,
    } = props


    const [ativadorDaTelaDeEditarEndereco, setAtivadorDaTelaDeEditarEndereco] = useState({ telaAtiva: false, indiceDoEndereco: null, endereco: [] })

    useEffect(() => {
        if (indiceDoFuncionarioASerEditado === null) {
            setInputsDeEndereco([])
        } else if(dadosGerais[indiceDoFuncionarioASerEditado].Endereco.length>0){
            const copiaFuncionario = {...dadosGerais[indiceDoFuncionarioASerEditado]}
            const copiaEndereco = JSON.parse(JSON.stringify([...copiaFuncionario.Endereco]))
            setInputsDeEndereco([...copiaEndereco])

        }else{
            setInputsDeEndereco([])
        }

    }, [setInputsDeEndereco, dadosGerais])


    const editarEndereco = (indiceDoEndereco, endereco) => {
        setAtivadorDaTelaDeEditarEndereco({ telaAtiva: true, indiceDoEndereco: indiceDoEndereco, endereco: endereco })
    }

    const apagarEndereco = (indiceDoEnderecoASerRemovido) => {
        let copiaDeEnderecos = [...inputsDeEndereco]
        copiaDeEnderecos.splice(indiceDoEnderecoASerRemovido, 1)
        setInputsDeEndereco([...copiaDeEnderecos])
    }

    const adicionarEndereco = () => {
        setInputsDeEndereco([...inputsDeEndereco, { ...modeloEndereco }])
        setAtivadorDaTelaDeEditarEndereco({...ativadorDaTelaDeEditarEndereco, telaAtiva:true, indiceDoEndereco:inputsDeEndereco.length})

    }

    return (
        <div className="endereco tabela">
            <div className="linha topo">
                <span className="id">id</span>
                <span className="identificador">tipo</span>
                <span className="icones"></span>
            </div>
            {
                inputsDeEndereco.map((endereco, index) => (
                    <div key={index} className={index % 2 === 0 ? "linha par" : 'linha impar'}>
                        <span className="id">{index + 1}</span>
                        <span className="identificador">{endereco.Identificador}</span>
                        <span className="icones">
                            <ion-icon name="create-outline" onClick={() => editarEndereco(index, endereco)} ></ion-icon>
                            <ion-icon name="trash-outline" onClick={() => apagarEndereco(index)}></ion-icon>
                        </span>
                    </div>

                ))
            }

            <ion-icon onClick={adicionarEndereco} name="add-circle-outline"></ion-icon>

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