import { useParams } from "react-router-dom";

export default function Error() {
  const { error } = useParams();
  return (
    <div>
      <div>
        <p>
          <b> Error: {error}</b>
        </p>
      </div>
    </div>
  );
}
