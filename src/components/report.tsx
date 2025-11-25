import { useState } from "react";
import image from "../assets/mockReporte.jpg";
import reportMock from "../mock/reportMock.json";
import ReportsCard from "./reportsCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../context/userContext";
export default function Report() {
  const { id } = useParams();
  const date = new Date();
  const { user } = useUser();
  const [page, setpage] = useState(1);
  const [reportList, setreportList] = useState(reportMock);
  // esto mas adelante lo va a realizar el back es de ejemplo
  const maxReports = 5;
  const limite = page * maxReports;
  const limiteant = limite - maxReports;
  const reportListFilter = reportList.slice(limiteant, limite);
  const navigate = useNavigate();
  let report = null;
  if (id) {
    report = reportMock.find((r) => r.id_report == parseInt(id));
  }
  function handleClickPrevious() {
    setpage(page - 1);
  }
  function handleClickNext() {
    setpage(page + 1);
  }
  function createReport() {
    setpage(1);
    const username = user.username;
    const id = reportList.length + 1;
    const newReport = {
      id_report: id,
      date_generated: date.toLocaleDateString(),
      generated_by_user: username,
    };
    const updatedReport = [...reportList, newReport];
    setreportList(updatedReport);
  }
  return (
    <div>
      <button onClick={createReport}>Crear reporte</button>
      <button
        onClick={() => {
          setpage(1);
          navigate("/report");
        }}
      >
        Mostrar Reportes
      </button>
      {!report ? (
        reportListFilter.map((r) => (
          <div key={r.id_report} className="Report-Cart">
            <Link to={`/report/${r.id_report}`}>
              <ReportsCard
                image={image}
                date={r.date_generated}
                username={r.generated_by_user}
              />
            </Link>
          </div>
        ))
      ) : (
        <ReportsCard
          image={image}
          date={report?.date_generated}
          username={report?.generated_by_user}
        />
      )}
      {!report && (
        <div>
          {page > 1 && (
            <button className="Next-Page" onClick={handleClickPrevious}>
              Pagina anterior
            </button>
          )}
          {limite < reportList.length && (
            <button className="Previous-Page" onClick={handleClickNext}>
              Pagina siguiente
            </button>
          )}
        </div>
      )}
    </div>
  );
}
