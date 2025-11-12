import userMock from "../mock/userMock.json";
import { useState } from "react";
export default function Recovery() {
  const [email, setemail] = useState("");
  const handlesubmit = (event) => {
    const user = userMock.find((u) => u.email === email);
    if (user) {
      alert("Se envio el correo");
    } else {
      event.preventDefault();
      alert("Email no encontrado");
    }
  };
  return (
    <form onSubmit={handlesubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <button type="submit"> Enviar Mail</button>
    </form>
  );
}
