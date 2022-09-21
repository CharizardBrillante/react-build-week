import { Button, Col, Row } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";

const ProfileMainArea = ({ user }) => {
  return (
    <>
      <Row className="main-profile-card rounded-3 border border-1 border-muted mb-2">
        <Col>
          <div className="img-wrapper text-start">
            <img
              className="border border-2 border-white rounded-pill mb-3"
              src={user?.image}
              alt={user?.name + " " + user?.surname + " profile pic"}
              height={152}
              width={152}
            />
          </div>
          <div className="text-start">
            <div className="d-flex justify-content-between">
              <h1 className="">
                {user?.name} {user?.surname}
              </h1>
              <span type="button" className="profile-edit-icon-container"><BsPencil className="profile-edit-icon text-secondary"/></span>
            </div>
            <p className="mb-1">{user?.title}</p>
            <p className="text-secondary">{user?.area}</p>
            <Button className="btn-follow me-1 rounded-pill">Segui</Button>
            <Button variant="white" className="btn-msg me-1 rounded-pill">
              Messaggio
            </Button>
            <Button
              variant="white"
              className="btn-other rounded-pill text-secondary border border-1 border-secondary"
            >
              Altro
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProfileMainArea;
