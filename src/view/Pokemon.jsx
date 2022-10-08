import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';


const Pokemon = () => {


    const [poke, setPokemones] = useState([]);
    const [name, setName] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        const getAPI = async () => {
            const resp = await fetch("https://pokeapi.co/api/v2/pokemon/");
            const datos = await resp.json();

            setPokemones(datos.results);
        };

        getAPI();
    }, [name]);

    const handleID = (event) => {
        const pokeId = event.target.value;
        setName(pokeId)
    }


    const goPokemon = () => {
        navigate(`/pokemon/${name}`);
    }
    return (
        <>
            <Container className='my-4'>
                <h1>Selecciona un Pokemón</h1>
                <select className='pokeSearch my-4' onChange={handleID}>
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