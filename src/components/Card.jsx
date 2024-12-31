import { Link } from 'react-router-dom';

const Card = ({data}) => {
  const {
    adventureTitle: title,
    image,
    ecoFriendlyFeatures: features,
    id,
    shortDescription: description,
  } = data || {};


  return (
    <div className="animate__animated animate__zoomIn border rounded-lg border-primary p-4 md:p-6 flex flex-col">
      <div className="rounded-lg overflow-hidden">
        <img
          src={image}
          className="w-full h-52 md:h-72 object-cover"
          alt={`${title}'s images`}
        />
      </div>

      <h3 className="font-bold text-xl lg:text-2xl mt-4">{title}</h3>
      <p className="mb-4 description mt-1">{description}</p>

      <div className="grow">
        <p className="underline underline-offset-2 font-semibold mb-2">
          Features:
        </p>
        <ul>
          {features.map((feature,i) => (
            <li key={i} className="text-gray-700">{feature}</li>
          ))}
        </ul>
      </div>
      <Link
        to={`/details/${id}`}
        className="btn bg-primary mt-4 hover:bg-secondary w-full"
      >
        Explore Now
      </Link>
    </div>
  );
};

export default Card;