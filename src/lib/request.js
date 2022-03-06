const URL = "https://pokeapi.co/api/v2/pokemon/";

class Http{
    static instance = new Http()

    get_pokemons = async() =>{
        try{
            const request = await fetch (`${URL}?limit=100`)
            const response = await request.json()
            return response.results

        }catch(err){
            throw new Error(err);
        }
    }
    get_pokemon = async(id) => {
        try{
            const request = await fetch (`${URL}${id}/`)
            const response = await request.json()
            return response

        }catch(err){
            throw new Error(err);
        }
    }
}
export default Http;