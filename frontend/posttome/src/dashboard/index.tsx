import React from "react";
import Post from "../components/post";
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
    <div className="space-y-5 p-2 overflow-clip text-zinc-50  ">
      <div className="flex gap-5 w-full justify-between p-5">
        <div className="flex sm:justify-start   items-center w-full ">
          <img
            src="logo.png"
            alt="logo do post-to-me branca com um titulo circular"
          />
        </div>
      </div>
      <div className="flex w-full items-center flex-col bg-pattern bg-center bg-no-repeat h-80 space-y-10  justify-center">
        <h1 className="text-4xl text-center font-semibold">
          Busque qualquer post
        </h1>
        <form className="w-full  flex justify-center items-center p-3 gap-4">
          <input
            className="px-4 py-2 rounded-md bg-zinc-900 placeholder:font-semibold placeholder:text-lg text-lg w-3/6 outline-none shadow-shape"
            type="text"
            placeholder="O que quer ler hoje?"
          />
          <button
            className="font-bold hover:bg-blue-700 rounded-md bg-blue-600 px-5 py-2 shadow-shape"
            type="submit"
          >
            Buscar
          </button>
        </form>
      </div>
      <div className="flex items-center justify-center flex-col space-y-6 max-w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <Post
            author="Andressa Andrade"
            date={new Date()}
            title="Como utilizar ferramentas IA's no mercado de trabalho e nas universidades"
            content="A utilização de ferramentas de Inteligência Artificial (IA) no mercado de trabalho e nas universidades tem se tornado cada vez mais comum, trazendo novas oportunidades e desafios para profissionais e estudantes.

No Mercado de Trabalho:

As ferramentas de IA estão revolucionando diversos setores, desde a automação de processos até a análise de dados complexos. No ambiente corporativo, essas ferramentas permitem a otimização de tarefas repetitivas, como atendimento ao cliente via chatbots e análise preditiva em finanças e marketing. Profissionais que dominam o uso de IA podem se destacar ao agregar valor através de insights baseados em dados e na criação de soluções inovadoras que aumentam a eficiência e a competitividade das empresas.

Além disso, a IA está mudando o perfil de muitas profissões. A automação de tarefas rotineiras libera tempo para que os profissionais se concentrem em atividades mais estratégicas e criativas, o que requer uma adaptação contínua e uma constante atualização de habilidades. A habilidade de trabalhar com IA, entender suas limitações e aplicá-la de maneira ética e eficiente se torna um diferencial no mercado de trabalho.

Nas Universidades:

Nas universidades, as ferramentas de IA estão sendo integradas ao processo educacional, tanto na administração acadêmica quanto no ensino e na pesquisa. No campo da administração, a IA pode ajudar na personalização de currículos, prever taxas de evasão, e otimizar a alocação de recursos. Para os estudantes, a IA oferece suporte em diversas áreas, como a tutoria personalizada, onde sistemas inteligentes podem identificar dificuldades específicas e sugerir conteúdos e exercícios adequados.

Na pesquisa acadêmica, a IA está transformando a forma como os dados são coletados, analisados e interpretados. Ferramentas de IA permitem a análise de grandes volumes de dados em diversas disciplinas, desde ciências sociais até biomedicina, possibilitando descobertas que antes seriam inviáveis.

Desafios e Considerações Éticas:

Apesar dos benefícios, o uso de IA tanto no mercado de trabalho quanto nas universidades levanta questões éticas e desafios. É essencial que o desenvolvimento e a aplicação dessas ferramentas sejam feitos com transparência, garantindo que não haja viés nos algoritmos e que os dados pessoais sejam protegidos. A educação em IA também precisa incluir uma discussão sobre ética e responsabilidade, preparando tanto profissionais quanto estudantes para usar essas tecnologias de maneira consciente e responsável.

Em resumo, a integração de ferramentas de IA no mercado de trabalho e nas universidades oferece vastas oportunidades, mas requer uma abordagem cuidadosa e ética. A adaptação a essas novas tecnologias pode ser um fator decisivo para o sucesso tanto de profissionais quanto de acadêmicos em um mundo cada vez mais digital e interconectado."
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
