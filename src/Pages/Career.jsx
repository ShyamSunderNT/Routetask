import React from 'react';
import Card from '../Componants/Card';

{/* passing data to Card component */ }
const Career = ({ data }) => {
    // filtering data for career
    const career = data.filter((item) => item.head === "Career");
    return (
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {/* mapping through career array */}
          {career.map((item, index) => {
            return (
              <>
                {/* passing data to Card component */}
                <Card item={item} index={index} />
              </>
            );
          })}
        </div>
      </div>
    );
  };

  export default Career;