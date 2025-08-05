import { FC } from 'react';
import Sidebar from './images/sidebar.svg';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: FC<HeaderProps> = ({toggleSidebar}) => {
  return (
    <header className='flex justify-between items-center w-full'>
      <div className='flex w-100'>
        <button onClick={toggleSidebar}>
          <img src={Sidebar} alt="sidebar" className="w-13 pr-4" />
        </button>
        <div className='text-4xl font-semibold'>Procurement Tracker</div>
      </div>
      <div>
          <button className='bg-blue-500 w-20 p-2 text-white rounded-lg text-lg'>Log out</button>
      </div>
    </header>
  );
};

export default Header;
