import React, { useContext, useState } from 'react';
import { AuthContext } from '../contextProvider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const ProfileUpdate = () => {
  const [error, setError] = useState('');
  const { user, update } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setError('');

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    if(name === user.displayName && photo === user.photoURL) {
      setError('Please update your information');
      return;
    }

    const userData = {
      displayName: name,
      photoURL: photo,
    }

    const updateDB = {
      name,photo
    }

    update(userData)
    .then(() => {
      fetch(`https://server-gamma-flame.vercel.app/users/${user.uid}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updateDB),
      })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount) {
          toast.success('Profile updated successfully');
        }
      })
      navigate('/profile');
    })
    .catch(err => {
      toast.error('Something went wrong! Please try again.');
      setError(err.code);
    })


  }

  return (
    <section className="hero bg-base-200 h-fit rounded-md py-2 lg:h-screen">
      <div className="hero-content flex-col w-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Update your profile!</h1>
        </div>
        <div>{error && <p className="text-red-500">{error}</p>}</div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name='name'
                className="input w-full input-bordered"
                required
                defaultValue={user?.displayName && user.displayName}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input w-full input-bordered"
                required
                name='photo'
                defaultValue={user?.photoURL && user.photoURL}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileUpdate;