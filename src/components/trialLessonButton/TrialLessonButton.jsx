import React from 'react'
import './TrialLessonButton.css'

const TrialLessonButton = () => {
  return (
    <span>
      <div className="button-trial-lesson">
        <button type="submit" className="book-button" data-modal-open>
          Book trial lesson
        </button>
      </div>
    </span>
  );
};

export default TrialLessonButton;