import { Route, Routes } from "react-router-dom";
import DashboardAdmin from "./pages/admin/Dashboard";
import MemberList from "./pages/admin/memberList";
import DashboardUser from "./pages/user/Dashboard";
import LoginPage from "./login";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="/dashboard" element={<DashboardAdmin></DashboardAdmin>}></Route>
        <Route path="/home" element={<DashboardUser></DashboardUser>}></Route>
        <Route path="/userList" element={<MemberList></MemberList>}></Route>
      </Routes>
    </>
  );
}
