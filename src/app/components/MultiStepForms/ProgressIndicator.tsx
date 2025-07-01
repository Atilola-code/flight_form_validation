'use client'
import React from 'react';
import { GrMapLocation } from "react-icons/gr";
import { BiDirections } from "react-icons/bi";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { VscNote } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";

type ProgressIndicatorProps = {
  currentStep: number;
};

export default function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  const steps = [
    { icon: <GrMapLocation /> },
    { icon: <BiDirections /> },
    { icon: <HiOutlineAdjustmentsVertical /> },
    { icon: <VscNote /> },
    { icon: <FaRegHeart /> },
  ];

  return (
    <div className="w-full mb-8 px-4">
      <div className="flex items-center w-full">

        {/* Starting line */}
        <div 
          className={`h-1 ${currentStep > 1 ? 'bg-[#13B7CC]' : 'bg-gray-600'}`}
          style={{ width: '50%', marginRight: '-2rem' }}
        />

        {/* Icons & Connecting Lines */}
        <div className="flex items-center justify-center flex-shrink-0">
          {steps.map((step, index) => {
            const isActive = currentStep === index + 1;
            const isCompleted = currentStep > index + 1;
            const isUpcoming = currentStep < index + 1;

            return (
              <React.Fragment key={index}>
                <div
                  className={`flex items-center justify-center w-16 h-16 md:w-24 md:h-24 text-2xl md:text-3xl rounded-full border-4 z-10 mx-1
                    ${isActive 
                      ? 'bg-[#13B7CC] text-white border-[#13B7CC]'
                      : isCompleted 
                        ? 'text-[#13B7CC] border-[#13B7CC]'
                        : 'bg-gray-800 text-gray-400 border-gray-600'}`}
                >
                  {step.icon}
                </div>

                {/* Connecting line */}
                {index !== steps.length - 1 && (
                  <div
                    className={`h-1 w-12 ${currentStep > index + 1 ? 'bg-[#13B7CC]' : 'bg-gray-600'}`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Ending line */}
        <div 
          className={`h-1 ${currentStep >= steps.length ? 'bg-[#13B7CC]' : 'bg-gray-600'}`}
          style={{ width: '50%', marginLeft: '-2rem' }}
        />
      </div>
    </div>
  )
}