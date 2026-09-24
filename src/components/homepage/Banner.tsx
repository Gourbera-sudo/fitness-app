import Image from "next/image";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-[#0B0D10] py-6 sm:py-8 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg bg-[#15171B] min-h-[500px] sm:min-h-[420px] lg:min-h-[360px]">
          <div
            className="
              relative z-10
              w-full sm:w-[70%] lg:w-[58%]
              px-6 py-8
              sm:px-8 sm:py-10
              lg:px-10 lg:py-12
            "
          >
            <h3
              className="
                text-[#B6FF00]
                text-xs sm:text-sm
                font-bold
                tracking-[2px]
                mb-3
              "
            >
              WORKOUT LIBRARY
            </h3>
            <h1
              className="
                font-extrabold
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-5xl
                xl:text-6xl
                leading-tight
                text-white
              "
            >
              TRAIN WITH INTENT.
              <br />
              LOG EVERY SET.
            </h1>
            <p
              className="
                mt-4
                max-w-[480px]
                text-[#9CA3AF]
                font-regular
                text-[16px] sm:text-sm
                leading-6
              "
            >
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>
            <button
              className="
                mt-5
                bg-[#B6FF00]
                hover:bg-[#C7FF33]
                text-black
                px-5 sm:px-6
                py-2.5
                rounded-md
                text-[12px] sm:text-sm
                font-bold
                tracking-wide
                transition
              "
            >
              BROWSE WORKOUTS
            </button>
          </div>
          <div
            className="
              absolute
              right-0
              bottom-0
              w-[55%]
              sm:w-[40%]
              md:w-[35%]
              lg:w-[32%]
              h-[45%]
              sm:h-full
            "
          >
            <Image
              src={bannerImg}
              alt="Workout"
              fill
              priority
              className="
                object-contain
                object-right-bottom
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
