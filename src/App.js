import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/homepage";
import Userpage from "./routes/userPage";
import Error from "./routes/error";
import DataProvider from "./context/datacontext";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user" element={<Userpage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
