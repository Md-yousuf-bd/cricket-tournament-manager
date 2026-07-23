import { useForm } from "react-hook-form";

interface TournamentFormData {
  name: string;
  venue: string;
  startDate: string;
  endDate: string;
  format: string;
}

const TournamentForm = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm<TournamentFormData>();

  const onSubmit = (data: TournamentFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-xl shadow-md mt-6"
    >
      <h2 className="text-2xl font-bold mb-6">Create Tournament</h2>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Tournament Name</label>

        <input
          {...register("name", { required: "Tournament name is required" })}
          className="w-full border rounded-lg px-4 py-2"
          placeholder="Enter tournament name"
        />

        {errors.name && (
          <p className="text-red-500 mt-1 ">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium"> Vanue </label>

        <input
          {...register("venue", { required: "Venue is required" })}
          className="w-full border rounded-lg px-4 py-3"
          placeholder="enter venue"
        />

        {errors.venue && (
          <p className="text-red-500 mt-1">{errors.venue.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Start Date</label>

        <input
          type="date"
          {...register("startDate", {
            required: "Start date is required",
          })}
          className="w-full border rounded-lg px-4 py-2"
        />
        {errors.startDate && (
          <p className="text-red-500 mt-1 ">{errors.startDate.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">End Date</label>

        <input
          type="date"
          {...register("endDate", {
            required: "End date is required",
          })}
          className="w-full border rounded-lg px-4 py-2"
        />
        {errors.endDate && (
          <p className="text-red-500 mt-1">{errors.endDate.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Tournament Format</label>

        <select
          {...register("format", {
            required: "Please select a format",
          })}
          className="w-full border rounded-lg px-4 py-2"
        >
          <option value="">Select Format</option>
          <option value="T20">T20</option>
          <option value="ODI">ODI</option>
          <option value="Test">Test</option>
        </select>

        {errors.format && (
          <p className="text-red-500 mt-1">{errors.format.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Create Tournament
      </button>
    </form>
  );
};


export default TournamentForm;