import Image from "next/image";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#0B0D10] border-b border-[#1C1F24]">
      <div className="container mx-auto px-6">
        <div className="h-[72px] flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              width={30}
              height={30}
              alt="Fitlog Logo"
            />

            <span className="text-white text-[20px] font-black tracking-wide">
              FITLOG
            </span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#"
              className="text-white text-sm font-medium rounded-[15px] px-2 py-1 hover:text-[#B6FF00] transition bg-[#1A2312]"
            >
              Workouts
            </a>

            <a
              href="#"
              className="text-white text-sm font-medium rounded-[15px] px-2 py-1 hover:text-[#B6FF00] transition bg-[#1A2312]"
            >
              My Plan
            </a>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 rounded-md border border-[#2A2D32] text-white text-sm hover:border-[#B6FF00] hover:text-[#B6FF00] transition">
              Plan
            </button>

            <button className="px-5 py-2 rounded-md bg-[#B6FF00] text-black text-sm font-semibold hover:bg-[#C5FF33] transition">
              Saved
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;