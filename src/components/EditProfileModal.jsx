import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { EDIT_USER, UPDATE_FETCHED_USERS } from "../redux/actions";

const EditProfileModal = (props) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.users.userChanges);

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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWJkZjZkNzlhNTAwMTUwOTAyZWUiLCJpYXQiOjE2NjM1NzI5NjAsImV4cCI6MTY2NDc4MjU2MH0.TBiQ1Cyg8H0ysQhW1CxyB80Nbf5EaV0yPUj6tU2R9zQ",
          },
          body: JSON.stringify(formData)
        }
      );

      if (res.ok) {
        dispatch({
          type: UPDATE_FETCHED_USERS,
          payload: res
        })
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