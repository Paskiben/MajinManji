import Head from "next/head";
import Layout from "../components/layout";

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/data/todo.json");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default function ShowJSON({ data }) {
  return (
    <Layout pageId="page4">
      <Head>
        <title>Ver JSON</title>
      </Head>
      <div>{JSON.stringify(data)}</div>
      {data.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </Layout>
  );
}
