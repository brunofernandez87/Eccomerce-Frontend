import { useState } from "react";
import "../../styles/user/changePassword.css";
import { useUser } from "../../context/userContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserList } from "../../context/userListContext";

//Falta Validacion de que las contraseñas nuevas sean iguales y distintas a la actual y que la actual sea correcta

export default function ChangePassword() {
  const { user, setuser } = useUser();
  const { userList, setuserList } = useUserList();
  const navigate = useNavigate();
  if (!user) {
    const error = "sesion no iniciada";
    return <Navigate to={`/error/${error}`} replace />;
  }
  // const [newpassword, setnewpassword] = useState();
  // const [repeatpassword, setrepeatpassword] = useState();
  const password = user.password_hash;
  function validator({ actualpassword, newPassword }) {
    if (actualpassword != password) {
      alert("La contraseña actual no coincide");
      return true;
    }
    if (newPassword == password) {
      alert("No se puede tener la misma contraseña");
      return true;
    }
    return false;
  }
  function modificatedPassword(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = validator({
      actualpassword: formData.get("password"),
      newPassword: formData.get("newPassword"),
    });
    if (result == false) {
      const newuser = {
        ...user,
        password_hash: formData.get("newPassword"),
      };
      setuser(newuser);
      const copyList = userList.map((u) => {
        if (u.id_user == newuser.id_user) {
          return newuser;
        }
        return u;
      });
      setuserList(copyList);
      navigate(`/profile/${newuser.username}/${newuser.password_hash}`);
    }
  }
  return (
    <div className="change-password-container">
      <form onSubmit={modificatedPassword} className="change-password-form">
        <label htmlFor="password">Contraseña Actual</label>
        <input type="password" name="password" required />
        <label htmlFor="newPassword">Nueva Contraseña</label>
        <input type="password" name="newPassword" required />
        <label htmlFor="RepeatNewPassword">Repita Su Nueva Contraseña</label>
        <input type="password" name="RepeatNewPassword" required />
        <button type="submit" className="change-password-button">
          Cambiar Contraseña
        </button>
      </form>
    </div>
  );
}
