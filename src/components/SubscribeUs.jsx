
function SubscribeUs({icon, envelopeicon}){
return(

    <div className="subscribe-us-con">
        <div className="notification-gif">
           <img src={icon}  />
        </div>
        <div className="stay-tune-con">
            <h1>Stay Tuned!</h1>
            <p>Subscribed to our newsletter and stay updated.</p>
            <input type="text"  placeholder="Enter Valid Email"/>
            <img src={envelopeicon} className="envelope"/>
        </div>
       
    </div>
)
}

export default SubscribeUs;