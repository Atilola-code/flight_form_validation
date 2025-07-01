import React from 'react'
import ProgressIndicator from './ProgressIndicator'


type StepFourProps = {
    onNext: () => void
    onBack: () => void
    currentStep: number
}


export default function StepFour({ onNext, onBack, currentStep }: StepFourProps) {
  return (
    <div className='w-full px-4 text-center'>
    <h1 className='text-5xl text-white font-semibold'>Search Flights, Cheapest Flights</h1>
     <p className='text-white/60 font-light text-3xl mt-2 mb-16'>All the plane tickets you are looking for together!</p>

      <ProgressIndicator currentStep={currentStep}/>

    <h2 className='text-2xl text-center text-white'>Miles Responsibility</h2>
    <p className='text-lg text-white text-left'>May the miles be with you</p>

    <div>
        <p>Throughout the history, globalization and technological developments have always had a great effect on transportation. Today, everybody transports above the clouds and under the seas in more different ways and durations compared to past. While airplane was an extreme transportation vehicle for most of us only a quarter century ago, many people use it in their daily routines in today. Airlines organize so many campaigns like elastic schedules, promotion gifts and discounts to maintain this increase in number of people who fly regularly and often. Bonus miles is only one of them. Airlines offer bonus miles to the passenger in accordance with the length and frequency of their flights. However most of these miles go waste without growing enough to get a small gift like teddy bear let alone a free bonus ticket.</p>
    </div>


 {/* Navigation buttons */}
      <div className='mt-10 flex flex-col md:flex-row gap-4 justify-center'>
        <button
          onClick={onBack}
          type='button'
          className='w-full md:w-auto px-8 py-3 bg-white text-[#13B7CC] border border-[#13B7CC] rounded-2xl hover:bg-[#13B7CC] hover:text-white transition'
        >
          Back
        </button>

        <button
          onClick={onNext}
          type='button'
          className='w-full md:w-auto px-8 py-3 bg-[#13B7CC] text-white rounded-2xl hover:bg-white hover:text-[#13B7CC] border border-[#13B7CC] transition'
        >
          Next
        </button>
      </div>
    </div>
  )
}
