
import "../styles/live.css"
function LiveStream(){
    return (
        <div className="live">
            <img src="http://192.168.43.161:5000/parkingStream" className="frame" />
        </div>
    )
}
export default  LiveStream