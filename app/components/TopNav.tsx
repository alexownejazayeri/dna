import Image from "next/image";
import React from "react";

export const TopNav = () => {
    return (
      <div className="flex border-solid border-2 mb-8">
        <Image
          src="public/koalit.svg"
          alt="koalit logo"
          width={182}
          height={32}
        />
        <div></div>
        <div>Thing 3</div>
        <div>Thing 4</div>
        <div>Thing 5</div>
      </div>
    );
  };