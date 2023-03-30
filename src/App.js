import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/homepage";
import Login from "./routes/login";
import Error from "./routes/error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
