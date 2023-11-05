import { useNavigate } from "react-router-dom";
import "../styles/main.css";

const Invitationn = () => {
  const navigate = useNavigate();

  return (
    <div className="container invitation">
      <div>
        <div className="image-container">
          <div className="image"></div>
          <div className="judul">
            <h3>The Wedding Of</h3>
            <br/>
            <h1>Tulisan di Atas Gambar</h1>
          </div>
          <button onClick={() => navigate("/content")}>Open Invitation</button>
          <div className="frame">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              rem repellat a harum. Officiis numquam quia dolore laborum autem
              ducimus quas nobis nulla dolorem deserunt, quibusdam fugiat atque,
              explicabo praesentium!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitationn;
