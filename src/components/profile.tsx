import { Link } from "react-router-dom";
import User from "../mock/userMock.json";
const mockUser = User[0];
const image = mockUser.image;
const name = mockUser.name;
const username = mockUser.username;
const password = "contra 123";
const email = mockUser.email;
export default function Profile() {
  return (
    <div className="Div-Profile">
      <div className="Image-Profile">
        <img src={image} alt="Profile.png" />
      </div>
      <div className="Username-Profile">
        <p> Nombre: {name}</p>
      </div>
      <div className="Username-Profile">
        <p>Username: {username}</p>
      </div>
      <div className="Password-Profile">
        <p>Password: {password}</p>
      </div>
      <div className="Email-Profile">
        <p>Email: {email}</p>
      </div>
      <div className="ChangePassword-Profile">
        <Link to="/changePassword" title="Cambiar Contraseña">
          <button>Cambiar Contraseña</button>
        </Link>
      </div>
    </div>
  );
}
