import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PeopleYouMayKnow from "./PeopleYouMayKnow";
import ProfileMainArea from "./ProfileMainArea";

const Profile = () => {
  const params = useParams();
  const user = useSelector(state => state.users.fetchedUsers.filter(el => el._id === params.id)[0]);

  useEffect(() => {
    console.log('user: ',user);
    
  }, [user])

  return (
    <Container>
      <Row>
        <Col md={7} lg={9}>
          <ProfileMainArea user={user} />
        </Col>
        <Col md={5} lg={3}>
          <PeopleYouMayKnow/>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
