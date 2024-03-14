import React from 'react'
import './TeacherReadMore.css'

const TeacherReadMore = ({ onReadMoreClick }) => {
  return (
    <div className="tutor-read" data-index="1">
      <span className="read-more-btn" onClick={onReadMoreClick}></span>
      <a href="#" className="read-more-btn" onClick={onReadMoreClick}>
        Read more
      </a>
    </div>
  );
};

export default TeacherReadMore;