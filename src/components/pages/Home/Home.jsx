import React from 'react';
// import { Link } from 'react-router-dom';

import AdvantageSection from '../../AdvantageSection/AdvantageSection';
import StatisticsSection from '../../StatisticsSection/StatisticsSection';

const Home = () => {
  return (
    
      <div className="container">
        <AdvantageSection />
        <StatisticsSection />
      </div>
 
  );
};

export default Home;
