import { useNavigate} from "react-router-dom";
import Header from "../shared/header/Index";
import BlogList from "../shared/blog-list/Index";
import SubscribeUs from "../components/SubscribeUs";
import notificationGif from '../assets/images/notification.gif'
import envelope from '../assets/svgs/envelope.svg'
function Page(){
    // const navigate = useNavigate();
    // return <div onClick={() => navigate('/aboutus')}>HELLO PINAKAMAMAHAL KO</div>
    return(
        <div className="bg">
           <Header />
           <BlogList />
           <SubscribeUs icon={notificationGif} envelopeicon={envelope}/>
        </div >
    )
}


export default Page;