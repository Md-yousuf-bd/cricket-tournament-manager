import { recentMatches } from "../../data/recentMaches";

const RecentMatchesTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">Recent Matches</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Team A</th>
            <th className="text-left py-3">Team B</th>
            <th className="text-left py-3">Winner</th>
            <th className="text-left py-3">Date</th>
            <th className="text-left py-3">status</th>
          </tr>
        </thead>

        <tbody>
          {recentMatches.map((match) => (
            <tr key={match.id} className="border-b hover:bg-gray-50">
              <td className="py-3">{match.teamA}</td>
              <td className="py-3">{match.teamB}</td>
              <td className="py-3">{match.winner}</td>
              <td className="py-3">{match.date}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm text-white 
                    ${
                      match.status === "Completed"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                >{match.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default RecentMatchesTable;