import Link from "next/link";
import Image from "next/image";
import { IData } from "@/types/type";
import cardImage from "@/assets/cardImage.png";

interface LibraryCardProps {
  info: IData;
}

const LibraryCard = ({ info }: LibraryCardProps) => {
  return (
    <Link
      href={`/workouts/${info.id}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-md border border-[#35404A] bg-[#15171B] transition-all duration-300 hover:-translate-y-1 hover:border-[#B6FF00]">

        
        <div className="relative h-[175px] w-full overflow-hidden">
          <Image
            src={cardImage}
            alt={info.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        
        <div className="px-5 pb-4 pt-5">

          
          <div className="mb-4 flex flex-wrap gap-2">
            {info.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#B6FF00] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          
          <h2 className="text-[19px] font-black uppercase leading-tight tracking-wide text-white">
            {info.name}
          </h2>

          
          <p className="mt-2 text-sm text-[#858C95]">
            {info.equipment}
          </p>

          
          <div className="my-4 h-px bg-[#292E35]" />

          
          <div className="flex items-center gap-5 text-xs text-[#9299A2]">

            <div className="flex items-center gap-1.5">
              <span className="text-sm">◷</span>
              <span>{info.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-sm">♥</span>
              <span>{info.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-sm">☆</span>
              <span>{info.rating}</span>
            </div>

          </div>
        </div>
      </article>
    </Link>
  );
};

export default LibraryCard;