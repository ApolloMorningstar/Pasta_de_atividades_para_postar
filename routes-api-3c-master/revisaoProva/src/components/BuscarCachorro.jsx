import { useState, useEffect } from "react"

export default function BuscarCachorro() {
    const [id, setId] = useState(1)
    const [cachorro, setCachorro] = useState(null)
    // const [ pesquisa, setpesquisa] = useState

    const fetchData = async () => {
        try{
            const response = await fetch(`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1&id=${id}`)
            const data = await response.json()
            setCachorro(data[0].url)
        }catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [id])
    //useEffect acontece quando é feita a conexão com a API, retornando os dados do Cachorro a partir do ID
    
    const nextCachorro = () =>{
        setId(id + 1)
    }
    const previousCachorro = () =>{
        setId(id-1)
    }
    return (
        
        <div>
            
               {cachorro && (                
                    <div className="container-character">
                        <h1 className="title" >Visualizar Cachorros</h1>
                        <img className="cachorro-image" src={cachorro}  />
                    <div>
                    </div>
                        <div className="buttons">
                        <button className="botaoproximovoltar" onClick={previousCachorro}>Voltar</button>
                        <button className="botaoproximovoltar" onClick={nextCachorro}>Próximo</button>
                        </div>
                    </div>
            )}
        </div>
    )
}