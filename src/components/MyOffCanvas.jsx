import React, { useState } from 'react';
import { BsGrid3X3GapFill} from 'react-icons/bs';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <BsGrid3X3GapFill id='icon' size={23} onClick={handleShow} />
      
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Work</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
          

    <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
          </div>
          <div>

          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function MyOffCanvas() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default MyOffCanvas;