import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Comment from './Comment';

const CommentsList = (props) => {
    const users = useSelector(state => state.users.fetchedUsers['0'])
    const [comments, setComments] = useState([])
    useEffect(() => {
        getComments()
    }, [])

    const getComments = () => {
        const options = {
            method: "GET",
            headers: {
            Accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWJkZjZkNzlhNTAwMTUwOTAyZWUiLCJpYXQiOjE2NjM1NzI5NjAsImV4cCI6MTY2NDc4MjU2MH0.TBiQ1Cyg8H0ysQhW1CxyB80Nbf5EaV0yPUj6tU2R9zQ",
            },
        }
        fetch('https://striveschool-api.herokuapp.com/api/comments/', options)
        .then(res=>res.json())
        .then((res)=>{
            setComments(res);
            console.log('comments: ', comments);
        }).catch(err=>console.error('Error: ', err))
    }
    return (
        <ListGroup>
            <Comment postId={props.postId} getComments={getComments}/>
            {comments.map(c => (
                c.elementId === props.postId ?
                    <ListGroup.Item className='comment'>
                        <span className='comment-author'>{c.author}</span>
                        <span>{c.comment}</span>
                    </ListGroup.Item> : ''
            ))}
        </ListGroup>
    )
}

export default CommentsList;