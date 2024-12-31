import userImg from '../assets/user-placeholder.jpg'

const Review = ({reviewData}) => {
  const {name, date, review} = reviewData;
 
  return (
    <div className='p-4 border rounded-lg bg-secondary/20 hover:shadow-lg transition-all duration-300 hover:bg-secondary/50'>
      <div className='flex gap-4 items-center'>
        <img src={userImg} className='rounded-full h-12 w-12' alt="user" />
        <div>
          <h3>{name}</h3>
          <p className='description'>{date}</p>
        </div>
      </div>
        <p className='mt-4'>{review}</p>
    </div>
  );
};

export default Review;