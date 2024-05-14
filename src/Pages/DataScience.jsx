import React from 'react';
import Card from '../Componants/Card';

const DataScience = ({data}) => {
    const Datasci  = data.filter((item) => item.head === "Data Science");
    return (
        <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {/* mapping through career array */}
          {Datasci.map((item, index) => {
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

export default DataScience;