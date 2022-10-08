import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';


const Pokemon = () => {


    const [poke, setPokemones] = useState([]);
    const [name, setName] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        const getAPI = async () => {
            try {
                const resp = await fetch("https://pokeapi.co/api/v2/pokemon/");
                const datos = await resp.json();

                if (datos) {

                    setPokemones(datos.results);
                }
                else {
                    throw new Error('Something went wrong');
                }
            } catch (error) {
                // console.log("error en la solicitud", error)
                alert('No se puede mostrar la informacion solicitada')

            }

        };
        getAPI();
    }, [name]);

    const goPokemon = () => {
        navigate(`/pokemon/${name}`);
    }
    return (
        <>
            <Container className='my-4'>
                <h1>Selecciona un Pokemón</h1>
                <select className='pokeSearch my-4' onChange={(e) => setName(e.target.value)}>
                    <option value="">Pokemones</option>
                    {poke.map((character, index) => (
                        <option key={index} value={character.id}>{character.name}</option>
                    ))}

                </select>
                <br />
                <Button variant="dark" onClick={goPokemon} >Buscar </Button>
            </Container>
        </>

    )
}

export default Pokemon