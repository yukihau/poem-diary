interface ButtonProps {
  text: string;
  color: "login" | "register";
  onClick: () => void;
}

export default function Button({ text, color, onClick }: ButtonProps) {
  const defaultClasses = "text-white hover:cursor-pointer transition-colors duration-300 focus:outline-none font-medium rounded-full text-sm w-[12rem] py-2.5 text-center"

  const colors = {
    login: "bg-gradient-to-r from-violet-400 to-violet-500 hover:from-violet-700 hover:to-violet-800 hover:cursor-pointer focus:ring-4 focus:ring-violet-300",
    register: "bg-gradient-to-r from-indigo-400 to-indigo-500 hover:from-indigo-700 hover:to-indigo-800 hover:cursor-pointer focus:ring-4 focus:ring-indigo-300"
  }

  return (
    <button
      type="button"
      className={ defaultClasses + " " + colors[color]}
      onClick={ onClick }
    >
      { text }
    </button>
  )
}