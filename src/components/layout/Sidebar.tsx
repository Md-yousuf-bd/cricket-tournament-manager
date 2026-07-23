const Sidebar = () => {
    return (
      <aside className="w-64 bg-slate-900 text-white min-h-screen p-5">
        <h1 className="text-2xl font-bold mb-8">CTMS</h1>

        <nav>
          <ul className="space-y-4">
            <li className="cursor-pointer hover:text-yellow-400">Dashboard</li>
            <li className="cursor-pointer hover:text-yellow-400">Tournament</li>
            <li className="cursor-pointer hover:text-yellow-400">Teams</li>
            <li className="cursor-pointer hover:text-yellow-400">Players</li>
            <li className="cursor-pointer hover:text-yellow-400">Matches</li>
            <li className="cursor-pointer hover:text-yellow-400">Statistics</li>
          </ul>
        </nav>
      </aside>
    );
};

export default Sidebar