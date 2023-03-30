import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/homepage";
import Userpage from "./routes/userpage";
import Error from "./routes/error";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/user" element={<Userpage />} />
    </Routes>
  );
}

export default App;
