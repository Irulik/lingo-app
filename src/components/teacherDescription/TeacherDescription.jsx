import React from 'react'
import './TeacherDescription.css'

const TeacherDescription = () => {
    return (
        <div className="tutor-description">
        <div>
          <div className="tutor-row">
            <p className="tutor-text">Speaks:</p>
            <div className="tutor-decor">
              <h3 className="tutor-details">German, French</h3>
            </div>
          </div>
        </div>

        <div>
          <div className="tutor-lesson">
            <p className="tutor-text">Lesson Info:</p>
            <h3 className="tutor-details">
              Lessons are structured to cover grammar, vocabulary, and practical
              usage of the language.
            </h3>
          </div>
        </div>

        <div className="tutor-conditions">
          <p className="tutor-text">Conditions:</p>
          <h3 className="tutor-details">
            Welcomes both adult learners and teenagers (13 years and above).
            Provides personalized study plans
          </h3>
        </div>
      </div>
    )
}

export default TeacherDescription;