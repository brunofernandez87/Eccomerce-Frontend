import "../../styles/user/changePassword.css";

//Falta Validacion de que las contraseñas nuevas sean iguales y distintas a la actual y que la actual sea correcta
//Arreglar que cuando se cambia contraseña no aparezca la pantalla en blanco y rompa todo
export default function ChangePassword() {
  return (
    <div className="change-password-container">
      <form
        action="/changePassword"
        method="Put"
        className="change-password-form"
      >
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
