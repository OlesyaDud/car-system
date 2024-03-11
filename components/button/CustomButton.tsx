'use client'

import React, { MouseEventHandler } from 'react'
import Image from 'next/image'

export interface ICustomButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>
};

const CustomButton = ({title, btnType, textStyles, containerStyles, isDisabled, rightIcon, handleClick}: ICustomButtonProps) => {

   
  return (
   <button 
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
   >
    <span className={`flex-1 ${textStyles}`}>
        {title}
    </span>

    {rightIcon && (
      <div className='relative w-6 h-6'>
        <Image 
          src={rightIcon}
          alt='right icon'
          fill className='object-contain'
        />
      </div>
    )}
   </button>
  )
}

export default CustomButton
