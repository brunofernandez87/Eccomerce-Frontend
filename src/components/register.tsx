import { useState } from "react";
import mockUser from "../mock/userMock.json";
import "../styles/register.css";
export default function Register() {
  const [email, setemail] = useState("");
  const handleSubmit = (event) => {
    const user = mockUser.find((u) => u.email === email);
    if (user) {
      event.preventDefault();
      alert("El email ya esta en uso");
    } else {
      alert("Usuario Registrado");
    }
  };
  return (
    <div className="Container-Register">
      <form onSubmit={handleSubmit}>
        <h2>Crear cuenta</h2>
        <label htmlFor="name">nombre</label>
        <input
          type="text"
          name="name"
          required
          placeholder="juan perez"
          className="input-register"
        />
        <label htmlFor="username"> username</label>
        <input
          type="text"
          name="username"
          required
          placeholder="juan perez 123"
          className="input-register"
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="juanperez@gmail.com"
          className="input-register"
        />
        <label htmlFor="password_hash"> Password: </label>
        <input
          type="password"
          name="password_hash"
          required
          placeholder="****"
          className="input-register"
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
