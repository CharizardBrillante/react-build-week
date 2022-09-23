import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_USER, UPDATE_FETCHED_USERS } from "../../redux/actions";
import { imgUploader } from "../../helper/imgUploader";

const EditProfileModal = (props) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.users.userChanges);
  const [selectedFile, setSelectedFile] = useState(null);
  const token = useSelector((state) => state.loggedUser.token);
  const loggedUser = useSelector(state => state.loggedUser.loggedUser);

  const handleChange = (e) => {
    dispatch({
      type: EDIT_USER,
      payload: { [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    submitUserChanges();
  };

  const submitUserChanges = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              `Bearer ${token}`,
          },
          body: JSON.stringify(formData)
        }
      );

      if (res.ok) {
        dispatch({
          type: UPDATE_FETCHED_USERS,
          payload: res
        })
        if(selectedFile)imgUploader(selectedFile, token, 'profile', loggedUser?._id)
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    dispatch({
      type: EDIT_USER,
      payload: {
        name: props.user?.name,
        surname: props.user?.surname,
        email: props.user?.email,
        bio: props.user?.bio,
        title: props.user?.title,
        area: props.user?.area,
      },
    });
  }, [props.user]);

  return (
    <>
      <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Personal Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} id="edit-profile-form">
            <Form.Group>
              <Form.Label>Profile Image</Form.Label>
              <Form.Control
                type="file"
                onChange={e => setSelectedFile(e.target.files[0])}
            />
            </Form.Group>
              
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert your name"
                name="name"
                value={formData.name}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                name="surname"
                value={formData.surname}
                placeholder="Insert your surname"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                placeholder="Insert your title"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="area"
                value={formData.area}
                placeholder="Insert your location"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                placeholder="name@example.com"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={handleChange}
                value={formData.bio}
                name="bio"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" form="edit-profile-form" onClick={props.onClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProfileModal;