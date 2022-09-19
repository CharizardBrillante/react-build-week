
import { Container, Row, Col, Button } from "react-bootstrap"

const PeoplePreview = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <img src={props.imgUrl} alt="proofile image"/>
                </Col>
                <Col>
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
