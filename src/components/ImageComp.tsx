import React from "react";

interface Props {
  src: string;
  alt?: string;
  imageClassName?: string;
  containerClassName?: string;
}

function ImageComp({ src, containerClassName, alt, imageClassName }: Props) {
  return (
    <div className={`relative ${containerClassName ?? "pb-[100%]"}`}>
      <div className="absolute top-0 h-full w-full">
        <img
          src={src}
          alt={alt}
          className={`w-full h-full ${imageClassName ?? "object-cover"}`}
        />
      </div>
    </div>
  );
}

export default ImageComp;
