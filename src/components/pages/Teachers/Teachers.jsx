import React from "react";
import "./Teachers.css";
import TeacherCard from "../../teacherCard/TeacherCard";
import FilterSection from "../../filterSection/filterSection";
import Avatar from "../../avatar/Avatar";

const Teachers = () => {
  return (
    <div className="container">
      <FilterSection />
      <div className="tutors">
        <Avatar />        
        <ul className="tutor-list">
        <TeacherCard />
        </ul>
      </div>
    </div>
  );
};

export default Teachers;
