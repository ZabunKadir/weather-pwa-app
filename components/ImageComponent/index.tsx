"use client";
import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

const ImageComponent: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  priority = false,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 500}
      height={height ?? 500}
      priority={priority}
    />
  );
};

export default ImageComponent;
