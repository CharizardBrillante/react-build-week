import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from 'react-icons/ai';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'

const SingleExperience = (props) => {
  const params = useParams();
  const loggedUser = useSelector(state => state.loggedUser.loggedUser);
  const myProfile = params.id === loggedUser._id ? true : false;
  const token = useSelector(state => state.loggedUser.token);
  console.log(token)

  const deleteExperience = () => {
    const options = {
      method : 'DELETE', 
      headers: {
        'Content-type': 'application/json',
        'Authorization':`Bearer ${token}`   
      }, 
    }
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${params.id}/experiences/${props.expId}`, options)
    .then(res => console.log('deleted',res))
    .catch(err => console.error(err))
  }
  return (
    <div className="d-flex align-items-start">
      <div className="exp-img-wrapper mt-2 me-3">
        <img
          src={"/assets/experience-default-icon.png"}
          alt="experience icon"
          height={48}
          width={48}
        />
      </div>
      <div className="exp-info">
        <h5 className="mb-1 d-inline-block align-middle">
          {props.experience?.company}
        </h5>
        {myProfile && 
          <span type="button" className="edit-icon-container d-inline-block ms-1">
            <BsPencil
              className="upd-el-icon text-secondary ms-1"
              onClick={() => {
                props.setExpToEdit(props.experience)
                console.log('expId: ',props.expId);
                props.onOpen()
              }}
            />
          </span>
        }
        {myProfile &&
          <span type="button" className="edit-icon-container d-inline-block ms-1">
            <AiOutlineDelete
              className="upd-el-icon text-secondary ms-1"
              onClick={deleteExperience}
              size={21}
            />
          </span>
        }
        <small className="text-muted mb-2 d-block">
          {props.experience?.startDate.split('T')[0]} - {props.experience?.endDate.split('T')[0]}
        </small>
        <p>{props.experience?.description}</p>
      </div>
    </div>
  );
};

export default SingleExperience;
