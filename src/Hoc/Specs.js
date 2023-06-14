import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';


export function Specs({ name, amount, percentage, clr }) {
    return (
        <div className="specs">
            <p>{name}</p>
            <div className="specs_details">
                <h4>{amount}</h4>
                <div className="specs_details_icon" style={{ backgroundColor: clr == "red" ? "#FF0000" : "#00C165" }}>
                    {clr == "red" ? <CallReceivedIcon className='icon' style={{ height: "0.6rem" }} /> : <CallMadeIcon className='icon' style={{ height: "0.6rem" }} />}
                </div>
                <p>{percentage}</p>
            </div>
        </div>
    );

}
