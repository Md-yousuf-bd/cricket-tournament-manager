const Tournament =  () => {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Tournaments</h1>
            <p className="text-gray-500 mt-1">Manage all cricket tournament</p>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
            + Create Tournament
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-500 text-center py-10">No tournaments found</p>
        </div>
      </div>
    );
}

export default Tournament