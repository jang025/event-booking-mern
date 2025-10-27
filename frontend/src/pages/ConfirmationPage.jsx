import { useLocation } from "react-router-dom";
import ConformationTicket from "../components/ConformationTicket";

export default function ConfirmationPage() {
  const { state } = useLocation();

  return (
    <>
      <main>
        <ConformationTicket data={state} />
      </main>
    </>
  );
}
