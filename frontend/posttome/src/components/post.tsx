import { ArrowLeft, Check } from "lucide-react";
import React, { FormEvent } from "react";

interface PostProps {
  title: string;
  content: string;
  author: string;
  date: Date;
}

const Post: React.FC<PostProps> = ({ title, content, author, date }) => {
  const [open, setOpen] = React.useState(false);

  function sendComment(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // Get the input value from the form
    const commentInput = event.currentTarget.elements.namedItem(
      "comment"
    ) as HTMLInputElement;
    const comment = commentInput.value;

    // Do something with the comment, e.g. send it to a server

    // Clear the input field
    commentInput.value = "";
  }
  return (
    <div className="w-full flex justify-center">
      {open && (
        <div className="fixed inset-0 cursor-default overflow-scroll  bg-zinc-950 flex items-center justify-center">
          <div className="p-5 w-5/6 h-5/6 overflow-hidden overflow-y-scroll border border-zinc-800 rounded-lg space-y-5">
            <h2 className="text-3xl md:w-3/5 font-semibold">{title}</h2>
            <p className="font-bold gap-3">
              {author}
              <p className="flex items-center text-xs text-green-700">
                <Check size={15} /> escritor verificado
              </p>
            </p>
            <p className="text-zinc-50 break-all  text-lg overflow-scroll scroll-smooth text-justify p-2 h-[280px] w-full">
              {content}
            </p>
            <div className="px-4 space-y-5">
              <p className="font-semibold text-zinc-500">
                {date.toDateString()}
              </p>
              <h3 className="text-2xl font-semibold">Comentários</h3>
              <div className="flex items-center">
                <form onSubmit={sendComment}></form>
                <input
                  type="text"
                  placeholder="Digite seu comentário..."
                  className="shadow-shape bg-zinc-900 px-3 py-2 rounded-md w-full outline-none"
                />
                <button
                  className="bg-blue-600 shadow-shape hover:bg-blue-700 text-zinc-50 px-4 py-2 rounded-md ml-2 font-semibold"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
              <button
                onClick={() => setOpen(false)}
                className=" text-zinc-50 px-4 py-2 rounded-md font-semibold"
              >
                <ArrowLeft size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        onClick={() => setOpen(true)}
        className="p-7 cursor-pointer border border-zinc-900 overflow-y-scroll space-y-5 md:w-3/5 sm:w-5/6 rounded-lg hover:border-zinc-700 transition-colors "
      >
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-zinc-500 text-lg truncate">{content}</p>
        <div className="flex items-center justify-between px-4">
          <p className="font-bold gap-3">
            {author}
            <p className="flex items-center text-xs text-green-700">
              <Check size={15} /> escritor verificado
            </p>
          </p>
          <p className="font-semibold text-zinc-500">{date.toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
