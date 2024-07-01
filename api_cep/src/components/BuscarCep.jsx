import { useState } from "react"

export default function BuscarCep(){
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)

    const [erro, setErro] = useState(null)


    const fetchLocalizacao = async() => {
        try{
            const response = await fetch(` https://viacep.com.br/ws/${cep}/json/`)
            const Localizacao = await response.json()
            setEndereco(Localizacao)
        }catch(error){
            setErro(error)

        }
    }
    return(
            <div className="container-busca">
                <h1>Buscar endereço por CEP</h1>
                <input type="text" value={cep} placeholder="Digite aqui" 
                onChange={(e) => setCep(e.target.value)}/>
                <button onClick={fetchLocalizacao}>Buscar</button>
                {erro && (
                    <div>
                        <p>
                            CEP não encontrado
                        </p>
                    </div>

                )}
                {endereco && (
                    <div className="endereco">
                    <h1 className="title" >CEP - Endereço</h1>
                    <p className="logradouro">Rua: {endereco.logradouro}</p>
                    <p className="bairro">Bairro: {endereco.bairro}</p>
                    <p className="localidade">Cidadade: {endereco.localidade}</p>
                    <p className="estado">Estado(uf): {endereco.uf}</p>
                    </div>
                )}
            </div>
    )
}