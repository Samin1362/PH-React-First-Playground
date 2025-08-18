import React from 'react';

const TimeSpent = ({timeSpent}) => {
  return (
    <div className='py-[21px] px-[50px] bg-[#6047ec1a] border-2 border-[#6047EC] rounded-lg mb-[24px]'>
      <h1 className='text-2xl text-[#6047EC]'>Spent time on read : {timeSpent} min</h1>
    </div>
  );
};

export default TimeSpent;