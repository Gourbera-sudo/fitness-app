"use client";

import { IData } from "@/types/type";
import { useState } from "react";
import { toast } from "react-toastify";

interface WorkoutActionsProps {
  info: IData;
}

const WorkoutActions = ({ info }: WorkoutActionsProps) => {
  const [added, setAdded] = useState(false);
  const [saved, setSaved] = useState(false);

  const handlePlan = () => {
    if (!added) {
      setAdded(true);
      toast.success(`${info.name} added to today's plan`);
    } else {
      setAdded(false);
      toast.info(`${info.name} removed from today's plan`);
    }
  };

  const handleSave = () => {
    if (!saved) {
      setSaved(true);
      toast.success(`${info.name} saved for later`);
    } else {
      setSaved(false);
      toast.info(`${info.name} removed from saved workouts`);
    }
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={handlePlan}
        className={`btn h-12 rounded-lg border-none px-5 font-medium ${
          added
            ? "bg-white text-black"
            : "bg-[#B6FF00] text-black"
        }`}
      >
        {added ? "✓ Added to today's plan" : "+ Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={handleSave}
        className={`btn h-12 rounded-lg bg-transparent px-5 ${
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