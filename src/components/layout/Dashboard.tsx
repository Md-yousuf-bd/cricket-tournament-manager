import StatCard from "../../components/cards/StatCard";

import { FaUser, FaUserFriends, FaCalendarAlt, FaTrophy } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard title="Teams" value={12} icon={FaUser} color="bg-blue-500" />
        <StatCard
          title="Players"
          value={180}
          icon={FaUserFriends}
          color="bg-green-500"
        />
        
        <StatCard
          title="Matches"
          value={25}
          icon={FaCalendarAlt}
          color="bg-yellow-500"
        />

        <StatCard
          title="Tournaments"
          value={2}
          icon={FaTrophy}
          color="bg-red-500"
        />
      </div>
    </div>
  );
};

export default Dashboard;
