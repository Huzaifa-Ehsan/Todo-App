import Layout from "@/layout/Layout";

import Head from "next/head";
import FormComponent from "./components/form.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <Layout>
        <section className="text-center">
          <h1 className="font-bold text-2xl my-2">Todo App</h1>
          <FormComponent />
        </section>
      </Layout>
    </>
  );
}
