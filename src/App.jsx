import { Route, Routes } from "react-router-dom";
import DashboardAdmin from "./pages/admin/Dashboard";
import DashboardUser from "./pages/user/Dashboard";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardUser></DashboardUser>}></Route>
        <Route path="/admin" element={<DashboardAdmin></DashboardAdmin>}></Route>
      </Routes>
    </>
  );
}
