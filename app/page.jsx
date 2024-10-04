"use client";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep, prevStep } from './store/features/commonSlice';
import { redirect } from "next/navigation";


const StepOne = () => {
  const dispatch = useDispatch();
  const stepState = useSelector((state) => state.common.step)

  useEffect(() => {
    redirect("/welcome")
  }, [])

  return (
    <>
      <div>Content</div>
      <div>Aktif olarak <b>{stepState}</b> Steptesiniz.</div>
      <div className='w-10 flex justify-between flex-row gap-10'>
        <div className='flex p-3 bg-red-500' onClick={() => dispatch(prevStep())}>Prev</div>
        <div className='flex p-3' onClick={() => dispatch(nextStep())}>Next</div>
      </div>
    </>

  )
}

export default StepOne