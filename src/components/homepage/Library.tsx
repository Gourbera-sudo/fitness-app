import { IData } from "@/types/type";
import LibraryCard from "./LibraryCard";

const getData = async (): Promise<IData[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch library data");
  }

  const data: IData[] = await res.json();

  return data;
};

const Library = async () => {
  const libraryData = await getData();

  return (
    <div className="bg-[#0B0D10]">
      <section className="container mx-auto my-[70px] px-10">
        <div className="mb-10 text-start">
          <h2 className="text-[30px] font-bold text-white">THE LIBRARY</h2>

          <p className="mt-2 text-slate-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {libraryData.map((info) => (
            <LibraryCard key={info.id} info={info} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Library;
