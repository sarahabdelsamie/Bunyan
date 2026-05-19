import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  const [isDraft, setIsDraft] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      
      
      <Sidebar isDraft={isDraft} />

     
      <div style={{ flex: 1 }}>
        <Outlet context={{ setIsDraft }} />
      </div>

    </div>
  );
}