"use client";

import { useState } from "react";
import toast from "react-hot-toast";
interface WorkoutActionsProps {
    workout: {
        name: string;
    [key: string]: any;
    };
}

const WorkoutActions = () => {
  const [added, setAdded] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() => setAdded((prev) => !prev)}
        className={`btn h-12 rounded-lg border-none px-5 ${
          added
            ? "bg-white text-black"
            : "bg-[#B6FF00] text-black hover:bg-[#a8ed00]"
        }`}
      >
        {added ? "✓ Added to today's plan" : "+ Add to today's plan"}
        {toast.success(`${workout.name} added to today's plan`)}
      </button>

      <button
        type="button"
        onClick={() => setSaved((prev) => !prev)}
        className={`btn h-12 rounded-lg bg-transparent ${
          saved
            ? "border-[#B6FF00] text-[#B6FF00]"
            : "border-[#343A46] text-gray-300"
        }`}
      >
        {saved ? "★ Saved" : "☆ Save for later"}
      </button>
    </div>
  );
};

export default WorkoutActions;