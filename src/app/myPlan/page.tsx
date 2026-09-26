import Link from 'next/link';
import React from 'react';
export  function MyPlanPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <div className="flex space-x-6">
          <Link href="/workouts" className="text-gray-400 hover:text-white">
            Workouts
          </Link>
          <a href="/my-plan" className="text-green-400 font-semibold">
            My Plan
          </a>
        </div>
      </nav>

      
      <main className="flex-1 px-6 py-8">
        
        <div className="grid grid-cols-3 gap-4 text-center mb-8">
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-sm text-gray-400">Exercises</p>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-sm text-gray-400">Minutes</p>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-sm text-gray-400">Calories</p>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>

        
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Today’s Plan</h2>
            <button className="bg-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-600">
              Saved
            </button>
          </div>

          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">NOTHING HERE YET</p>
            <p className="text-gray-500 mb-6">
              Browse the library and add a lift to get today moving
            </p>
            <Link
              href="/workouts"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded"
            >
              Go to workouts
            </Link>
          </div>
        </div>
      </main>

      
      <footer className="text-center text-gray-500 text-sm py-4 border-t border-gray-700">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </footer>
    </div>
  );
}


export default MyPlanPage;