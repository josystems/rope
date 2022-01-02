import React from "react";
import Carousel from "../components/Carousels";
import CompanyVision from "../components/CompanyVision";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import WhoWeAre from "../components/WhoWeAre";
import Collapse, { Panel } from "rc-collapse";
import "rc-collapse/assets/index.css";
import Image from "next/image";
import SustainableIcon from "../public/sustainable.png";
import EduIcon from "../public/act_edu.png";
import NutritionIcon from "../public/act_nutrition.png";
import WashIcon from "../public/act_wash2.png";

export default function about() {
  return (
    <div>
      <Navbar />
      <div>
        <div
          style={{ backgroundImage: "url(/static/image/k-pattern.webp)" }}
          className='bg-cover'>
          <Carousel />
        </div>
        <div
          id='content'
          className='flex flex-col py-16 bg-gradient-to-b from-sky-50/20 to-gray-50 justify-center items-center'>
          {/* <p className='w-full max-w-screen-md mx-8 my-4 h-0.5 bg-red-500/50' /> */}
          {/* <SectionTitle title='Background' /> */}
          <div className=' flex max-w-screen-lg items-center flex-col justify-center w-full'>
            <h1 className='mb-8 mx-6  text-gray-600 text-lg max-w-screen-lg'>
              <b>ROPE </b>(Resilence Opportunity for Everyone) is a A
              <b> child centered</b> indigenous, non-governmental, non-partisan,
              not for profit, professional assembly dedicated to
              <b> protect vulnerable</b> and
              <b> marginalized communities</b> and
              <b> achieve their full potential for rehabilitation</b> through
              local capacity building and innovation transformation
              <p className='mt-4 indent-4'>
                Currently ROPE is in an incentive stage to{" "}
                <Bold>Start school capacity building</Bold> and{" "}
                <Bold>School Construction</Bold> for providing{" "}
                <Bold> Quality education as a pilot program</Bold> in{" "}
                <b className='font-semibold'>
                  South wollo, Northwollo and Waghimra zones{" "}
                </b>
                of Amhara Region.
                <br className='h-20' />
                <p className='indent-4 pt-2'>
                  On January 2022,{" "}
                  <span className='font-semibold'>
                    ROPE will start{" "}
                    <Bold>Integrated Child Care and Support(ICCS-I)</Bold>{" "}
                    Project
                  </span>{" "}
                  with a budget allocated 6.5 million birr to fulfill the{" "}
                  <Bold>health</Bold>, <Bold>Nutrition</Bold>,{" "}
                  <Bold>Education</Bold>{" "}
                  <span className='font-semibold'>
                    needs of Childrens and their care givers in Kalu and Dessie
                    towns of south wollo zones.
                  </span>
                </p>
              </p>
            </h1>
            <Collapse className='w-11/12 mb-12 text-gray-800 font-semibold'>
              <Panel header='TECHNICAL CHAPTERS' headerClass='font-semibold '>
                <ui className='list-none'>
                  <li>
                    <Line />
                    Health
                  </li>
                  <li>
                    <Line />
                    Nutrition Water
                  </li>
                  <li>
                    <Line />
                    Sanitation and Hygiene Promotion
                  </li>
                  <li>
                    <Line />
                    Food Security and Livelihood
                  </li>
                  <li>
                    <Line />
                    Shelter and Settlement
                  </li>
                </ui>
              </Panel>
              <Panel
                headerClass='font-semibold '
                header='GUIDING TOOLS AND PROCEDURES National Policies and programs'>
                <ui className='list-none'>
                  <li>
                    <Line />
                    SPHERE hand book
                  </li>
                  <li>
                    <Line />
                    DRM cycle
                  </li>
                  <li>
                    <Line />
                    Standard project management Cycle protocols
                  </li>
                  <li>
                    <Line />
                    Internal regulations
                  </li>
                  <li>
                    <Line />
                    Ethical and legal foundations based on the countries
                    procedure
                  </li>
                </ui>
              </Panel>
              <Panel
                headerClass='font-semibold'
                header='STRATEGY DEVELOPMENT AND PROGRAM DESIGN'>
                <p>
                  Based on the international Core Humanitarian Standard(CHS) and
                  the Minimum Standards support the planning of responses to
                  provide the right humanitarian assistance at the right time to
                  those most in need.
                </p>
                <p className='py-4'>
                  Be the Part of and share on the Government policies and GDPs
                  for the successful implementation and Results The full
                  participation of the affected population and coordination with
                  national and local authorities is essential to achieve this
                  across all sectors.
                </p>
                <p>Based on the Pillars of humanitarian foundations such as </p>
                <ui className='list-none my-4'>
                  <li>
                    <Line />
                    Humanitarian Charter
                  </li>
                  <li>
                    <Line />
                    Protection Principles
                  </li>
                  <li>
                    <Line />
                    Core Humanitarian Standard
                  </li>
                </ui>
              </Panel>
            </Collapse>
          </div>

          <CompanyVision />
        </div>
      </div>
      <Footer />
    </div>
  );
}
function Line() {
  return <span className='text-xl text-cyan-600 font-bold'> - </span>;
}
function Bold(props) {
  return (
    <span className='underline underline-offset-2 font-semibold decoration-1 decoration-cyan-600/50'>
      {props.children}
    </span>
  );
}
