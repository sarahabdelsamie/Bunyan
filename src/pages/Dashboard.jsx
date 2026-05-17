import { Routes, Route } from "react-router-dom";

import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";

import StatusPage from "./StatusPage";
import Users from "./Users";
import Projects from "./Projects";
import Developer from "./Developer";

import TableDashboard from "../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../components/ui/FormDashboard/FormDashboard";



function Dashboard() {
  return (
    <>
      <Navbar adminName="Sarah" />

      <div className="d-flex">

        <Sidebar />

        <main className="flex-grow-1">

          <Routes>

            <Route path="/" element={<StatusPage />} />


            <Route path="/users" element={<Users />}>
              <Route index element={<TableDashboard name="Users" buttonname="Add New User" />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>


            <Route path="/projects" element={<Projects />}>
              <Route index element={<TableDashboard name="Projects" buttonname="Add New Project" />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>


            <Route path="/developer" element={<Developer />}>
              <Route index element={<TableDashboard name="Developers" buttonname="Add New Developer" />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>


          </Routes>

        </main>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;