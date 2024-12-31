import { useContext, useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contextProvider/AuthProvider";
import { toast } from "react-toastify";
import googleLogo from "../assets/google.png";


const Login = () => {
  const { login, setUser, user, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  
  if (user) {
    return <Navigate replace={true} to="/" />;
  }

  const handleEmailChange = e => {
    setEmail(e.target.value);
  }
  
  const handleForm = (e) => {
    e.preventDefault();

    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((res) => {
        setUser(res.user);
        e.target.reset();
        toast.success("Logged in successfully!", {
          autoClose: 2000,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.code);
      });
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((res) => {
        setUser(res.user);
        toast.success("Logged in successfully!", {
          autoClose: 2500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  return (
    <section className="hero bg-base-200 h-fit rounded-md py-2">
       <div className="hero-content w-full flex-col animate__animated animate__bounceInDown">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div>{error && <p className="text-red-500">{error}</p>}</div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-8">
          <form onSubmit={handleForm} className="card-body p-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={handleEmailChange}
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered w-full"
                required
              />
              <label className="label">
                <Link
                  to="/reset"
                  state={email}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <p className="text-xs font-medium mt-2">
                Don't have an account?{" "}
                <Link
                  state={location.state}
                  to="/register"
                  className="font-bold"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
          <div className="divider">or</div>
          <button onClick={handleLoginWithGoogle} className="btn">
            <img src={googleLogo} className="w-8 h-8" alt="google logo" /> Log
            in with google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
