import { useState, useEffect } from "react"

export default function RickApi() {
    const [id, setId] = useState(1)
    const [rick, setRick] = useState(null)
    // const [ pesquisa, setpesquisa] = useState

    const fetchData = async () => {
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await response.json()
            setRick(data)
        }catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [id])
    //useEffect acontece quando é feita a conexão com a API, retornando os dados do rick a partir do ID
    
    const nextRick = () =>{
        setId(id + 1)
    }
    const previousRick = () =>{
        setId(id-1)
    }
    return (
        
        <div>
            
               {rick && (                
                    <div className="container-character">
                        <h1 className="title" >Rick Morty</h1>
                        <p className="name">{rick.name}</p>
                        <p className="species">Espécies: {rick.species}</p>
                        <img className="rick-image" src={rick.image} alt={rick.name} />
                        <div>
                     <input placeholder= "Digite o nome do personagem" className= "barradepesquisa" type="text" />
                     {/* <button onClick={}>Pesquisar</button> */}
                    </div>
                        <div className="buttons">
                        <button className="botaoproximovoltar" onClick={previousRick}>Voltar</button>
                        <button className="botaoproximovoltar" onClick={nextRick}>Próximo</button>
                        </div>
                    </div>
            )}
        </div>
    )
}