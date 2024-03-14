import React from 'react'
import './TeacherResponse.css'

const TeacherResponse = ({ name, avatar, rating, response }) => {
  return (
    <div className="tutor-info-small">
      <div className="tutors-box-resp">
        <div className="tutor-avatar-small">
          <img src={avatar} alt={`photo of ${name}`} />
        </div>
        <div className="tutor-data-small">
          <p className="tutor-text">{name}</p>
          <div className="tutor-info-sm">
            <div className="tutor-star">
              <img src="./img/star.svg" alt="star icon" width="16" height="16" />
              <h4 className="tutor-details-rating">{rating}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="tutor-desc-small">
        <p className="tutor-resp">{response}</p>
      </div>
    </div>
  );
};

export default TeacherResponse