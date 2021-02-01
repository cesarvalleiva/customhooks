import { Col, Card, Button } from 'react-bootstrap'

const Character = ({ image, name, gender, status, species, created }) => {
    return ( 
        <Col md={4}>
            <Card className="mt-3 mb-3 text-center">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>
                        {name} - {gender}
                    </Card.Title>
                    <Card.Text>
                        <p> {status} - {species} </p>
                        <small>{created}</small>
                    </Card.Text>
                    <Button variant="primary" size="sm" block>
                        Ver más
                    </Button>
                </Card.Body>
            </Card>
        </Col>
     );
}
 
export default Character;