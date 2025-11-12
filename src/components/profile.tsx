import { Link, useParams } from "react-router-dom";
import userMock from "../mock/userMock.json";
import { useEffect, useState } from "react";
export default function Profile({ setisloggedIn }) {
  const [showpassword, setshowpassword] = useState(false);
  const { usernam, password } = useParams(); //despues cambiar usernam por una variable mas descriptiva
  const user = userMock.find(
    (u) => u.username === usernam && u.password_hash === password
  );
  useEffect(() => {
    if (!user) {
      setisloggedIn(false);
    } else {
      setisloggedIn(true);
    }
    return () => {
      setisloggedIn(false);
    };
  }, [user, setisloggedIn]);
  if (!user) {
    return <h1> No se inicio sesion</h1>;
  }
  const { image, name, username, password_hash, email } = user;
  const textoOculto = "*".repeat(password_hash.length);
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
        {showpassword ? <p>Password: {password_hash}</p> : <p>{textoOculto}</p>}
        <button onClick={() => setshowpassword(!showpassword)}>
          {showpassword ? <p>Ocultar contraseña</p> : <p>Mostrar contraseña</p>}
        </button>
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
