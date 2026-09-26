import { IData } from "@/types/type";
import Image from "next/image";
import WorkoutActions from "@/components/WorkoutActions";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Get all workouts and find the selected workout
const getWorkout = async (id: string): Promise<IData | undefined> => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  const data: IData[] = await res.json();

  return data.find(
    (workout) => workout.id === Number(id)
  );
};

const WorkoutDetails = async ({ params }: PageProps) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  // Workout not found
  if (!workout) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0B0D10] px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Workout Not Found
          </h1>

          <p className="mt-3 text-gray-400">
            The workout you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B0D10] text-white">
      <section className="container mx-auto px-4 py-8 sm:px-6 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* ================= IMAGE ================= */}
          <div className="relative h-[420px] overflow-hidden rounded-xl sm:h-[520px] lg:h-[645px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="flex flex-col">

            {/* TITLE */}
            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              {workout.name}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 text-base leading-6 text-gray-400">
              {workout.description}
            </p>

            {/* MUSCLE GROUPS */}
            <div className="mt-5 flex flex-wrap gap-3">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="badge border-none bg-[#B6FF00] px-4 py-3 font-semibold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* ================= STATS ================= */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-[#242832] bg-[#15171B]">

              {/* EQUIPMENT */}
              <div className="flex items-center justify-between border-b border-[#242832] px-5 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Equipment
                </span>

                <span className="text-sm text-gray-200">
                  {workout.equipment}
                </span>
              </div>

              {/* DIFFICULTY */}
              <div className="flex items-center justify-between border-b border-[#242832] px-5 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Difficulty
                </span>

                <span className="text-sm text-gray-200">
                  {workout.difficulty}
                </span>
              </div>

              {/* SETS */}
              <div className="flex items-center justify-between border-b border-[#242832] px-5 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Sets
                </span>

                <span className="text-sm text-gray-200">
                  {workout.sets}
                </span>
              </div>

              {/* REPS */}
              <div className="flex items-center justify-between border-b border-[#242832] px-5 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Reps
                </span>

                <span className="text-sm text-gray-200">
                  {workout.reps}
                </span>
              </div>

              {/* DURATION */}
              <div className="flex items-center justify-between border-b border-[#242832] px-5 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Duration
                </span>

                <span className="text-sm text-gray-200">
                  {workout.duration} min
                </span>
              </div>

              {/* CALORIES */}
              <div className="flex items-center justify-between border-b border-[#242832] px-5 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Calories
                </span>

                <span className="text-sm text-gray-200">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              {/* RATING */}
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Rating
                </span>

                <span className="text-sm text-gray-200">
                  ⭐ {workout.rating}
                </span>
              </div>
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-7">
              <h2 className="text-lg font-extrabold uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-4 space-y-4">
                {workout.instructions.map(
                  (instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-4 text-sm leading-6 text-gray-400"
                    >
                      <span className="shrink-0 text-gray-500">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  )
                )}
              </ol>
            </div>

            {/* ================= BUTTONS ================= */}
            <WorkoutActions workout={workout} />

          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkoutDetails;