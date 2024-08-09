import React, { useState } from "react";
import { HashLoader } from "react-spinners";
import { api } from "../lib/axios";
import { useNavigate } from "react-router-dom";
import { XCircle } from "lucide-react";

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalConfirmRegister, setModalConfirmRegister] = useState(false);
  const navigate = useNavigate();
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    const response = await api.post("/register", {
      username,
      email,
      password,
    });
    setLoading(false);
    if (response.status === 201) {
      navigate("/");
    } else {
      openModal();
    }
    return response;
  };

  function openModal() {
    setModalConfirmRegister(true);
  }
  function closeModal() {
    setModalConfirmRegister(false);
  }

  return (
    <main className="h-screen bg-pattern bg-no-repeat bg-center bg-zinc-950 flex items-center justify-center flex-col p-4 space-y-5">
      {modalConfirmRegister && (
        <div className="fixed p-4 flex items-center backdrop-blur-lg justify-center inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-zinc-950 p-4 rounded-md shadow-shape flex flex-col items-center space-y-4">
            <h1 className="text-zinc-50 font-semibold text-xl">
              Algo deu errado! Tente novamente.
            </h1>
            <XCircle className="text-red-600" size={50} />
            <button
              onClick={closeModal}
              className="shadow-shape bg-blue-600 hover:bg-blue-700 text-zinc-50 rounded-md px-4 py-1 font-bold transition-all"
            >
              tentar novamente
            </button>
          </div>
        </div>
      )}

      {loading && (
        <div className="fixed flex items-center justify-center inset-0 bg-black bg-opacity-50 z-50">
          <HashLoader color="#2563eb" />
        </div>
      )}
      <a href="/">
        <img
          src="logo.png"
          alt="a white email icon logo"
          width={150}
          height={150}
        />
      </a>
      <h1 className="text-zinc-50 font-semibold text-xl">Cadastre-se</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center flex-col space-y-4 max-w-[320px] w-full"
      >
        <div className="w-full">
          <input
            required
            className="rounded-md font-bold bg-zinc-900 shadow-shape placeholder:text-zinc-500 text-zinc-50 w-full p-2 focus:outline-none"
            placeholder="Nome de usuário"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="w-full">
          <input
            required
            className="rounded-md font-bold bg-zinc-900 shadow-shape placeholder:text-zinc-500 text-zinc-50 w-full p-2 focus:outline-none"
            placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="w-full">
          <input
            required
            className="rounded-md font-bold bg-zinc-900 shadow-shape placeholder:text-zinc-500 placeholder:text-xl text-xl text-zinc-50 w-full p-2 focus:outline-none"
            type="password"
            placeholder="*********"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className="shadow-shape bg-blue-600 hover:bg-blue-700 text-zinc-50 rounded-md px-4 py-1 font-bold transition-all"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </main>
  );
};

export default RegisterForm;
