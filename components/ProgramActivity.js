import React from "react";
import Image from "next/image";
import SustainableIcon from "../public/sustainable.png";
import EduIcon from "../public/act_edu.png";
import NutritionIcon from "../public/act_nutrition.png";
import WashIcon from "../public/act_wash2.png";
import SectionTitle from "./SectionTitle";

export default function ProgramActivity() {
  const data = [
    {
      icon: WashIcon,
      title: "WASH & Health",
      desc: "We provide access to clean water coupled with sanitation and hygiene education for healthier communities",
    },
    {
      icon: EduIcon,
      title: "Education",
      desc: "Primary cycle education(1-4) program is the main focuses of intervention Quality education as a pilot program for childeren",
    },
    {
      icon: NutritionIcon,
      title: "Nutration",
      desc: "We aim to end hunger, train farmers in sustainable agricultural methods and deliver initiatives to improve family nutrition",
    },
    {
      icon: SustainableIcon,
      title: "Livelihood",
      desc: "We help individuals build small businesses to increase their resilience and grow the local economy",
    },
  ];
  return (
    <div
      id='programs'
      className='flex justify-center mb-12 items-center flex-col select-none'>
      <SectionTitle title={"Our Program Activities "} containerClass='mt-8' />
      <p className='max-w-screen-lg tracking-wider text-center text-xl font-semibold text-gray-600 m-4 '>
        ROPE-መልህቅ has four pillars of program structures for the betterment of
        Children and their Communities to achieve the national policies and
        Regional programs and sustainable Development programs
      </p>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 container justify-center flex-wrap'>
        {data.map((item) => (
          <ProgramActivityItem {...item} />
        ))}
      </div>
    </div>
  );
}

function ProgramActivityItem({ icon, title, desc, color = "bg-sky-600" }) {
  return (
    <div className='flex flex-col items-center m-6 cursor-pointer hover:-translate-y-1 hover:scale-105 transition delay-100 duration-300 ease-in-out'>
      <div
        className={`${color} rounded-full h-fit w-fit flex justify-center p-6`}>
        <Image src={icon} width={54} height={54} />
      </div>
      <p className='pt-6 font-bold  text-gray-700 text-lg'>{title}</p>
      <p className='py-2 font-semibold  text-gray-600 text-center text-md'>
        {desc}
      </p>
    </div>
  );
}
