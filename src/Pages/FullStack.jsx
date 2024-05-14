import React from 'react';
import Card from '../Componants/Card';

const FullStack = ({data}) => {
    const Fsd  = data.filter((item) => item.head === "Full Stack");
    return (
        <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {/* mapping through career array */}
          {Fsd.map((item, index) => {
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

export default FullStack;