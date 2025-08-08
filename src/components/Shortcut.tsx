import { FC } from "react";

const Shortcut :FC = () => {
    return(
        <div className="p-5">
            <p className="p-5">Shortcut Section</p>
            <div className="flex justify-around items-center border border-gray-300 p-5 rounded-lg">
                <a href="#" className="bg-gray-200 p-3 rounded-lg">Pending List</a>
                <a href="#" className="bg-gray-200 p-3 rounded-lg">Raise Request</a>
                <a href="#" className="bg-gray-200 p-3 pr-8 pl-8 rounded-lg">MIS</a>
            </div>
        </div>
    )
}

export default Shortcut;