import { FC } from "react";

const Shortcut :FC = () => {
    return(
        <div className="w-full flex flex-col">
            <p className="p-5 pt-3 pb-3 w-50 bg-emerald-600 shadow-lg shadow-emerald-100 text-white border border-white rounded-lg flex items-start font-semibold md:w-55 md:text-xl">Shortcut Section</p>
            <div className="flex justify-around items-center border border-gray-300 shadow-lg shadow-emerald-100 p-2 rounded-lg text-sm md:text-xl md:p-5 md:w-140">
                <a href="#" className="bg-emerald-200 p-3 rounded-lg">Pending List</a>
                <a href="#" className="bg-emerald-200 p-3 rounded-lg">Raise Request</a>
                <a href="#" className="bg-emerald-200 p-3 rounded-lg md:pr-8 md:pl-8">MIS</a>
            </div>
        </div>
    )
}

export default Shortcut;