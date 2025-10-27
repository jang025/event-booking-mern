import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Eventcard from "./components/Eventcard";
import { sampleEvents } from "./components/data/sampleEvents.js";

const App = () => {
  return (
    <main>
      {/* <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes> */}
      <Eventcard event={sampleEvents[0]} />
    </main>
  );
};

export default App;
