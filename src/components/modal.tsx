import React, {FC} from "react";

const Modal : FC = () => {
    return(
         <div className="fixed inset-0 bg-black/75 z-10 flex items-center justify-center">
            <div className="bg-white flex justify-between p-6 rounded-lg w-40">
                <p>User details</p>
                <button className="bg-gray">x</button>
            </div>
        </div>
    )
}

export default Modal;