import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  return (
    <section className='flex justify-center items-center h-screen bg-base-300'>
      <div className='bg-white p-6 rounded-2xl'>
        <h1 className='font-black text-3xl md:text-4xl lg:text-5xl text-red-600'>404 Page not found</h1>
        <p className='description'>Link is not valid</p>

        <div className='flex justify-center mt-4 gap-4'>
          <button onClick={() => navigate('/')} className="btn btn-primary">Goto Home</button>
          <button onClick={() => navigate(-1)} className="btn btn-secondary">Go Back</button>
        </div>
      </div>
    </section>
  );
};

export default Error;