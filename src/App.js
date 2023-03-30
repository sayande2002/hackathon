import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/homepage";
import Student from "./routes/student";
import Staff from "./routes/staff";
import Error from "./routes/error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/student" element={<Student />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
