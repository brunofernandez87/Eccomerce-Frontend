import { useState } from "react";
import mockUser from "../mock/userMock.json";
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
        <label htmlFor="name">nombre</label>
        <input type="text" name="name" required />
        <label htmlFor="username"> username</label>
        <input type="text" name="username" required />
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <label htmlFor="password_hash"> Password: </label>
        <input type="password" name="password_hash" required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
