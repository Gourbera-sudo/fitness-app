import React from "react";
import Image from "next/image";
import footerLogo from "@/assets/footerLogo.png";
const Footer = () => {
  return (
    <section className="bg-[#090A0D] container mx-auto px-8">
      <div className="flex justify-between py-10">
        <div className="flex gap-2">
          <Image src={footerLogo} width={20} height={20} alt="Footer Logo" />
          <h3 className="font-bold text-[14px] text-white">FITLOG</h3>
        </div>
        <p className="font-regular text-[12px] text-[#6B7280]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </section>
  );
};

export default Footer;
