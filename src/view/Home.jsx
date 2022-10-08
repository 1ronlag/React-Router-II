import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import Container from 'react-bootstrap/Container';
import gvsnido from '../assets/img/gvsnidogif.gif'

const Home = () => {
    return (
        <>
            <Container className='homeContainer'>
                <div className='multitext'>
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: 'Red Hat Display',
                            color: '#090909',
                            fontWeight: 800,
                            fontSize: '35px',
                        }}
                        startDelay={10}
                        Loop
                        cursorColor="FFFF"
                        multiText={[
                            'Te damos la Bienvenida Maestro Pokemón!!',
                        ]}

                        typeSpeed={50}
                
                    />
                </div>
                <img className='gengar' src={gvsnido} alt="icono pokemon" />
            </Container>
        </>
    )
}

export default Home