'use client'
import React, { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import { FormProvider, useForm } from 'react-hook-form'
import StepThree from './StepThree'
import StepFour from './StepFour'
import StepFive from './StepFive'

type FormValues = {
  from: string
  to: string
  departDate: string
  returnDate: string
}

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(1)
    const methods = useForm<FormValues>()

    const nextStep = () => setCurrentStep((prev) => prev + 1)
    const prevStep = () => setCurrentStep((prev) => prev - 1)

  return (
    <FormProvider {...methods}>

    <div>

        {currentStep === 1 && <StepOne onNext={nextStep} currentStep={currentStep}/>}
        {currentStep === 2 && <StepTwo onNext={nextStep} onBack={prevStep} currentStep={currentStep}/>}             
        {currentStep === 3 && <StepThree onNext={nextStep} onBack={prevStep} currentStep={currentStep}/>}             
        {currentStep === 4 && <StepFour onNext={nextStep} onBack={prevStep} currentStep={currentStep}/>}             
        {currentStep === 5 && <StepFive onBack={prevStep} currentStep={currentStep}/>}
    </div>
    </FormProvider>
  )
}
