import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Card from './Card';

const AllCard = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  return (
    <section>
      <h3 className="text-center font-bold text-2xl md:text-3xl">
        Adventure Experience
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-12 gap-6">
        {data.map((singleData, index) => (
          <Card key={index} data={singleData}></Card>
        ))}
      </div>
      <div className="text-center mt-4 md:mt-6">
        <button onClick={() => navigate(-1)} className="btn btn-primary">Go Back</button>
      </div>
    </section>
  );
};

export default AllCard;