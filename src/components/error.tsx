import { useParams } from "react-router-dom";

export default function Error() {
  const { error } = useParams();
  return (
    <div>
      <div>
        <p>
          <b> lo sentimos hubo un error {error}</b>
        </p>
      </div>
    </div>
  );
}
