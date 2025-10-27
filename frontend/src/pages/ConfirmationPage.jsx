import { useLocation } from "react-router-dom";
import ConfirmationTicket from "../components/ConfirmationTicket";

export default function ConfirmationPage() {
  const { state } = useLocation();

  if (!state) {
    return <p>No confirmation data found.</p>;
  }

  return (
    <main>
      <ConfirmationTicket data={state} />
    </main>
  );
}
