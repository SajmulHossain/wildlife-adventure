import Banner from "../components/Banner";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import PopularDestination from "../components/PopularDestination";
import UserReview from "../components/UserReview";
import { toast } from "react-toastify";

const Home = () => {

  const data = useLoaderData();

  const handleForm = e => {
    e.preventDefault();

    toast.success("Successfully Subscribed");
    e.target.reset();
  }

  return (
    <section>
      <Banner />

      <section className="mt-20">
        <h3 className="text-center font-bold text-2xl md:text-3xl">
          Adventure Experience
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4 md:gap-6">
          {data.slice(0, 6).map((singleData, index) => (
            <Card key={index} data={singleData}></Card>
          ))}
        </div>
        <div className="text-center mt-4 md:mt-6">
          <Link to="/all-data" className="btn btn-primary">
            See All
          </Link>
        </div>
      </section>

      <PopularDestination />
      <UserReview />

      <section className="mt-20 flex flex-col lg:flex-row lg:items-center gap-10 lg:p-10 p-4 mg:p-6 bg-primary/30 rounded-lg">
        <div className="lg:w-3/5">
          <h3 className="footer-title">
            Stay Connected with Nature{`'`}s Best Adventures
          </h3>
          <p className="description">
            Subscribe to our newsletter and be the first to discover
            breathtaking eco-adventures, exclusive travel tips, and inspiring
            stories from around the globe. Let us guide you to unforgettable
            experiences while promoting sustainable travel. Your next adventure
            awaits—sign up now!
          </p>
        </div>
        <form className="lg:w-2/5" onSubmit={handleForm}>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item w-2/3"
                required
              />
              <button type="submit" className="btn btn-primary join-item w-1/3">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </section>
    </section>
  );
};

export default Home;