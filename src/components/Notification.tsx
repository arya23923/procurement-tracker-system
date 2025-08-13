import { FC } from "react";

const Notification: FC = () => {
    return(
        <div className="flex flex-col items-start p-0 pt-5 pb-5">
            <p className="font-semibold p-4 md:text-xl bg-emerald-600 shadow-lg shadow-emerald-100 text-white border rounded-lg">Notification Panel</p>
            <div className="p-15 pr-20 pl-20 border border-gray-300 rounded-lg shadow-lg shadow-emerald-100 w-80 pb-10 md:w-140 md:p-20"></div>
        </div>
    )
}

export default Notification;