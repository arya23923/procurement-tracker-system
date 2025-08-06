import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className='flex justify-between items-center w-full pt-4'>
      <div className='flex w-100'>
        <div className='text-xl md:text-4xl font-semibold p-5 md:pl-15 md:mt-5 md:p-0 md:w-50 whitespace-nowrap'>Procurement Tracker</div>
      </div>
      <div>
          <button className='bg-blue-500 w-20 p-2 text-white rounded-lg md:text-xl md:w-25'>Log out</button>
      </div>
    </header>
  );
};

export default Header;
