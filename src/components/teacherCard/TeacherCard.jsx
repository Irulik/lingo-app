import React, {useState} from "react";
import "./TeacherCard.css";
import "../teacherTags/TutorTags.css";


import TeacherInfo from "../teacherInfo/TeacherInfo";
import TeacherDescription from "../teacherDescription/TeacherDescription";
import TeacherTags from "../teacherTags/TeacherTags";
import TeacherReadMore from '../teacherReadMore/TeacherReadMore'
// import TutorResponse from "./TutorResponse";
import TrialLessonButton from "../trialLessonButton/TrialLessonButton";

const TeacherCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      
    <li className={`tutor-card ${isExpanded ? 'expanded' : ''}`} data-index="1">
      <TeacherInfo />
      <TeacherDescription />
      <TeacherReadMore onReadMoreClick={handleReadMoreClick} />
      {isExpanded && <TeacherTags />}
       <TrialLessonButton />
      </li>
    </>
  );
};

export default TeacherCard;