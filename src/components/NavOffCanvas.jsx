import { ListGroup, Offcanvas } from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai'

const NavOffCanvas = (props) => {

    return (
        <Offcanvas {...props}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Work</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ListGroup>
                    <ListGroup.Item>
                        <h5>Linkedin Business Services</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h6>Talent Solutions</h6>
                        <span className='off-canvas-subtitle'>
                            Find, attract and recruit talent
                        </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h6>Sales Solutions</h6>
                        <span className='off-canvas-subtitle'>
                            Unlock sales opportunities
                        </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h6>Post a job for free</h6>
                        <span className='off-canvas-subtitle'>
                            Get your job in front of quality candidates
                        </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h6>Marketing Solutions</h6>
                        <span className='off-canvas-subtitle'>
                            Acquire customers and grow your business
                        </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h6>Learning Soluitions</h6>
                        <span className='off-canvas-subtitle'>
                            Develop talent across your organization
                        </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>Create a Company Page <AiOutlinePlus/></h5>
                    </ListGroup.Item>
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default NavOffCanvas;
