"use client"

import { Dispatch, SetStateAction, useState } from "react";

interface InputProps {
  id: string;
  value: string;
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>
}

export default function PasswordInput({ id, value, placeholder, onChange }: InputProps) {
  const [ showPassword, setShowPassword ] = useState(false);

  return (
    <div className="relative">
      <input
        type={ showPassword ? "text" : "password" }
        id={ id }
        className="flex w-[16rem] h-10 p-0 border-2 border-white border-b-gray-300 text-gray-900 focus:h-12 focus:border-3 focus:border-b-violet-500 transition-all duration-300 outline-none"
        placeholder={ placeholder }
        value={ value }
        onChange={(event) => onChange(event.target.value)}
        required
      / >
      <button
        type="button"
        onClick={ () => setShowPassword(!showPassword) }
        className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-hidden focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
      >
        <svg className="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
          <path className="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
          <path className="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
          <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
          <path className="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
          <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
        </svg>
      </button>
    </div>
  )
}