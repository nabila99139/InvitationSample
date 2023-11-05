import { useNavigate } from "react-router-dom";

const First = () => {
    const navigate =  useNavigate();
    return(
        <div>
            <h3>Home Page</h3>
            <button onClick={()=> navigate('/about')}>About</button>
        </div>
    )
};
export default First;