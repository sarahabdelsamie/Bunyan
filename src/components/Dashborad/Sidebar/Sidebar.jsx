import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar({ draftPage }) {

  const links = [
    { icon: "fa-chart-bar", title: "Status", path: "/" },

    {
      icon: "fa-users",
      title: "Users Management",
      path: "/users",
      page: "users",
    },

    {
      icon: "fa-building",
      title: "Projects Management",
      path: "/projects",
      page: "projects",
    },

    {
      icon: "fa-building",
      title: "Developers Management",
      path: "/developer",
      page: "developer",
    },

    { icon: "fa-users", title: "Cms" },
    { icon: "fa-message", title: "Live Chat" },
  ];

  return (
    <aside className={`${styles.sidebar} min-vh-100 py-4`}>
      <div className="fw-semibold px-4 mb-3 fs-4">
        Dashboard
      </div>

      <nav>
        {links.map((item, index) => (
          <NavLink
            to={item.path || "#"}
            className={`${styles.navItem} d-flex align-items-center gap-3 py-3 px-4`}
            key={index}
          >
            <i className={`fa-solid ${item.icon} fs-5`}></i>

            <span className="fs-5 d-flex align-items-center gap-2">
              {item.title}

              {draftPage === item.page && (
                <span
                  style={{
                    background: "red",
                    color: "white",
                    fontSize: "12px",
                    padding: "2px 6px",
                    borderRadius: "10px",
                  }}
                >
                  Draft
                </span>
              )}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;