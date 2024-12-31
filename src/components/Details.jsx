import { Link, useLoaderData, useParams } from "react-router-dom";


const Details = () => {
  const allData = useLoaderData();

  const { id } = useParams();


  const data = allData.find((singleData) => singleData.id === Number(id));

  const {
    adventureTitle: title,
    image,
    adventureLevel: level,
    adventureCost: cost,
    bookingAvailability: availability,
    categoryName: category,
    duration,
    location,
    maxGroupSize: groupSize,
    shortDescription: description,
    specialInstructions: instructions,
    includedItems
  } = data;

  const handleMeeting = () => {
    const modal = document.getElementById("modal");
    const date = new Date();
    const getTime = date.getHours();

    if (getTime >= 10 && getTime <= 20) {
      window.open("https://meet.google.com", "_blank");
    } else {
      modal.showModal();
    }
  };

  return (
    <section className="py-12 max-w-screen-md mx-auto">
      <div className="p-4 lg:p-6 border border-secondary rounded-lg">
        <div>
          <img
            src={image}
            className="w-full h-[250px] md:h-[400px] lg:h-[450px] object-cover rounded-lg"
            alt={`${title}'s images`}
          />
        </div>
        <div className="my-4 space-y-2">
          <h3 className="font-bold text-2xl md:text-3xl">{title}</h3>
          <p className="description">{description}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>{availability ? "Available ✅" : "Not Available❌"}</p>
          <p className="border px-4 py-2 rounded-md">Cost: ${cost}</p>
        </div>

        <p className="font-semibold mt-4">Location: {location}</p>

        <div className="mt-4 md:flex justify-between items-center">
          <p>Travel Duration: ${duration}</p>
          <p>Level: {level}</p>
        </div>

        <div className="mt-4 font-medium md:flex justify-between items-center">
          <p>Group Member: {groupSize}</p>
          <p>Category: {category}</p>
        </div>

        <div className="mt-6 flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row-reverse justify-between">
          <div>
            <h3 className="font-semibold text-xl ">
              <span>⚠️ </span>
              <span className="underline underline-offset-4">
                Special Instruction
              </span>
            </h3>

            <ul className="bg-gray-100 font-semibold list-decimal list-inside space-y-2 p-4 rounded-lg mt-4 md:bg-inherit md:p-0 md:rounded-none">
              {instructions.map((instruction, index) => (
                <li key={index}>
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
          <div>
              <h3 className="font-semibold text-xl underline underline-offset-4">
                Inclueded Items
              </h3>

              <ul className="space-y-2 font-semibold list-decimal list-inside mt-4 border p-4 rounded-lg md:border-none md:p-0 md:rounded-none">
                {
                  includedItems.map((item, index) => <li key={index}>{item}</li>)
                }
              </ul>
          </div>
        </div>

        <div className="space-x-3">
          <button onClick={handleMeeting} className="btn btn-primary">
            Talk with Expert
          </button>
          <Link to="/" className="btn bg-primary mt-6">
            Goto Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Details;
