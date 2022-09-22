import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { EDIT_EXPERIENCE, NEW_EXPERIENCE } from "../redux/actions";

const ExperiencesModal = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.experiences.newExperience);

  const submitFormExperience = async (id) => {
    try {
      const res = await fetch(
        id === -1
          ? `https://striveschool-api.herokuapp.com/api/profile/${params.id}/experiences`
          : `https://striveschool-api.herokuapp.com/api/profile/${params.id}/experiences/${props.expToEdit._id}`,
        {
          method: id === -1 ? "POST" : "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWJkZjZkNzlhNTAwMTUwOTAyZWUiLCJpYXQiOjE2NjM1NzI5NjAsImV4cCI6MTY2NDc4MjU2MH0.TBiQ1Cyg8H0ysQhW1CxyB80Nbf5EaV0yPUj6tU2R9zQ",
          },
          body: JSON.stringify(formData),
        }
      );
      if (res.ok) {
        console.log(res);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    dispatch({
      type: NEW_EXPERIENCE,
      payload: { [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.expToEdit ? submitFormExperience(params.id) : submitFormExperience(-1)
    setTimeout(() => {
      props.fetchExperiences(params.id)
    }, 2000);
  };

  useEffect(() => {
    if (props.expToEdit) {
      console.log(props.expToEdit);
      dispatch({
        type: EDIT_EXPERIENCE,
        payload: {
          username: props.expToEdit.username,
          role: props.expToEdit.role,
          company: props.expToEdit.company,
          area: props.expToEdit.area,
          startDate: props.expToEdit.startDate.slice(0, 10),
          endDate: props.expToEdit.endDate.slice(0, 10),
          description: props.expToEdit.description,
        },
      });
    }
  }, [props.expToEdit]);

  return (
    <>
      <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} id="new-experience-form">
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Your username"
                value={formData.username}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                name="role"
                placeholder="Es: CEO, CTO, Founder etc..."
                value={formData.role}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                name="company"
                placeholder="Company name..."
                value={formData.company}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="area"
                placeholder="Insert company location"
                value={formData.area}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
          <Button
            type="submit"
            form="new-experience-form"
            variant="primary"
            onClick={props.onClose}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

/* render(<Example />); */
export default ExperiencesModal;
