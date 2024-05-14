import React from 'react';
import Card from '../Componants/Card';

const CyberSecurity = ({data}) => {
    const Cyber  = data.filter((item) => item.head === "Cyber security");
    return (
        <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {/* mapping through career array */}
          {Cyber.map((item, index) => {
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

export default CyberSecurity;