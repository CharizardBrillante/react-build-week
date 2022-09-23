import { Col, Row } from "react-bootstrap";
import SingleExperience from "./SingleExperience";
import { BsPlusLg } from "react-icons/bs";
import ExperiencesModal from './ExperienceModal';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Experiences = (props) => {
  const params = useParams();
  const loggedUser = useSelector(state => state.loggedUser.loggedUser);
  const myProfile = params.id === loggedUser._id ? true : false;

  const [expToEdit, setExpToEdit] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    console.log(props);
    console.log('Params: ', params)
  }, [])

  return (
    <>
      <Row
        id="experience"
        className="info-wrapper rounded-3 border border-1 border-muted text-start"
      >
        <Col>
          <div className="d-flex justify-content-between">
            <h4 className="fw-bold mb-3">Esperienza</h4>
            <div>
              <span
                type="button"
                className="action-icon-container d-inline-block"
              >
                {myProfile && <BsPlusLg
                  className="add-el-icon text-secondary"
                  onClick={() => {
                    setExpToEdit(null)
                    handleShow()
                  }}
                />}
              </span>
            </div>
          </div>
          {props.experiences.map((exp, i) => (
            <SingleExperience
              key={i}
              experience={exp}
              onOpen={handleShow}
              expToEdit={expToEdit}
              setExpToEdit={setExpToEdit}
              expId={exp._id}
            />
          ))}
        </Col>
      </Row>
      <ExperiencesModal show={show} onClose={handleClose} expToEdit={expToEdit} fetchExperiences={props.fetchExperiences}/>
    </>
  );
};

export default Experiences;
