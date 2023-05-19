import Layout from "@/layout/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
        <section className="bg-[#eee] h-screen">
          <div className="flex justify-center items-center h-full">
            <h1 className="font-bold text-4xl">Welcome to Todo App</h1>
          </div>
        </section>
    </>
  );
}
