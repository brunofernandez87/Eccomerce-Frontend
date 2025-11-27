import { Navigate, Outlet } from "react-router-dom";

export default function AdminGuard({ user }) {
  if (!user || user.rol !== "admin") {
    const error = "No tenes acceso a esta ruta";
    return <Navigate to={`/error/${error}`} replace />;
  }
  return <Outlet />;
}
