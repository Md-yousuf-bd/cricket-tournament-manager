import { NavLink } from "react-router-dom";
import { sidebarItems } from "../../data/sitebarItems";

const Sidebar = () => {
    return (
      <aside className="w-64 bg-slate-900 text-white min-h-screen p-5">
        <h1 className="text-2xl font-bold mb-8">🏏 CTMS</h1>

        <nav className="px-3">
            {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                    <NavLink
                      key={item.id}
                       to={item.path}
                       className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                  isActive
                    ? "bg-green-600"
                    : "hover:bg-slate-800"
                }`
              }
                     >
                        <Icon size={20} />
                        <span>{item.title}</span>
                    </NavLink>
                );
            })}
        </nav>
      </aside>
    );
};

export default Sidebar