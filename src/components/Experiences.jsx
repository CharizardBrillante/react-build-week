import { Col, Row } from "react-bootstrap";
import SingleExperience from "./SingleExperience";
import { BsPlusLg } from "react-icons/bs";
import ExperiencesModal from "./ExperienceModal";
import { useState } from "react";

const Experiences = ({ experiences }) => {
  const [expToEdit, setExpToEdit] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <BsPlusLg
                  className="add-el-icon text-secondary"
                  onClick={() => {
                    setExpToEdit(null)
                    handleShow()
                  }}
                />
              </span>
            </div>
          </div>
          {experiences.map((exp, i) => (
            <SingleExperience
              key={i}
              experience={exp}
              onOpen={handleShow}
              expToEdit={expToEdit}
              setExpToEdit={setExpToEdit}
            />
          ))}
        </Col>
      </Row>
      <ExperiencesModal show={show} onClose={handleClose} expToEdit={expToEdit}/>
    </>
  );
};

export default Experiences;
