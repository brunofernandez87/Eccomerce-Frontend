import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  function handleClick() {
    alert("consulta enviada contactaremos a la brevedad");
    navigate("/");
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" required></input>
        <label htmlFor="lastName">Apellido</label>
        <input type="text" name="lastName" required></input>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required></input>
        <label htmlFor="consultation">Consulta</label>
        <textarea name="consultation" required></textarea>
        <button type="button" onClick={handleClick}>
          Enviar Consulta
        </button>
      </form>
    </div>
  );
}
