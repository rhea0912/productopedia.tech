import Header from "../shared/header/Index";
import BlogList from "../shared/blog-list/Index";
import SubscribeUs from "../components/SubscribeUs";
import notificationGif from '../assets/images/notification.gif'
import envelope from '../assets/svgs/envelope.svg'
import Footer from "../shared/footer/Index";
import { useGlobalState } from "./Context";
import { useEffect } from "react";

function Page(){
    const [gs] = useGlobalState();

    //use this so that we can't scroll the body element when sidebar is open
    useEffect(() => {
        document.body.style.overflow = gs.isSidebarOpen ? 'hidden' : 'auto';
    }, [gs.isSidebarOpen]);

    return(
        <>
           <Header />
           <BlogList />
           <SubscribeUs icon={notificationGif} envelopeicon={envelope}/>
           <Footer />
        </>
    )
}


export default Page;