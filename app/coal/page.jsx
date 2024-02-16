import CustomTable from "@/components/CustomTable";
import React from "react";

function ImportedCoalPage() {
  return (
    <div className="relative sm:max-w-6xl mx-auto flex flex-col items-center justify-center max-w-sm" style={{ minHeight: "100dvh" }}>
      <h1 className="w-full font-black text-xl">Product Analysis</h1>
      <div className="md:my-4 my-2"></div>
      <CustomTable />
      <div className="mt-20"></div>
      <h2 className="w-full font-black text-xl">Available Bio Mass</h2>
      <ol className="w-full list-decimal list-inside">
        <li>Rice Husk</li>
        <li>Baled Brassica Straw</li>
        <li>Sugar Cane Straw (Bagase)</li>
        <li>Eucalyptus Wood</li>
        <li>Wood Logs / Wood Chips</li>
      </ol>
    </div>
  );
}

export default ImportedCoalPage;
