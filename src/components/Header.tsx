import { FC, useState } from 'react';
import Modal from './modal'
import Profileicon from './images/user.png'

const Header: FC = () => {
  const [isModal, setModal] = useState<boolean>(false);
  const closeModal = () => setModal(false);

  return (
    <header className='flex justify-between items-center w-full pt-4'>
      <div className='flex w-100'>
        <div className='text-xl md:text-4xl font-semibold p-0 md:pl-15 md:mt-5 md:p-0 md:w-50 whitespace-nowrap'>Procurement Tracker</div>
      </div>
      <div className='flex justify-between gap-x-2 md:gap-x-5'>
          <button onClick={() => setModal(!isModal)} className='bg-gray-400 md:w-11 w-10 border rounded-full border-gray-400 m-5 flex justify-center items-center'>
            <img src={Profileicon} alt="profile_icon" className='w-6'/>
          </button>
          <button className='bg-blue-500 w-20 p-2 text-white rounded-lg md:text-xl md:w-25'>Log out</button>
      </div>
      {isModal && <Modal onClose={closeModal}/> }
    </header>
  );
};

export default Header;
