import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { user, resetPassword } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/" replace={true} />;
  }

  const handleForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    resetPassword(email)
      .then(() => {
        toast.success("Verification mail sent!", {
          autoClose: 1000,
        });
        window.open('https://mail.google.com', '_blank');
        navigate('/login');
      })
      .catch((err) => {
        setError(err.code);
      });
  };

  return (
    <section className="hero bg-base-200 h-fit rounded-md py-2 lg:h-screen">
      <div className="hero-content gap-3 w-full flex-col animate__animated animate__bounceInDown">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Reset password!</h1>
          <p className="description mt-2 bg-gray-300 py-1 px-3 rounded-lg">
            A verification message will send to your mail
          </p>
        </div>
        <div>{error && <p className="text-red-500">{error}</p>}</div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-8">
          <form onSubmit={handleForm} className="card-body p-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered w-full"
                required
                defaultValue={location.state}
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
