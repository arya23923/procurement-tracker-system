import { FC } from 'react';
import Sidebar from './images/sidebar.svg';

const Header: FC = () => {
  return (
    <header className='flex justify-between items-center w-full'>
      <div className='flex w-100'>
        <img src={Sidebar} alt="sidebar" className="w-13 pr-4" />
        <div className='text-4xl font-semibold'>Procurement Tracker</div>
      </div>
      <div>
          <button className='bg-blue-500 w-20 p-2 text-white rounded-lg text-lg'>Log out</button>
      </div>
    </header>
  );
};

export default Header;
