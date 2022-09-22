import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { IoIosShareAlt } from 'react-icons/io';
import { RiSendPlaneFill } from 'react-icons/ri';
import CommentsList from './CommentsList';
import { useState } from 'react';

const PostCard = (props) => {
    const now = new Date().getTime();
    const navigate = useNavigate();
    const [showComments, setShowComments] = useState(false);

    const timePassed = (ms) => {
        let min = Math.floor(ms / (1000 * 60));
        let hours = Math.floor(min / 60);
        let days = Math.floor(hours / 24);
        let months = Math.floor(days / 30);
        let years = Math.floor(months / 12);
        if (years > 0) {return `${years} years ago`}
        else if (months > 0) {return `${months} months ago`}
        else if (days > 0) {return `${days} days ago`}
        else if (hours > 0) {return `${hours} hours ago`}
        else if (min > 0) {return `${min} min ago`}
        else {return 'now'}
    }
    const datesDiff = (start, end = now) => end - Date.parse(start);

    return (
        <Card>
            <Card.Body>
            <Card.Title className='post-header'>
                <img src={props.imgUrl} alt='profile' className='post-avatar'/>
                <div className='post-info'>
                <span className='post-author' onClick={()=>navigate(props.profile)}>{props.author}</span>
                <span className='post-date'>{timePassed(datesDiff(props.date))}</span>
                </div>
            </Card.Title>
            <Card.Text className='post-content'>
                <div>{props.text}</div>
                <img src={props.postImg} alt='nothing interesting' className='post-img'/>
                <div className='post-buttons'>
                    <span className='post-btn'><AiOutlineLike size={25} color='gray' className='mx-1'/> Like</span>
                    <span className='post-btn'><FaRegCommentDots size={25} color='gray' className='mx-1' 
                        onClick={()=>{setShowComments(!showComments); console.log('show comments')}}/> Comment </span>
                    <span className='post-btn'><IoIosShareAlt size={25} color='gray' className='mx-1'/> Share </span>
                    <span className='post-btn'><RiSendPlaneFill size={25} color='gray' className='mx-1'/> Send </span>
                </div>
            </Card.Text>
                {showComments && <CommentsList postId={props.postId}/>}
            </Card.Body>
        </Card>
    )
}

export default PostCard;