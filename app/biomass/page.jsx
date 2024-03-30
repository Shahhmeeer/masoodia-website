import CustomTable from "@/components/CustomTable";
import React from "react";

function Biomass() {
  return (
    <div className="relative sm:max-w-6xl max-w-sm mx-auto flex flex-col items-center justify-center min-h-[100dvh]">
      <h1 className="w-full font-black text-xl sm:text-2xl text-green-800 sm:pt-12">
        Product Analysis
      </h1>
      <div className="md:my-4 my-2"></div>
      <CustomTable />
      <div className="mt-20"></div>
      <section className="h-52 w-full">
        <h2 className="w-full font-black text-2xl text-green-800">
          Available Bio Mass
        </h2>
        <ol className="w-full list-decimal list-inside">
          <li>Rice Husk</li>
          <li>Baled Brassica Straw</li>
          <li>Sugar Cane Straw (Bagase)</li>
          <li>Eucalyptus Wood</li>
          <li>Wood Logs / Wood Chips</li>
        </ol>
      </section>
    </div>
  );
}

export default Biomass;
