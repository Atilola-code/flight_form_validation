"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { RiFlightTakeoffLine } from "react-icons/ri";
import { RiFlightLandLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { RiCalendar2Line } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
import ProgressIndicator from "./ProgressIndicator";
import { FaRegClock } from "react-icons/fa6";

type stepOneProps = {
  onNext: () => void;
  currentStep: number;
};

export default function StepOne({ onNext, currentStep }: stepOneProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full px-4 text-center py-8">
      <h1 className="text-5xl text-white font-semibold">
        Search Flights, Cheapest Flights
      </h1>
      <p className="text-white/60 font-light text-3xl mt-2 mb-16">
        All the plane tickets you are looking for together!
      </p>

      {/* Progress indicator */}
      <ProgressIndicator currentStep={currentStep} />

      <form>
        <div>
          <div className="md:grid-cols-2 grid gap-x-6">
            <div className="relative">
              <label className="flex text-lg text-white/80 gap-2">
                <RiFlightTakeoffLine className="text-xl" />
                From
              </label>
              <input
                {...register("from", {
                  required: "Departure location is required",
                })}
                type="text"
                placeholder="Country, city or airport"
                className="w-full p-3 rounded-2xl focus:outline-none text-[#888] bg-white"
              />
              <RiSearchLine className="absolute right-4 top-3/5 -translate-y-1/4 text-[#888] mr-4 text-lg" />

              {errors.from && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.from.message as string}
                </p>
              )}
            </div>

            <div className="relative">
              <label className="flex gap-2  text-lg text-white/80 ">
                <RiFlightLandLine className="text-xl" />
                To
              </label>
              <input
                {...register("to", { required: "Destination is required" })}
                type="text"
                placeholder="Country, city or airport"
                className="w-full p-3 rounded-2xl focus:outline-none bg-white text-[#888]"
              />
              <RiSearchLine className="absolute right-4 top-3/5 -translate-y-1/4 text-[#888] text-lg mr-4" />
              {errors.to && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.to.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6">
            <div className="relative">
              <label className="flex text-lg gap-2 text-white/80">
                <RiCalendar2Line className="text-xl text-white/80" />
                Depart date
              </label>
              <input
                type="datetime"
                {...register("departDate")}
                placeholder="Select date"
                className="bg-white text-[#888] w-full p-3 rounded-2xl focus:outline-none "
              />
              <FaRegClock className="absolute right-3 top-3/5 -translate-y-1/4 text-[#888] text-lg" />
            </div>
            <div className="relative">
              <label className="flex text-lg gap-2 text-white/80">
                <RiCalendar2Line className="text-xl text-white/80" />Return date
              </label>
              <input
                type="datetime"
                {...register("returnDate")}
                placeholder="Select date"
                className="bg-white text-[#888] w-full p-3 rounded-2xl focus:outline-none"
              />
              <FaRegClock className="absolute right-3 top-3/5 -translate-y-1/4 text-[#888] text-lg" />
            </div>
          </div>
        </div>
      </form>

      <div className="mt-12 flex items-center justify-center">
        <button
          onClick={onNext}
          type="button"
          className="flex items-center justify-center gap-4 bg-[#13B7CC] text-white px-8 py-3 rounded-2xl hover:text-[#13B7CC] hover:bg-white transition cursor-pointer"
        >
          Next
          <MdNavigateNext className="text-2xl text-white hover:text-[#13B7CC] cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
