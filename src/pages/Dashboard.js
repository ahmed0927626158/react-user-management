import Car from "../../src/assets/images/car-line.png"
import Parking from '../../src/assets/images/parking-line.png'
import User from '../../src/assets/images/user-line.png'
import Dollar from '../../src/assets/images/money-dollar-circle-fill.png'
import "../styles/dashboard.css"
import SingleCard from "../components/reuseable/SingleCard"
import Revenue from "../charts/RevenueChar"
import CarStatics from "../charts/CarStatics"
function Dashboard(){
    const carObj={
        title:"Parked Cars",
        totaleNumber:20,
        icon: Car
    }

    const Daily_parkedObj={
        title:"Towday's Car",
        totaleNumber:100,
        icon: Parking
    }

    const client_Annually={
        title:"Annual Customer data",
        totaleNumber:1000,
        icon: User
    }
    const total_revenu={
        title:"Daily Revenue",
        totaleNumber:2000,
        icon: Dollar
    }
    return(
        <div className="dashboard">
            <div className="dashboard_wrapper">
                <div className="dashboard_card">
                <SingleCard item={carObj}/>
                <SingleCard item={Daily_parkedObj}/>
                <SingleCard item={total_revenu}/>
                <SingleCard item={client_Annually}/>
               
               
                </div>
                <div className="static">
                    <div className="stat">
                        <h3 className="stats_title">Revenue Statistics</h3>
                        <Revenue />
                       
                    </div>

                    <div className="stat">
                        <h3 className="stats_title">Car Statistics</h3>
                        <CarStatics />
                       
                    </div>

                   
                </div>
            </div>

        </div>
        )
}
export default  Dashboard