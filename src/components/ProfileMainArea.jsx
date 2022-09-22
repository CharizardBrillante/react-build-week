import { Button, Col, Row } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { imgUploader } from "../helper/imgUploader";

const ProfileMainArea = ({ user }) => {

  const loggedUser = useSelector(state => state.loggedUser.loggedUser)
  const myProfile = loggedUser?._id === user?._id ? true : false;
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const token = useSelector(state => state.loggedUser.token);

  useEffect(() => imgUploader(selectedFile, token, 'profile', loggedUser?._id), [selectedFile] )
    
  return (
    <>
      <Row className="main-profile-card rounded-3 border border-1 border-muted mb-2">
        <Col>
          <div className="img-wrapper text-start">
            {myProfile && <BsPencil size={30} className='edit-avatar' onClick={()=>setShow(!show)}/>}
            <img
              className="border border-2 border-white rounded-pill mb-3"
              src={user?.image}
              alt={user?.name + " " + user?.surname + " profile pic"}
              height={152}
              width={152}
            />
            {show && 
              <form>
                <input
                    type="file"
                    onChange={e => setSelectedFile(e.target.files[0])}
                />
              </form>
            }
          </div>
          <div className="text-start">
            <h1 className="">{user?.name} {user?.surname}</h1>
            <p className="mb-1">{user?.title}</p>
            <p className="text-secondary">{user?.area}</p>
            <Button className="btn-follow me-1 rounded-pill">Segui</Button>
            <Button variant="white" className="btn-msg me-1 rounded-pill">Messaggio</Button>
            <Button variant="white" className="btn-other rounded-pill text-secondary border border-1 border-secondary">Altro</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProfileMainArea;
