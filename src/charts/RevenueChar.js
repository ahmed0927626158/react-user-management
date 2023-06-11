import { ResponsiveContainer,BarChart,Bar,XAxis,Tooltip } from "recharts"
import mileStaticData from '../assets/dummy-data/mileStatics'
const Revenue=()=>{
    return(
        <ResponsiveContainer width="100%" >
        <BarChart data={mileStaticData} >
            <XAxis dataKey="name" stroke="#2884ff"></XAxis>
            <Bar  dataKey="mileStats" stroke="#2884ff"
             fill="#2884ff" barSize={30}/>
            <Tooltip wrapperClassName="tooltip_style" cursor={false}/>

        </BarChart>
    </ResponsiveContainer>
    )
}

export default Revenue