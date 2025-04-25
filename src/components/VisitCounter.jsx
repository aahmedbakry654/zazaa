import React, { useEffect, useState } from 'react';
import './VisitCounter.css';

const VisitCounter = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const storedVisits = localStorage.getItem('visits') || 0;
    const updatedVisits = parseInt(storedVisits) + 1;
    localStorage.setItem('visits', updatedVisits);
    setVisits(updatedVisits);
  }, []);

  return (
    <div className="visit-counter">
      Visitors: {visits}
    </div>
  );
};

export default VisitCounter;