import ScheduleComponents from "@/components/ScheduleComponents";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import MainPage from "./page/MainPage";
import MyInfoPage from "./page/MyInfoPage";
import SignUpPage from "./page/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/myinfo" element={<MyInfoPage />} />
      <Route path="/schedule" element={<ScheduleComponents />} />
    </Routes>
  );
}

export default App;
