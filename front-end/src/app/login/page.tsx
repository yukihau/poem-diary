"use client"

import Button from "@/components/button/Button";
import PasswordInput from "@/components/input/PasswordInput";
import TextInput from "@/components/input/TextInput";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Login() {
  const router = useRouter();

  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState("");

  const handleLogin = async () => {
    setError("");

    if (!username || !password) {
      return setError("User or password has not been filled.");
    }

    localStorage.setItem("token", username);
    router.push("/home");
  }

  const goToRegisterPage = async () => {
    router.push("/register");
  }

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-violet-500">
      <div className="flex flex-col justify-center items-center p-10 pt-20 pb-20 m-10 w-[90vw] max-w-[24rem] h-[h-auto] bg-[white] drop-shadow-2xl">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-violet-500 bg-clip-text text-transparent">
          📕 PoemDiary
        </h1>
        <div className="mt-10">
          <TextInput
            id="username"
            value={ username }
            onChange={ setUsername }
            placeholder="Username"
          />
        </div>
        <div className="mt-2">
          <PasswordInput
            id="password"
            value={ password }
            onChange={ setPassword }
            placeholder="Password"
          />
        </div>
        <div className="mt-2">
          <p className="text-red-500 text-sm m-2">
            { error }
          </p>
        </div>
        <div className="mt-10">
          <Button
            text="Login"
            color="login"
            onClick={ handleLogin }
          />
        </div>
        <div className="w-full mt-5 flex justify-around">
          <div>
            <a
              className="text-gray-700 underline hover:cursor-pointer hover:text-blue-800"
              onClick={ goToRegisterPage }
            >
              Sign In
            </a>
          </div>
          <div>
            <a className="text-gray-700 underline hover:cursor-pointer hover:text-blue-800">
              Forgot Password
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
