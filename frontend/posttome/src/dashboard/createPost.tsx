import { X } from "lucide-react";
import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <>
      {!open && (
        <form
          className="w-[560px] border my-14 flex justify-center items-center flex-col space-y-4 border-zinc-900 rounded-md p-3"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between items-center w-full">
            <h1 className="text-3xl  antialiased ">Escreva o seu post</h1>
            <button onClick={() => setOpen(true)}>
              <X />
            </button>
          </div>
          <div className="w-full">
            <div className="w-3/6">
              <input
                className="antialiased text-2xl font-normal rounded-md border-b border-zinc-900 bg-transparent placeholder:text-zinc-500 text-zinc-50 w-full p-2 focus:outline-none"
                type="text"
                id="title"
                placeholder="Defina um título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="w-full">
              <textarea
                className=" rounded-md h-40 resize-none font-light bg-transparent placeholder:text-zinc-500 text-zinc-50 w-full p-2 focus:outline-none text-xl"
                placeholder="Escreva seu texto bem aqui..."
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          <button
            className="bg-blue-700 rounded-md py-1 self-end px-5 shadow-shape font-semibold text-zinc-50 hover:bg-blue-800 active:bg-blue-900 transition-all"
            type="submit"
          >
            Publicar
          </button>
        </form>
      )}
    </>
  );
};

export default CreatePost;
