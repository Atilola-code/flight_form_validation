"use client"
import React, { useState } from 'react'
import ProgressIndicator from './ProgressIndicator'
import { RiVipCrown2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";

type StepTwoProps = {
    onNext: () => void
    onBack: () => void
    currentStep: number
}

export default function StepTwo({ onNext, onBack, currentStep}: StepTwoProps) {
    const [selectedClass, setSelectedClass] = useState<string | null>(null)
    const handleSelect = (ticketType: string) => {
        setSelectedClass(ticketType)
    }

  return (
    <div className='text-white text-center space-y-8'>
      <h1 className='text-4xl text-white font-semibold'>Search Flights, Cheapest Flights</h1>
        <p className='text-white/60 font-light text-2xl mt-2'>All the plane tickets you are looking for together!</p>

        {/* Progress indicator */}
        <ProgressIndicator currentStep={currentStep}/>

        {/* Ticket type prompt */}

        <h2 className='text-2xl font-medium mt-8'>What type of ticket do you want?</h2>

        {/* Ticket type options */}

        <div className='grid grid-cols-1 md:grid-cols-2 gap-24 mt-6'>
            <div onClick={() => handleSelect("Business")} className={`flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer transition shadow-lg ${selectedClass === 'Business' ? "bg-[#13B7CC] text-white" : "text-white/30 bg-white/10"}`}>
                <RiVipCrown2Line className='text-5xl mb-3'/>
                <span className='text-2xl font-medium mb-2'>Business</span>
            </div>
            <div onClick={() => handleSelect("Economy")} className={`flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer transition shadow-lg ${selectedClass === 'Economy' ? "bg-[#13B7CC] text-white" : "text-white/30 bg-white/10"}`}>
                <FaRegUser className='text-5xl mb-3'/>
                <span className='text-2xl font-medium mb-2'>Economy</span>
            </div>
        </div>

        {/* Navigation buttons */}

        <div className='flex items-center justify-center gap-16'>
            <button onClick={onBack} type='button' className='flex items-center gap-4 bg-white text-black px-8 py-3 rounded-2xl hover:bg-[#13B7CC] hover:text-white transition cursor-pointer'>
                <IoIosArrowBack className='text-2xl '/> Before
            </button>
            <button onClick={onNext} type='button' disabled={!selectedClass} className={`flex items-center gap-4 px-8 py-3 rounded-2xl transition ${selectedClass ? 'bg-white text-[#13B7CC]' : 'bg-[#13B7CC] text-white cursor-pointer' }`}>Next
                <MdNavigateNext className='text-2xl' />
            </button>
        </div>
    </div>
  )
}
