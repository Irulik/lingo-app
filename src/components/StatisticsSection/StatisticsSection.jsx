import React from 'react';

const StatisticsSection = () => {
  return (
    <section className="statistics">
      <div className="container">
        <div className="statistics_wrapper">
          <div className="statistics_tutors">
            <h3 className="number_chifr">32,000 +</h3>
            <p className="number">Experienced tutors</p>
          </div>

          <div className="statistics_tutors">
            <h3 className="number_chifr">300,000 +</h3>
            <p className="number">5-star tutor reviews</p>
          </div>

          <div className="statistics_tutors">
            <h3 className="number_chifr">120 +</h3>
            <p className="number">Subjects taught</p>
          </div>

          <div className="statistics_tutors">
            <h3 className="number_chifr">200 +</h3>
            <p className="number">Tutor nationalities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;