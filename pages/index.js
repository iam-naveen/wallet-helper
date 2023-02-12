import Head from "next/head";
import Member from "../components/Member";
import { useState, useEffect } from "react";

export default function Home() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getData = async function () {
      const res = await fetch("api/data");
      const data = await res.json();
      setDetails(data);
    };
    getData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Wallet Checker</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/438/438526.png"
        />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-start text-center">
        <h1 className="text-3xl mt-10 mx-0 font-bold">Memeber's List</h1>
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around">
          {details.map((member, index) => (
            <Member name={member.name} memberid={member.id} key={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
