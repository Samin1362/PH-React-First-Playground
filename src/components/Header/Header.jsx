import React from 'react';

const Header = () => {
  return (
    <div className='max-w-[1280px] my-[50px] mx-auto flex justify-between items-center'>
      <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
      <img src="/src/images/profile.png" alt="" />
    </div>
  );
};

export default Header;