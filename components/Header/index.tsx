"use client";
import React from "react";
import ImageComponent from "../ImageComponent";
import ThemeSwitcher from "../ThemeSwitcher";

const Header: React.FC = () => {
  return (
    <div className="flex w-full justify-between items-center bg-white dark:bg-gray-900 px-8 h-[72px] border-b dark:border-gray-50 border-gray-300">
      <h1 className="hidden">Weather</h1>
      <ImageComponent
        src={"/images/weatherLogo.png"}
        alt="Weather logo"
        width={156}
        height={72}
        priority={true}
      />
      <ThemeSwitcher />
    </div>
  );
};
export default Header;
