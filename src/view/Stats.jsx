import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';


const PokeDetails = () => {

  const [poke, setPokemones] = useState(null);

  const { name } = useParams();


  useEffect(() => {
    const getAPI = async () => {
      try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await resp.json();
        if(data){
      setPokemones(data)
        }
        else{
          throw new Error('Something went wrong');
        }
       
      } catch (error) {
        // console.log("error en la solicitud", error)
        alert ('No se puede mostrar la informacion solicitada')
      }
    };

    getAPI();
  }, [name])
  return (
    <>
      <Container className="container">
        <h1>{name}</h1>
        {poke && (
          <>
            <Container>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`} />

              <h2 className='pokeInfo'>Información del Pokemón</h2>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>Hp</td>
                    <td>Ataque</td>
                    <td>Defensa</td>
                    <td>Special-Attack</td>
                    <td>Special-Defense</td>
                    <td>Velocidad</td>
                    <td>Tipo</td>
                  </tr>
                  <tr>
                    <td>{poke.stats[0].base_stat}</td>
                    <td>{poke.stats[1].base_stat}</td>
                    <td>{poke.stats[2].base_stat}</td>
                    <td>{poke.stats[3].base_stat}</td>
                    <td>{poke.stats[4].base_stat} </td>
                    <td>{poke.stats[5].base_stat}</td>
                    <td>{poke.types[0].type.name}</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </>
        )}
      </Container>
    </>


  );
}

export default PokeDetails