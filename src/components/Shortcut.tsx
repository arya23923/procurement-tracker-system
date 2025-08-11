import { FC } from "react";

const Shortcut :FC = () => {
    return(
        <div className="w-full flex flex-col">
            <p className="p-5 flex items-start font-semibold md:text-2xl">Shortcut Section</p>
            <div className="flex justify-around items-center border border-gray-300 p-2 rounded-lg text-sm md:text-xl md:p-5 md:w-140">
                <a href="#" className="bg-gray-200 p-3 rounded-lg">Pending List</a>
                <a href="#" className="bg-gray-200 p-3 rounded-lg">Raise Request</a>
                <a href="#" className="bg-gray-200 p-3 rounded-lg md:pr-8 md:pl-8">MIS</a>
            </div>
        </div>
    )
}

export default Shortcut;