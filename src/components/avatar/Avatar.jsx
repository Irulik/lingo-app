import React from 'react';
import './Avatar.css'

const Avatar = ({ dataIndex }) => {
  return (
    <div className="tutors-box">
      <div className="tutor-avatar" data-index={dataIndex}></div>
    </div>
  );
};

export default Avatar;