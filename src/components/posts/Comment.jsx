import { Card, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Comment = (props) => {
    const user = useSelector(state => state.loggedUser.loggedUser);
    const token = useSelector(state => state.loggedUser.token);
    const [comment, setComment] = useState('');
    const loggedUser = useSelector(state => state.loggedUser.loggedUser);

    const postComment = (data = {}) => {
        const options = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Authorization":
                `Bearer ${token}`,
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
        <>{loggedUser &&
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
        }</>
    )
}

export default Comment
