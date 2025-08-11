import React, {FC} from "react";

interface ModalProps {
  onClose: () => void; 
}

const Modal : FC<ModalProps> = ({onClose}) => {
    return(
         <div className="fixed inset-0 bg-black/75 z-10 flex items-center justify-center">
            <div className="bg-white flex justify-between items-start p-6 rounded-lg w-70 h-50 md:w-100 md:h-80">
                <p className="p-2 md:text-3xl">User details</p>
                <button onClick={onClose} className="bg-gray-500 w-10 rounded-full p-2 md:text-xl md:w-11">x</button>
            </div>
        </div>
    )
}

export default Modal;