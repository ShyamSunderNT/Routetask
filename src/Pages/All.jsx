import React from 'react';
import Card from '../Componants/Card';

const All = ({data}) => {

    return (
        <div>
              <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {/* Mapping data to Card component */}
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  
        </div>
    );
};

export default All;