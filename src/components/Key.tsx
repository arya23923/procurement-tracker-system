import { FC, useState, useEffect } from "react";

const Key: FC = () => {
    const [notes, setNotes] = useState("");

    useEffect(() => {
        const savedNotes = localStorage.getItem("userNotes");
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNotes(e.target.value);
    };

    const handleSave = () => {
        localStorage.setItem("userNotes", notes);
        console.log("Saved notes:", notes);
    };

    return (
        <div className="border rounded-lg border-gray-300 shadow-lg shadow-emerald-100">
            <div className="flex justify-between p-3">
                <p className="font-semibold bg-emerald-600 text-white rounded-lg p-5 pt-3 pb-3 md:text-2xl flex items-center">Key Notes</p>
                <button onClick={handleSave} className="bg-blue-500 text-white rounded-lg p-2 text-sm md:text-lg">Save</button>
            </div>
            <textarea
                value={notes}
                onChange={handleChange}
                spellCheck={false}
                name="postContent"
                placeholder="Write your thoughts here..."
                rows={5}
                className="rounded-lg border border-gray-200 w-full text-gray-500 text-sm p-2 md:text-lg md:w-140 focus:text-gray-800 focus:border-gray-500"
            />
        </div>
    );
};

export default Key;


