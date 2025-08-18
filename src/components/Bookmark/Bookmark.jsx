import React from 'react';

const Bookmark = ( {bookmark} ) => {

  const {title} = bookmark;

  return (
    <div className='bg-white my-4 p-5 rounded-lg'>
      <h1 className='font-semibold text-xl text-justify'>{title}</h1>
    </div>
  );
};

export default Bookmark;