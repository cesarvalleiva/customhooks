// import { useState, useEffect } from 'react'
import { useFetch } from '../../customHooks/useFetch'
import { Row } from 'react-bootstrap'
import Character from '../Character'
import Loading from '../../Components/Loading'

const Characters = () => {
    const [data, fetching, error] = useFetch('character');
    const { results : characters} = data;
    return ( 
        <Row>
            {fetching ? (
                <Loading/>
            ) : (
                characters.map((character) => (
                    <Character key={character.id} {...character} />
                ))
            )}
        </Row>
     );
}
 
export default Characters;