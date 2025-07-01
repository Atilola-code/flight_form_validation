"use client"
import React, { useState } from 'react'
import ProgressIndicator from './ProgressIndicator'
import { BiHomeHeart } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { LuHandshake } from "react-icons/lu";
import { PiWheelchairBold } from "react-icons/pi";



type StepFiveProps = {
   
    onBack: () => void
    currentStep: number
}

export default function StepFive({  onBack, currentStep}: StepFiveProps) {
    const [selectedClass, setSelectedClass] = useState<string | null>(null)
    const handleSelect = (ticketType: string) => {
        setSelectedClass(ticketType)
    }

  return (
    <div className='text-white mt-8 text-center space-y-8'>
      <h1 className='text-4xl text-white font-semibold'>Search Flights, Cheapest Flights</h1>
        <p className='text-white/60 font-light text-2xl mt-2'>All the plane tickets you are looking for together!</p>

        {/* Progress indicator */}
        <ProgressIndicator currentStep={currentStep}/>



        <h2 className='text-2xl font-medium mt-8'>Who do you want to help?</h2>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
            <div onClick={() => handleSelect("Foundation")} className={`flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer transition shadow-lg ${selectedClass === 'Foundation' ? "bg-[#13B7CC] text-white" : "text-white/30 bg-white/10"}`}>
                <BiHomeHeart className='text-5xl mb-3'/>
                <span className='text-2xl font-medium mb-2'>Foundation</span>
            </div>
            <div onClick={() => handleSelect("Orphanage")} className={`flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer transition shadow-lg ${selectedClass === 'Orphanage' ? "bg-[#13B7CC] text-white" : "text-white/30 bg-white/10"}`}>
                <BsGlobe2 className='text-5xl mb-3'/>
                <span className='text-2xl font-medium mb-2'>Foundation</span>
            </div>
            <div onClick={() => handleSelect("Motherless")} className={`flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer transition shadow-lg ${selectedClass === 'Motherless' ? "bg-[#13B7CC] text-white" : "text-white/30 bg-white/10"}`}>
                <LuHandshake className='text-5xl mb-3'/>
                <span className='text-2xl font-medium mb-2'>Foundation</span>
            </div>
            <div onClick={() => handleSelect("Less-privilege")} className={`flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer transition shadow-lg ${selectedClass === 'Less-privilege' ? "bg-[#13B7CC] text-white" : "text-white/30 bg-white/10"}`}>
                <PiWheelchairBold className='text-5xl mb-3'/>
                <span className='text-2xl font-medium mb-2'>Foundation</span>
            </div>
        </div>

        {/* Navigation buttons */}

        <div className='flex items-center justify-center gap-16'>
            <button onClick={onBack} type='button' className='flex items-center gap-2 bg-white text-black px-6 py-3 rounded-2xl hover:bg-[#13B7CC] hover:text-white transition'>
                <IoIosArrowBack className='text-lg '/> Before
            </button>
            
        </div>
    </div>
  )
}