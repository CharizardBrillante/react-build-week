import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { IoIosShareAlt } from 'react-icons/io';
import { RiSendPlaneFill } from 'react-icons/ri';
import CommentsList from './CommentsList';
import { useState } from 'react';
import { timePassed, datesDiff } from '../../helper/timePassed';

const PostCard = (props) => {
    const navigate = useNavigate();
    const [showComments, setShowComments] = useState(false);
    

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
                {props.postImg && <img src={props.postImg} alt='nothing interesting' className='post-img'/>}
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