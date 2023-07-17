import { useNavigate } from "react-router-dom";

function Page(){
    const navigate = useNavigate();

    return <div onClick={() => navigate('/aboutus')}>HELLO PINAKAMAMAHAL KO</div>
}


export default Page;