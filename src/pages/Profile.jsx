import React, { useContext } from 'react';
import { AuthContext } from '../contextProvider/AuthProvider';
import userImg from '../assets/user-placeholder.jpg'
import { Link } from 'react-router-dom';


const Profile = () => {
  const {user} = useContext(AuthContext);
  return (
    <section>
      {user?.displayName && (
        <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl">
          Hi, {user.displayName}
        </h3>
      )}

      <div className="max-w-screen-sm mx-auto py-12 my-8 rounded-xl bg-base-200">
        {user?.photoURL && (
          <div className="flex justify-center mx-auto items-center w-fit">
            <img
              className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] object-cover rounded-full outline outline-offset-4 outline-violet-800"
              src={user?.photoURL ? user.photoURL : userImg}
              alt=""
            />
          </div>
        )}

        <h3 className="font-semibold text-xl md:text-2xl lg:text-4xl text-center mt-8">
          {user?.displayName && user.displayName}
        </h3>
        <p className="text-center font-medium mt-4">
          Email: <span className="italic">{user?.email && user.email}</span>
        </p>

        <div className="flex justify-center mt-4">
          <Link to='/update-profile' className="btn btn-primary">Update Profile</Link>
        </div>
      </div>
    </section>
  );
};

export default Profile;