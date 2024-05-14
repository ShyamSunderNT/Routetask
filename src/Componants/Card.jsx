// importing components
import React from "react";
import '../App.css'

// Getting data from App.jsx
const Card = ({ item, index }) => {
  return (
    // Rendering the data
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4" key={index}>
      <div className="card h-100">
        <img src={item.image} className="card-img-top mb-2 img-fluid" alt="img" style={{ height: '209px' }} />
        <div className="card-body px-4 mt-3">
          <h4 className="card-head fw-bold">{item.head}</h4>
          <h5 className="card-title fw-semibold ">{item.title}</h5>
          <p className="card-text ">●{item.description}</p>
        </div>
        <div className="card-footer ps-4 py-2 bg-transparent">
          <p className="txt my-2">
            {item.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;