import { Card, Form } from 'react-bootstrap';
import { BsCardImage } from 'react-icons/bs';
import { BsFillPlayBtnFill } from 'react-icons/bs';
import { MdOutlineEvent } from 'react-icons/md';
import { RiArticleLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { imgUploader } from '../helper/imgUploader';

const NewPostCard = (props) => {
    const user = useSelector(state => state.loggedUser.loggedUser);
    const token = useSelector(state => state.loggedUser.token);
    const [postContent, setPostContent] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const post = (data = {}) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}`            
            },
            body: JSON.stringify(data)
        }
        fetch('https://striveschool-api.herokuapp.com/api/posts/', options)
        .then(res => res.json())
        .then(res => {console.log('post: ', res, 'img: ', selectedFile); if (selectedFile){imgUploader(selectedFile, token, 'posts', res._id, props.getPosts)}; props.getPosts();})
        .catch(err => console.log('error', err))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post({
            createdAt: new Date(),
            text: postContent,
            UpdatedAt: new Date(),
            user: user,
            username: user.username
        });
        setPostContent('');
    }
    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleSubmit(e);
        }
    };
    return (
        <Card className='new-post-card'>
            <Card.Body>
            <Card.Title className='post-header'>
                <img src={user.image} alt={user.name + ' ' + user.surname} className='post-avatar' />
                <Form onSubmit={handleSubmit} className='new-post-form'>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Start a post"
                            value={postContent}
                            onChange={e=>setPostContent(e.target.value)}
                            onKeyUp={handleKeypress}/>
                    </Form.Group>
                    <button type="submit" className='send-post-btn'></button>
                </Form>

            </Card.Title>
            <Card.Text className='post-buttons'>
                <span className='post-btn'>
                    <form>
                        <input
                            type="file"
                            onChange={e => setSelectedFile(e.target.files[0])}
                        />
                    </form>
                    Photo
                </span>
                <span className='post-btn'><BsFillPlayBtnFill size={25} color='green' className='mx-1'/> Video </span>
                <span className='post-btn'><MdOutlineEvent size={25} color='yellow' className='mx-1'/> Event </span>
                <span className='post-btn'><RiArticleLine size={25} color='orange' className='mx-1'/> Write Article </span>
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default NewPostCard;