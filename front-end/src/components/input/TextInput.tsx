import { Dispatch, SetStateAction } from "react";

interface InputProps {
  id: string;
  value: string;
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>
}

export default function TextInput({ id, value, placeholder, onChange }: InputProps) {
  return (
    <input
      type="text"
      id={ id }
      className="w-full h-10 p-0 border-2 border-white border-b-gray-300 text-gray-900 focus:h-12 focus:border-3 focus:border-b-violet-500 transition-all duration-300 outline-none"
      placeholder={ placeholder }
      value={ value }
      onChange={(event) => onChange(event.target.value)}
      required
    />
  )
}