import { FC } from "react";

interface Batchrun {
    name : string,
    lastrun : string,
    nextrun : string,
}

const Batch : FC = () => {
    const data : Batchrun[] = [
        {name : "Batch 1", lastrun : "5/27/25 20:30", nextrun : "5/28/25 20:30"},
        {name : "Batch 2", lastrun : "5/27/25 23:30", nextrun : "5/28/25 23:30"},
        {name : "Batch 3", lastrun : "5/27/25 6:30", nextrun : "5/28/25 6:30"},
    ]
    return(
        <div className="flex flex-col items-start">
            <p className="font-semibold bg-emerald-600 text-white rounded-lg p-5 pt-3 pb-3 md:text-2xl p-5">Batch Runs</p>
            <table className="text-sm font-normal p-5 border rounded-lg border-gray-300 shadow-lg shadow-emerald-100 w-full md:text-lg">
               <thead className="font-normal p-5">
                    <tr> 
                        <th className="border border-gray-300 p-2 md:p-3">Batch Name</th>
                        <th className="border border-gray-300 p-2 md:p-3">Last Run</th>
                        <th className="border border-gray-300 p-2 md:p-3">Next Run</th>
                    </tr>
               </thead>
                <tbody className="p-5">
                    {data.map((row, index) => (
                        <tr key={index} className="p-5">
                            <td className="border border-gray-300 p-2 md:p-3">{row.name}</td>
                            <td className="border border-gray-300 p-2 md:p-3">{row.lastrun}</td>
                            <td className="border border-gray-300 p-2 md:p-3">{row.nextrun}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Batch;