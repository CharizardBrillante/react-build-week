import { Card, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Comment = (props) => {
    const user = useSelector(state => state.loggedUser.loggedUser)
    const [comment, setComment] = useState('');

    const postComment = (data = {}) => {
        const options = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Authorization":
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWJkZjZkNzlhNTAwMTUwOTAyZWUiLCJpYXQiOjE2NjM1NzI5NjAsImV4cCI6MTY2NDc4MjU2MH0.TBiQ1Cyg8H0ysQhW1CxyB80Nbf5EaV0yPUj6tU2R9zQ",
            },
            body: JSON.stringify(data)
        }
        fetch('https://striveschool-api.herokuapp.com/api/comments/', options)
        .then(res => res.json())
        .then(data => {console.log('success', data); props.getComments()})
        .catch(err => console.log('error', err))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postComment({
            comment : comment,
            rate : 1,
            elementId : props.postId
        });
        setComment('');
    }


    return (
        <Card className='new-post-card'>
        <Card.Body>
        <Card.Title className='post-header'>
            <img src={user.image} alt={user.name + ' ' + user.surname} className='post-avatar' />
            <Form onSubmit={handleSubmit} className='new-post-form'>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Add a comment"
                        value={comment}
                        onChange={e=>setComment(e.target.value)}/>
                </Form.Group>
                <button type="submit" className='send-post-btn'></button>
            </Form>

        </Card.Title>
        </Card.Body>
        </Card>
    )
}

export default Comment
