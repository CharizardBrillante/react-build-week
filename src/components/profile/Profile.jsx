import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getExperiencesAction } from "../../redux/actions";
import Experiences from "../experiences/Experiences";
import PeopleYouMayKnow from "../PeopleYouMayKnow";
import ProfileMainArea from "./ProfileMainArea";

const Profile = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector(
    (state) =>
      state.users.fetchedUsers[0]?.filter((el) => el._id === params.id)[0]
  );

  const experiences = useSelector(state => state.experiences.fetchedExperiences);

  useEffect(() => {
    //console.log("user: ", user);
    getExperiences();
    console.log('user._id: ', params.id);
  }, []);

  const getExperiences = async () => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${params.id}/experiences`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI4MWJkZjZkNzlhNTAwMTUwOTAyZWUiLCJpYXQiOjE2NjM1NzI5NjAsImV4cCI6MTY2NDc4MjU2MH0.TBiQ1Cyg8H0ysQhW1CxyB80Nbf5EaV0yPUj6tU2R9zQ",
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        dispatch(getExperiencesAction(data));
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={7} lg={9}>
          <ProfileMainArea user={user} />
          <Experiences experiences={experiences} fetchExperiences={getExperiences} />
        </Col>
        <Col md={5} lg={3}>
          <PeopleYouMayKnow />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;