import { useEffect, useState } from "react";
import Review from "./Review";


const UserReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(()=> {
    fetch('./review.json')
    .then(res => res.json())
    .then(reviews => setReviews(reviews))
  }, [])


  return (
    <section className="mt-20">
      <h3 className="text-center font-bold text-2xl md:text-3xl mb-6">
        User Review
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {
          reviews.map(review => <Review key={review.id} reviewData={review}></Review>)
        }
      </div>
    </section>
  );
};

export default UserReview;