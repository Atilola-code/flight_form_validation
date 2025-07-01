import React from 'react'
import ProgressIndicator from './ProgressIndicator'
import Image from 'next/image'
import { MdNavigateNext } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'


type StepFourProps = {
    onNext: () => void
    onBack: () => void
    currentStep: number
}


export default function StepFour({ onNext, onBack, currentStep }: StepFourProps) {
  return (
    <div className='w-full px-4 text-center min-h-screen py-8'>
    <h1 className='text-5xl text-white font-semibold'>Search Flights, Cheapest Flights</h1>
     <p className='text-white/60 font-light text-3xl mt-2 mb-16'>All the plane tickets you are looking for together!</p>

      <ProgressIndicator currentStep={currentStep}/>

    <h2 className='text-2xl text-center text-white mb-6'>Miles Responsibility</h2>

    <div className='grid grid-cols-2 space-x-12'>
    <div className='flex flex-col'>
    <p className='text-lg text-white text-left mb-2'>May the miles be with you</p>
    <Image src={"/miles-image.avif"} alt='A flight which has just taken off' width={400} height={300} />
        </div>
        <p className='max-w-sm text-base leading-relaxed text-white'>Throughout the history, globalization and technological developments have always had a great effect on transportation. Today, everybody transports above the clouds and under the seas in more different ways and durations compared to past. While airplane was an extreme transportation vehicle for most of us only a quarter century ago, many people use it in their daily routines in today. Airlines organize so many campaigns like elastic schedules, promotion gifts and discounts to maintain this increase in number of people who fly regularly and often. Bonus miles is only one of them. Airlines offer bonus miles to the passenger in accordance with the length and frequency of their flights. However most of these miles go waste without growing enough to get a small gift like teddy bear let alone a free bonus ticket.</p>
    </div>


 {/* Navigation buttons */}
      <div className='mt-10 flex flex-col md:flex-row gap-4 justify-center'>
        <button
          onClick={onBack}
          type='button'
          className='w-full md:w-auto flex items-center px-8 py-3 gap-4 bg-white text-[#13B7CC] border border-[#13B7CC] rounded-2xl hover:bg-[#13B7CC] hover:text-white transition cursor-pointer'
        >
            <IoIosArrowBack className='text-lg '/> Back
        </button>

        <button
          onClick={onNext}
          type='button'
          className='w-full md:w-auto flex items-center px-8 py-3 gap-4 bg-[#13B7CC] text-white rounded-2xl hover:bg-white hover:text-[#13B7CC] border border-[#13B7CC] transition cursor-pointer'
        > Next
        <MdNavigateNext className='text-lg' />
        </button>
      </div>
    </div>
  )
}
