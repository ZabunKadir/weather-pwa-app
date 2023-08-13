"use client";
import React from "react";
import ImageComponent from "../ImageComponent";

const Loading: React.FC = ({}) => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <ImageComponent
        src="/images/weatherLoading.gif"
        width={64}
        height={32}
        alt="Loading icon"
      />
    </div>
  );
};

export default Loading;
