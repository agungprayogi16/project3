/** @format */

import Animation1 from "../../public/image/Animation6.json";
import Animation2 from "../../public/image/Animation3.json";
import Animation3 from "../../public/image/Animation4.json";
import Animation4 from "../../public/image/Animation5.json";

import Lottie from "lottie-react";

const DUMMY_CONTENT = [
  {
    id: 1,
    title: "Fortune’s favorite",
    Animation: Animation1,
    description:
      "Southeast Asia’s only company to make it to Fortune’s ‘Change the World’ list twice.",
  },
  {
    id: 1,
    title: "$7.1 b contribution",
    Animation: Animation2,
    description: "Value added to the Indonesian economy in 2019.",
  },
  {
    id: 1,
    title: "Digitising merchants",
    Animation: Animation3,
    description: "Saved 11.3 tonnes of plastic in cutlery since October 2020.",
  },
  {
    id: 1,
    title: "Fortune’s favorite",
    Animation: Animation4,
    description:
      "Resulted in 80% growth in number of GoFood merchants during pandemic.",
  },
];

function Icon() {
  return (
    <div className=' flex justify-center items-center relative '>
      <div className='flex absolute gap-10 bottom-2'>
        {DUMMY_CONTENT.map((item) => (
          <div className='flex flex-col justify-center items-center '>
            <Lottie
              className='lottie-bg-animation   h-60 w-[300px] '
              animationData={item.Animation}
              loop
              autoplay
            />
            <div className='flex flex-col font-bold justify-center items-center '>
              {item.title}
            </div>
            <div className='flex flex-col justify-center items-center '>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Icon;
