import React from 'react'

import book from "../../img/book-open.svg";
import verticalLine from "../../img/VerticalLine.svg";
import star from "../../img/star.svg";
import heart from "../../img/Vector.svg";

const TeacherInfo = () => {
    return (
        <div className="tutor-data">
        <div className="tutor-lang-name">
          <p className="tutor-text">Languages</p>
          <h2 className="tutor-name">Jane Smith</h2>
        </div>
        <div className="tutor-info">
          <div className="tutor-item">
            <img src={book} alt="book icon" width="16" height="16" />
            <h3 className="tutor-details">Lessons online</h3>
            <img src={verticalLine} alt="vertical line" />
            <div className="tutor-les">
              <div className="tutor-det">
                <h3 className="tutor-details">Lessons done: 1098</h3>
              </div>
            </div>
            <div className="tutor-star">
              <img src={verticalLine} alt="vertical line" />
              <img src={star} alt="star icon" width="16" height="16" />
              <h3 className="tutor-details">Rating: 4.8</h3>
              <img src={verticalLine} alt="vertical line" />
            </div>
            <div className="tutor-price">
              <h3 className="tutor-details">
                Price / 1 hour: <span className="price">30$</span>
              </h3>
            </div>
            <div className="heart">
              <img src={heart} alt="heart icon" width="26" height="26" />
            </div>
          </div>
        </div>
      </div>
    )
}

export default TeacherInfo
