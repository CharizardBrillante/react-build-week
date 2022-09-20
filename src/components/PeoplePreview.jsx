
import { Container, Row, Col, Button } from "react-bootstrap"

const PeoplePreview = (props) => {
    return (
        <Container className="people-preview">
            <Row>
                <Col className="mx-0">
                    <img src={props.imgUrl} alt={`${props.name}'s profile`}/>
                </Col>
                <Col className="mx-0">
                    <h5>{props.name}</h5>
                    <p>{props.workPosition}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button bg="transparent">Connect</Button>
                </Col>    
            </Row>
        </Container>
    )
}

export default PeoplePreview
