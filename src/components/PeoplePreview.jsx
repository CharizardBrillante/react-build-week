
import { Container, Row, Col, Button } from "react-bootstrap"

const PeoplePreview = (props) => {
    return (
        <Container className="people-preview">
            <Row>
                <Col md={4} className="mx-0">
                    <img src={props.imgUrl} alt={`${props.name}'s profile`}/>
                </Col>
                <Col md={8} className="mx-0 text-left">
                    <h5>{props.name}</h5>
                    <p>{props.workPosition}</p>
                    <Button bg="transparent">Connect</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default PeoplePreview
