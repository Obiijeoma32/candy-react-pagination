import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Images from "./components/Images";
import User from "./components/User";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/image" element={<Images />} />
      </Routes>
    </>
  );
}

export default App;
