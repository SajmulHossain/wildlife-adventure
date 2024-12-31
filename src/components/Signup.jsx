import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contextProvider/AuthProvider";
import { toast } from "react-toastify";
import googleLogo from "../assets/google.png";

const Signup = () => {
  const { loginWithGoogle, user, createUser, setUser, update } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState();

  if (user) {
    return <Navigate to="/" />;
  }

  const handleForm = (e) => {
    e.preventDefault();

    setError("");
    const regexUppercase = /[A-Z]/;
    const regexLowercase = /[a-z]/;

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    if (password.length < 6) {
      setError("Password should be atleast 6 characters or more.");
      return;
    }

    if (!regexUppercase.test(password)) {
      setError("You must give atleast a uppercase letter");
      return;
    }

    if (!regexLowercase.test(password)) {
      setError("You must give atleast a lowercase letter");
      return;
    }

    const userData = {
      displayName: name,
      photoURL: photo,
    };

    const newUser = {
      name,
      photo,
      email,
    };

    createUser(email, password)
      .then((res) => {
        e.target.reset();
        setUser(res.user);
        const uid = res?.user?.uid;
        update(userData)
          .then(() => {
            toast.success("Registerd successfully!", {
              autoClose: 2000,
            });
            navigate(location?.state ? location.state : "/");

            fetch("https://server-gamma-flame.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ ...newUser, uid }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
          })
          .catch((err) => {
            toast.error(err.code);
          });
      })
      .catch((err) => {
        setError(err.code);
      });
  };

  const hanldeLoginWithGoogle = () => {
    loginWithGoogle()
      .then((res) => {
        setUser(res.user);
        toast.success("Registerd successfully!", {
          autoClose: 2000,
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
          <h1 className="text-3xl font-bold">Register Now!</h1>
        </div>
        <div>{error && <p className="text-red-500">{error}</p>}</div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-8">
          <form onSubmit={handleForm} className="card-body p-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered w-full"
                required
              />
            </div>
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
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
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
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <p className="text-xs font-medium mt-2">
                Already have an account?{" "}
                <Link to="/login" className="font-bold">
                  Login
                </Link>
              </p>
            </div>
          </form>
          <div className="divider">or</div>
          <button onClick={hanldeLoginWithGoogle} className="btn">
            <img src={googleLogo} className="w-8 h-8" alt="google logo" />{" "}
            Continue with google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
