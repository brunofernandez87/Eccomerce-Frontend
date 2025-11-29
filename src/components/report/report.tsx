import { useState } from "react";
import image from "../../assets/mockReporte.jpg";
import reportMock from "../../mock/reportMock.json";
import ReportsCard from "./reportsCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../context/userContext";
import "../../styles/report/report.css";
import FilterCategory from "../filterCategory";

export default function Report() {
  const { id } = useParams();
  const date = new Date();
  const { user } = useUser();
  const [page, setpage] = useState(1);
  const [reportList, setreportList] = useState(reportMock);
  const [reportListFilter, setreportListFilter] = useState(reportList);
  // esto mas adelante lo va a realizar el back es de ejemplo
  const maxReports = 5;
  const limite = page * maxReports;
  const limiteant = limite - maxReports;
  const reports = reportListFilter.slice(limiteant, limite);
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
  function filterReport(event) {
    const value = event.target.value;
    if (value == "") {
      setreportListFilter(reportMock);
      setpage(1);
      return;
    }
    const result = reportList.filter((r) => r.generated_by_user == value);
    setpage(1);
    setreportListFilter(result);
  }
  return (
    <div className="report-page-container">
      {!report && (
        <div className="report-actions-wrapper">
          <button onClick={createReport}>Crear reporte</button>
          <button
            onClick={() => {
              setpage(1);
              navigate("/report");
            }}
          >
            Mostrar Reportes
          </button>
        </div>
      )}

      {!report ? (
        <div className="report-list-container">
          <FilterCategory
            products={reportList}
            category={"generated_by_user"}
            filter={filterReport}
            label={"Visualizar el reporte de"}
          />
          {reports.map((r) => (
            <div key={r.id_report} className="Report-Cart">
              <Link to={`/report/${r.id_report}`}>
                <ReportsCard
                  image={image}
                  date={r.date_generated}
                  username={r.generated_by_user}
                  print={false}
                />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="report-detail-view">
          <ReportsCard
            image={image}
            date={report?.date_generated}
            username={report?.generated_by_user}
            print={true}
          />
        </div>
      )}

      {!report && (
        <div className="pagination-container">
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
