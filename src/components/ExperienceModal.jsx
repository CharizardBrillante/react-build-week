import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ExperiencesModal = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es: CEO, CTO, Founder etc..."
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company name..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert company location"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId=""
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

/* render(<Example />); */
export default ExperiencesModal;