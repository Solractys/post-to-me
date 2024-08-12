import React from "react";
// import { api } from "../lib/axios";
// import { getCookie } from "typescript-cookie";

const Dashboard: React.FC = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  // setSearchTerm(event.target.value);
  // Perform search logic
  // };
  // React.useEffect(() => {
  //   api
  //     .get("/posts", {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  //         "Access-Control-Allow-Headers":
  //           "Origin, X-Requested-With, Content-Type, Accept",
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //       withCredentials: true,
  // })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="h-screen space-y-5 bg-zinc-950 p-4 text-zinc-50  ">
      <div className="flex gap-5 w-full justify-between p-5">
        <div className="flex justify-center items-center ">
          <img
            src="logo.png"
            alt="logo do post-to-me branca com um titulo circular"
          />
        </div>
        <div className="flex items-center gap-4 font-semibold text-xl">
          <a href="#" className="hover:text-blue-600 transition-all">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 transition-all">
            Sobre
          </a>
          <a href="#" className="hover:text-blue-600 transition-all">
            Perfil
          </a>
        </div>
      </div>
      <div className="flex w-full items-center bg-pattern bg-center bg-no-repeat h-80  justify-center">
        <form className="w-full  flex justify-center items-center p-3 gap-4">
          <input
            className="px-4 py-2 rounded-md bg-zinc-900 placeholder:font-semibold placeholder:text-lg text-lg w-5/6 outline-none shadow-shape"
            type="text"
            placeholder="O que quer ler hoje?"
          />
          <button
            className=" hover:bg-blue-700 rounded-md bg-blue-600 px-5 py-2 shadow-shape"
            type="submit"
          >
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
