
function SubscribeUs({icon, envelopeicon}){
return(

    <div className="subscribe-us-con">
        <div className="notification-gif">
           <img src={icon}  />
        </div>
        <div className="stay-tune-con">
            <h1>Stay Tuned!</h1>
            <p>Subscribed to our newsletter and stay updated.</p>
            <div className="input-field">
              <input type="text"  placeholder="Enter Valid Email"/>
              <img src={envelopeicon} className="envelope"/>
            </div>
            <button className="submit">Submit</button>
        </div>

    </div>
)
}

export default SubscribeUs;