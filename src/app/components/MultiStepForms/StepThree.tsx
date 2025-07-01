import React from 'react'
import ProgressIndicator from './ProgressIndicator'


type StepThreeProps = {
    onNext: () => void
    onBack: () => void
    currentStep: number
}
export default function StepThree({ onNext, onBack, currentStep }: StepThreeProps) {
  return (
    <div className='w-full px-4 text-center'>
      <h1 className='text-5xl text-white font-semibold'>Search Flights, Cheapest Flights</h1>
              <p className='text-white/60 font-light text-3xl mt-2 mb-16'>All the plane tickets you are looking for together!</p>
      
              {/* Progress indicator */}
              <ProgressIndicator currentStep={currentStep}/>

              {/* Ticket Information Table */}
      <div className="mt-10 rounded-2xl shadow py-4 md:py-8 md:px-6 overflow-x-auto">
        <h2 className='text-xl md:text-2xl font-semibold bg-gray-600 text-gray-500 mb-6 text-center border-2 rounded-t-2xl border-collapse'>
          Ticket Information
        </h2>
        
        <table className='w-full text-left border-collapse min-w-[700px]'>
          <thead>
            <tr className='border-b-2 border-white/40'>
              {['From', 'To', 'Type', 'Date', 'Price', 'Miles', 'Gift Miles'].map((title) => (
                <th key={title} className='p-3 font-semibold text-white/80 text-sm md:text-base'>
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className=' text-white/80 text-sm md:text-base'>
              <td className='p-3'>Moskova</td>
              <td className='p-3'>Madrid</td>
              <td className='p-3'>Business</td>
              <td className='p-3'>27/08/2021</td>
              <td className='p-3'>21,143</td>
              <td className='p-3'>2,129</td>
              <td className='p-3'>32.7</td>
            </tr>
          </tbody>
        </table>
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
