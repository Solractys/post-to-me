import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle login logic
  };

  return (
    <main className="bg-zinc-950 bg-pattern bg-no-repeat bg-center flex justify-center flex-col items-center h-screen p-4">
      <img
        src="logo.png"
        alt="A withe email icon logo"
        width={100}
        height={100}
      />
      <h1 className="text-zinc-50 font-semibold text-2xl">Post to me</h1>
      <div className="flex items-center justify-center flex-col max-w-[320px] w-full  p-4 space-y-5 text-zinc-50">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center gap-3 flex-col w-full"
        >
          <input
            className="rounded-md font-bold bg-zinc-900 shadow-shape placeholder:text-zinc-500 text-zinc-950 w-full p-2 focus:outline-none"
            placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="rounded-md font-bold bg-zinc-900 shadow-shape placeholder:text-zinc-500 text-zinc-950 w-full p-2 focus:outline-none"
            placeholder="********"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            className="bg-blue-600 shadow-shape hover:bg-blue-700 transition-all py-1 px-5 rounded-md font-bold"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-sm font-semibold">
          Você não tem uma conta?{" "}
          <a className="text-blue-600" href="/register">
            Crie uma aqui.
          </a>
        </p>
      </div>
    </main>
  );
}
