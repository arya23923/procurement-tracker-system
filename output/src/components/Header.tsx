import { FC, useState } from 'react';
import Modal from './modal'
import Profileicon from './images/user.png'

const Header: FC = () => {
  const [isModal, setModal] = useState<boolean>(false);
  const closeModal = () => setModal(false);

  return (
    <header className='flex justify-between items-center w-full pt-0 pb-3 md:pt-4 md:pb-10'>
      <div className='text-xl md:text-4xl pr-2 font-semibold p-0 md:pl-10 md:mt-5 md:p-0 md:w-50 whitespace-nowrap'>Procurement Tracker</div>
      <div className='flex justify-between gap-x-1 md:gap-x-8'>
          <button onClick={() => setModal(!isModal)} className='bg-gray-400 md:w-11 md:h-11 w-8 h-8 border rounded-full border-gray-400 flex justify-center items-center'>
            <img src={Profileicon} alt="profile_icon" className='w-4 md:w-6'/>
          </button>
          <button className='bg-blue-500 w-20 p-2 text-white rounded-lg text-sm md:text-xl md:w-25'>Log out</button>
      </div>
      {isModal && <Modal onClose={closeModal}/> }
    </header>
  );
};

export default Header;
