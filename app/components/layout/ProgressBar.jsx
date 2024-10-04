"use client";

import React from 'react'
import { useSelector } from 'react-redux';
import OkeyIcon from "@/assets/icons/ok.svg"
import Image from 'next/image';

const ProgressBar = () => {
  const stepState = useSelector((state) => state.common.step)

  return (
    <>
      <div className="w-full flex-col flex justify-center items-center">

        <div className="flex items-center roboto-bold ">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex items-center">
              {/* Step Circle */}
              <div
                className={`w-12 h-12 flex items-center mx-[-2px] p-1 z-20 shadow-md justify-center rounded-full border-2 
                  ${stepState > index + 1
                    ? 'bg-carbonetzGreen border-white text-white'
                    : 'bg-carbonetzBgGray border-white text-carbonetzGrayText'
                  }
                  ${stepState == index + 1 && 'bg-carbonetzBlue border-white text-white'}`
                }
              >
                {
                  stepState > index + 1 &&
                  <div className='w-full h-full rounded-full bg-carbonetzGreen flex justify-center items-center'>
                    <Image src={OkeyIcon} alt="Done" width={20} height={20} />
                  </div>
                }
                {
                  stepState == index + 1 &&
                  <div className="w-full h-full rounded-full bg-carbonetzBlue flex justify-center items-center">
                    <Image src={OkeyIcon} alt="Done" width={20} height={20} />
                  </div>
                }
                {
                  stepState < index +1 &&
                  <div className="w-full h-full rounded-full flex text-white justify-center items-center">
                    X
                  </div>
                }

              </div>

              {/* Line between steps */}
              {index < 8 - 1 && (
                <div
                  className={`flex-grow w-14 shadow-md h-4 
                    ${stepState > index
                      ? 'bg-carbonetzGreen'
                      : 'bg-carbonetzBgGray'
                    } ${stepState == index + 1
                    && 'bg-carbonetzBlue'
                    }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 text-center roboto-bold text-carbonetzGrayText">
          <p>Adım {stepState}/8</p>
        </div>
      </div>



    </>
  )
}

export default ProgressBar;