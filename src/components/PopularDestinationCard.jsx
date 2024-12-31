import React from 'react';
import { toast } from 'react-toastify';

const PopularDestinationCard = ({img, heading, description}) => {
  const handleClick = e => {
    toast.success("Booked Successfully!");
    e.target.setAttribute('disabled', 'true');
  }
  return (
    <div className="flex flex-col gap-4 border p-4 rounded-lg">
      <img
        src={img}
        className="rounded-lg h-[280px] object-cover"
        alt="this is the photo of sajek valley"
      />

      <h3 className="font-semibold text-xl">{heading}</h3>
      <p className="description grow">{description}</p>

      <button onClick={handleClick} className='btn btn-primary'>Apply for Booking</button>
    </div>
  );
};

export default PopularDestinationCard;