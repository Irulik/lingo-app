import React from 'react';
import './filterSection.css'
import chevronDownIcon from '../../img/chevron-down.svg';

const FilterSection = () => {
  return (
    <section className="teachers">
      <div className="container">
        <div className="filters-container">
          <div className="filters-row">
            {renderFilterList('Languages', 'languages', [
              'French',
              'English',
              'German',
              'Ukrainian',
              'Polish',
            ])}
            {renderFilterList('Level of knowledge', 'level', [
              'A1 Beginner',
              'A2 Elementary',
              'B1 Intermediate',
              'B2 Upper-Intermediate',
            ])}
            {renderFilterList('Price', 'select-price', ['30 $', '10 $', '20 $', '40 $'])}
          </div>
        </div>
      </div>
    </section>
  );
};

const renderFilterList = (label, id, options) => (
  <div className="filters-list">
    <p className="filters-text">{label}</p>
    <div className={`filters-${id}`}>
      <div className="select-wrapper">
        <select name={id} id={id} className="studies">
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* <svg>
          <use href={`${sprite}#chevron-down`}></use>
        </svg> */}
        <img src={chevronDownIcon} alt="Chevron down" className="chevron-icon" />
      </div>
    </div>
  </div>
);

export default FilterSection;