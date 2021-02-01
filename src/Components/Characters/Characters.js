// import { useState, useEffect } from 'react'
import { useFetch } from '../../customHooks/useFetch'
import { Row } from 'react-bootstrap'
import Character from '../Character'

const Characters = () => {
    const [data, fetching, error] = useFetch('character');
    const { results : characters} = data;
    return ( 
        <Row>
            {fetching ? (
                <h2>Cargando</h2>
            ) : (
                characters.map((character) => (
                    <Character key={character.id} {...character} />
                ))
            )}
        </Row>
     );
}
 
export default Characters;