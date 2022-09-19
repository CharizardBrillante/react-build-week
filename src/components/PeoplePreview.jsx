import { Button } from "react-bootstrap/lib/InputGroup"
import { Container } from "react-bootstrap/lib/Tab"

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
