import coxBazar from "../assets/cox-bazar.jpg";
import ladakh from "../assets/ladakh.jpg";
import srimangal from "../assets/sylhet-srimangal.jpg";
import sajek from "../assets/sajek.jpg";
import paharpur from "../assets/paharput.jpg";
import tajMahal from "../assets/tajmahal.jpg";

import React from "react";
import PopularDestinationCard from "./PopularDestinationCard";

const PopularDestination = () => {
  return (
    <section className="mt-20">
      <h3 className="font-bold mb-6 text-center text-2xl md:text-3xl">
        Popular Destination
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <PopularDestinationCard
          img={sajek}
          heading="Sajek Valley"
          description={`Sajek Valley, the "Queen of Hills," is a stunning destination in
            Rangamati, offering lush greenery, vibrant sunsets, and rolling
            clouds. Perfect for nature lovers, it features scenic trails, the
            iconic Helipad, and rich indigenous culture, creating an
            unforgettable, eco-friendly adventure.`}
        />
        <PopularDestinationCard
          img={coxBazar}
          heading="Cox's Bazar"
          description={`Cox's Bazar, home to the world's longest sea beach, is a paradise for beach lovers. Stretching 120 km along the Bay of Bengal, it offers golden sands, serene waves, and breathtaking sunsets. Enjoy water sports, explore nearby islands, and soak in the beauty of this coastal wonderland.`}
        />
        <PopularDestinationCard
          img={paharpur}
          heading="Paharpur Bouddho Bihar"
          description={`Paharpur Bouddho Bihar, a UNESCO World Heritage Site, is a historic treasure in Naogaon, Bangladesh. This ancient Buddhist monastery features intricate terracotta art and vast architectural ruins. A symbol of cultural heritage, it offers a glimpse into the region's rich spiritual and historical past.`}
        />
        <PopularDestinationCard
          img={srimangal}
          heading="Srimangal"
          description={`Srimangal, the "Tea Capital of Bangladesh," in Sylhet, is renowned for its lush tea gardens, rolling hills, and serene landscapes. Explore Lawachara National Park, Madhabpur Lake, and vibrant tribal culture. Perfect for eco-adventurers, it offers tranquility and unique experiences like the famous seven-layer tea.`}
        />
        <PopularDestinationCard
          img={tajMahal}
          heading="Taj Mahal"
          description={`
The Taj Mahal, a symbol of love, stands in Agra, India, as a UNESCO World Heritage Site. This marble marvel, built by Shah Jahan for Mumtaz, features stunning architecture and serene gardens, making it one of the world's most iconic landmarks.`}
        />
        <PopularDestinationCard
          img={ladakh}
          heading="Ladakh"
          description={`Ladakh, the "Land of High Passes," offers rugged mountains, crystal-clear lakes, and serene monasteries. Ideal for adventure and peace seekers, it’s perfect for trekking, biking, and exploring unique culture. Its untouched beauty guarantees a soul-stirring experience.`}
        />
      </div>
    </section>
  );
};

export default PopularDestination;
