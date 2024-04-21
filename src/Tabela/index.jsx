import './index.css'


const Tabela = ({dados}) => {
    return (
        <div className="tabela">
            <div className="linha">
                    <span className="nome">nome</span> 
                    <span className="">idade</span>
                </div>
            {dados.map((dado) => (
                <div className="linha">
                    <span className="nome">{dado.Nome}</span> 
                    <span className="">{dado.Idade}</span>
                    <span className="icones">
                        <ion-icon name="create-outline"></ion-icon>
                        <ion-icon name="trash-outline"></ion-icon>
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Tabela