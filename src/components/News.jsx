import { Container, Row, Col, Button } from 'react-bootstrap';
import PostCard from './posts/PostCard';
import NewPostCard from './posts/NewPostCard';
import LoadingSpinner from './LoadingSpinner';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const News = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPosts, setNumberOfPosts] = useState(20*currentPage);
    const [displayedPosts, setDisplayedPosts] = useState(posts.slice(0, numberOfPosts));
    const token = useSelector(state => state.loggedUser.token);
    const loggedUser = useSelector(state => state.loggedUser.loggedUser);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPosts();
    }, [])

    useEffect(() => {
        setNumberOfPosts(20*currentPage);
        setDisplayedPosts(posts.slice(0, numberOfPosts));
    }, [posts, currentPage])

    const getPosts = () => {
        const options = {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization:`Bearer ${token}`            
            },
        }
        fetch('https://striveschool-api.herokuapp.com/api/posts/', options)
        .then(res => res.json())
        .then((res) => {setPosts(res.reverse()); console.log(posts); setLoading(false)})

    }
    
    return (
        <Container fluid className="news-container">
            {loggedUser && <NewPostCard getPosts={getPosts}/>}
            {displayedPosts.map(p => (
                <Row key={p._id} className='post-row'>
                    <Col>
                        <PostCard 
                            author={p.user?.name + ' ' + p.user?.surname}
                            imgUrl={p.user?.image} 
                            text={p.text}
                            postImg={p.image ? p.image : null}
                            date={p.createdAt}
                            profile={`/user/${p.user?._id}`}
                            postId={p._id}
                        />
                    </Col>
                </Row>
            ))}
            <Row className='load-posts-row'>
                {loading && <LoadingSpinner />}
                {!loading && <Button className='load-posts-btn' onClick={()=>setCurrentPage(currentPage + 1)}>
                    Load More
                </Button>}
            </Row>
        </Container>
    )
}

export default News
