import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import BookTicketPage from "./pages/BookTicketPage";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import Eventcard from "./components/Eventcard";
import { sampleEvents } from "./components/data/sampleEvents.js";

const App = () => {
  return (
    <main>
      {/* <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
};

export default App;
