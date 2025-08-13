import { FC } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface bar {
    key : string,
    value : number,
}

const Graph : FC = () => {
    const data : bar[] = [
        {key : "RFQ awaited", value : 55},
        {key : "Technical & Commercial Offer Awaited", value : 24},
        {key : "Technical Offer Awaited", value : 12},
        {key : "Commercial Offer Awaited", value : 10},
        {key : "TR & CR Awaited", value : 40},
        {key : "TR Awaited", value : 33},
        {key : "CR Awaited", value : 12},
        {key : "Price Offer Awaited", value : 27},
        {key : "Negotiation Awaited", value : 15},
        {key : "Final Price Offer Awaited", value : 11},
        {key : "Returned", value : 5},
        {key : "Dropped", value : 1},
        {key : "Hold", value : 7},
        {key : "Pending PR Line Items for RFQ", value : 134},
        {key : "PR Pending for Allocation", value : 22},
        {key : "UMCs Pending for Categorization", value : 9},
    ]

    return(
        <div className="flex flex-col items-start pb-10">
            <p className="font-semibold bg-emerald-600 rounded-lg text-white shadow-lg shadow-emerald-100 md:text-2xl p-5 pt-3 pb-3">Req vs Status</p>
            <BarChart width={600} height={350} data={data} className="border rounded-lg border-gray-300 shadow-lg shadow-emerald-100">
                <XAxis dataKey="key" stroke="#114d39ff" tick={{ fontSize: 15 }} angle={-45} textAnchor="end" height={80}/>
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="value" fill="#1bc089" barSize={30} />
            </BarChart>
        </div>
    )
}

export default Graph;