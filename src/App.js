import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/homepage";
import Userpage from "./routes/userPage";
import Error from "./routes/error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/user" element={<Userpage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
