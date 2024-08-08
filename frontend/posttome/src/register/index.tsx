import React, { useState } from "react";

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main className="h-screen bg-pattern bg-no-repeat bg-center bg-zinc-950 flex items-center justify-center flex-col p-4 space-y-5">
      <img
        src="logo.png"
        alt="a white email icon logo"
        width={150}
        height={150}
      />
      <h1 className="text-zinc-50 font-semibold text-xl">Cadastre-se</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center flex-col space-y-4 max-w-[320px] w-full"
      >
        <div className="w-full">
          <input
            required
            className="rounded-md font-bold bg-zinc-900 shadow-shape placeholder:text-zinc-500 text-zinc-950 w-full p-2 focus:outline-none"
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
            className="rounded-md font-bold bg-zinc-900 shadow-shape placeholder:text-zinc-500 text-zinc-950 w-full p-2 focus:outline-none"
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
            className="rounded-md font-bold bg-zinc-900 shadow-shape placeholder:text-zinc-500 text-zinc-950 w-full p-2 focus:outline-none"
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
