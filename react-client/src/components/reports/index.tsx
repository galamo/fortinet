
import React, { PureComponent } from 'react';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button } from "primereact/button"


export default function Reports() {
    const [isAMT, setAMT] = useState(true)
    const [counter, setCounter] = useState(0)
    return <div>
        <h1 onClick={() => { setCounter(counter + 1) }} > Reprots {counter} </h1>
        <div>
            <Button onClick={() => {
                setAMT(!isAMT)
            }} label={"AMT"} />
        </div>
        <LineChartExampleMemoized isAMT={isAMT} />
    </div>
}

const LineChartExampleMemoized = React.memo(LineChartExample)
const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const extendedData = [...data, ...generateMore()]

function generateMore() {
    const newData = [];
    for (let index = 1; index < 50; index++) {
        newData.push({
            name: `Page A${Math.floor(Math.random() * 9)}`,
            uv: index * Math.floor(Math.random() * 93),
            pv: index * Math.floor(Math.random() * 95),
            amt: index * Math.floor(Math.random() * 96),
        })

    }
    return newData;
}
function LineChartExample(props: { isAMT: boolean }) {
    console.log("render big component")
    return (
        <ResponsiveContainer width={"100%"} height={300} >
            <LineChart
                width={1200}
                height={300}
                data={extendedData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                {props.isAMT ? <Line type="monotone" dataKey="amt" stroke="red" /> : null}
            </LineChart>
        </ResponsiveContainer>
    );
}
