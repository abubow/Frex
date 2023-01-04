import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Frex</title>
        <meta name="description" content="A torrent streaming service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-gray-700">Frex</h1>
      </main>
    </>
  );
};

export default Home;

// type TechnologyCardProps = {
//   name: string;
//   description: string;
//   documentation: string;
// };

// const TechnologyCard = ({
//   name,
//   description,
//   documentation,
// }: TechnologyCardProps) => {
//   return (
//     <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
//       <h2 className="text-lg text-gray-700">{name}</h2>
//       <p className="text-sm text-gray-600">{description}</p>
//       <Link
//         className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
//         href={documentation}
//         target="_blank"
//         rel="noreferrer"
//       >
//         Documentation
//       </Link>
//     </section>
//   );
// };
