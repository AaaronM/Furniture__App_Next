import React from "react";

import showroomnew2 from "../../../public/IMG/showroom/showroomnew2.png";
import showroomnew3 from "../../../public/IMG/showroom/showroomnew3.png";
import showroomnew4 from "../../../public/IMG/showroom/showroomnew4.png";
import showroomnewarrow from "../../../public/IMG/showroom/showroomnewarrow.png";
import Image from "next/image";

export default function Showroom1() {
  return (
    <div className="pt-[200px] p-5 flex ">
      <div className="w-1/4 border-r border-dark flex flex-col justify-center gap-[100px]">
        <Image src={showroomnew4}></Image>
        <Image src={showroomnew2}></Image>
        <Image src={showroomnew3}></Image>
      </div>
      <div className="flex justify-center items-center">
        <Image src={showroomnewarrow}></Image>
      </div>
    </div>
  );
}
