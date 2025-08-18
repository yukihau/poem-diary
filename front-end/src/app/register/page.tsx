"use client";

import Button from "@/components/button/Button";
import PasswordInput from "@/components/input/PasswordInput";
import TextInput from "@/components/input/TextInput";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();

  const [ fullName, setFullName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState("");

  const handleRegister = () => {
    setError("");
    if (fullName && email && username && password) return router.push("/login");
    setError("Por favor preencha todos os dados!")
  }

  const goToLoginPage = () => {
    router.push("/login");
  }

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-indigo-500">
      <div className="flex flex-col justify-center items-center p-10 pt-20 pb-20 m-10 w-[90vw] max-w-[24rem] h-[h-auto] bg-[white] drop-shadow-2xl">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-500 bg-clip-text text-transparent">
          Registrar
        </h1>
        <div className="mt-10">
          <TextInput
            id="fullName"
            value={ fullName }
            onChange={ setFullName }
            placeholder="Escreva seu nome completo"
          />
        </div>
        <div className="mt-2">
          <TextInput
            id="email"
            value={ email }
            onChange={ setEmail }
            placeholder="Escreva seu email"
          />
        </div>
        <div className="mt-2">
          <TextInput
            id="username"
            value={ username }
            onChange={ setUsername }
            placeholder="Escreva seu usuário"
          />
        </div>
        <div className="mt-2">
          <PasswordInput
            id="password"
            value={ password }
            onChange={ setPassword }
            placeholder="Escreva sua senha"
          />
        </div>
        <div className="mt-2">
          <p className="text-red-500 text-sm m-2">
            { error }
          </p>
        </div>
        <div className="mt-10">
          <Button
            text="Criar Conta"
            color="register"
            onClick={ handleRegister }
          />
        </div>
        <div className="mt-5">
          <a
            className="text-gray-700 underline hover:cursor-pointer hover:text-blue-800"
            onClick={ goToLoginPage }
          >
            Já tenho uma conta
          </a>
        </div>
      </div>
    </main>
  )
}