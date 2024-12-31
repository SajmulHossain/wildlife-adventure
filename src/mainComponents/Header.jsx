import { Link, NavLink, useNavigate } from "react-router-dom";
import userImg from "../assets/user-placeholder.jpg";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const { user, signout, admin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    signout()
      .then(() => {
        toast.info("Logged Out!", {
          autoClose: 1000,
        });
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  const hanldeLogin = () => {
    navigate("/login");
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/update-profile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      {user && admin && (
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      )}
    </>
  );
  return (
    <header className="max-w-screen-xl mx-auto px-4">
      <section className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown flex items-center">
            <button tabIndex={0} role="button" className="p-0 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu z-50 menu-sm dropdown-content bg-base-100 top-6 rounded-box mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-xl ml-4 lg:ml-0 lg:flex lg:items-center lg:gap-4">
            <img
              src={logo}
              className="h-12 w-12 rounded-full"
              alt="this is logo"
            />

            <h3 className="font-bold hidden lg:block">Adventure Wildlife</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end relative gap-2">
          <span className="group cursor-pointer">
            <h3 className="bg-primary px-4 py-2 font-bold z-50 rounded-xl absolute -top-20 group-hover:top-12 right-20 duration-500 opacity-0 group-hover:opacity-100">
              {user?.displayName ? user.displayName : "No User Logged in"}
            </h3>
            <img
              src={user?.photoURL ? user.photoURL : userImg}
              className="h-12 w-12 rounded-full"
              alt={`${
                user?.displayName
                  ? `${user.displayName}'s photo`
                  : "User image placeholder"
              }`}
            />
          </span>
          {user ? (
            <button onClick={handleLogOut} className="btn">
              Log out
            </button>
          ) : (
            <button onClick={hanldeLogin} className="btn">
              Log in
            </button>
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
