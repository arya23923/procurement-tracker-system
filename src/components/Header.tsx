import { FC } from 'react';
// import { FaBars } from 'react-icons/fa';
import Sidebar from 'src/components/images/sidebar.svg'

const Header: FC = () => {
  return (
    <header className='flex justify-between items-center w-full'>
      <div className='flex'>
        <img className='w-18 pr-8' src={Sidebar} alt="sidebar" />
        <div className='text-4xl'>Procurement Tracker</div>
      </div>
      <div>
          <button className='bg-blue-500 w-20 p-2 text-white rounded-lg text-lg'>Log out</button>
      </div>
    </header>
  );
};

export default Header;
