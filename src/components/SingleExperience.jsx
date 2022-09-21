const SingleExperience = (props) => {
  return (
    <div className="d-flex align-items-start">
      <div className="exp-img-wrapper mt-2 me-3">
        <img src={'/assets/experience-default-icon.png'} alt="experience icon" height={48} width={48} />
      </div>
      <div className="exp-info">
        <h5 className="mb-1">{props.experience?.company}</h5>
        <small className="text-muted mb-2 d-block">{props.experience?.startDate}</small>
        <p>{props.experience?.description}</p>
      </div>
    </div>
  );
};

export default SingleExperience;
