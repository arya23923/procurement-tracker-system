import { FC } from "react";

const Key:FC = () => {
    return(
        <div className="border rounded-lg border-gray-300">
            <div className="flex justify-between p-3">
                <p className="font-semibold md:text-2xl flex items-center">Key Notes</p>
                <button className="bg-blue-500 text-white rounded-lg p-2 text-sm md:text-lg">Save</button>
            </div>
            <textarea spellCheck={false} name="postContent" placeholder="Write your thoughts here..." rows={5} className="rounded-lg border border-gray-200 
            w-100 text-gray-500 p-2 md:w-140 focus:text-gray-800 focus:border-gray-500"/>
        </div>
    )
}

export default Key;