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
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Juan Perez"
          className="input-register"
        />
        <label htmlFor="username"> Username</label>
        <input
          type="text"
          name="username"
          required
          placeholder="Juan123"
          className="input-register"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="juanperez@email.com"
          className="input-register"
        />
        <label htmlFor="password_hash"> Password: </label>
        <input
          type="password"
          name="password_hash"
          required
          placeholder="************"
          className="input-register"
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
