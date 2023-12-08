"use client";
import { useEffect, useState } from "react";
import database from "../data/database";

export default function Service({ params, searchParams }) {
  const [currentService, setCurrentService] = useState("no data");

  useEffect(() => {
    async function getCurrentServiceData() {
      database.map((data) => {
        if (data.serviceLink === params.services) {
          console.log(`get the data for ${params.services}`);
          console.log("the data is: ", data.data);
          setCurrentService(data.data.name);
        }
      });
    }

    getCurrentServiceData();
  }, [params.services]); // Add params.services as a dependency

  return (
    <main>
      <section className="flex items-center justify-center flex-col" style={{ minHeight: "92vh" }}>
        <h1 className="font-bold text-2xl">Service Name</h1>
        <p>{params.services}</p>
        <p>{currentService}</p>
      </section>
    </main>
  );
}
