"use client";
import SquadsList from "@/components/squads/UnSquad";

const SquadsPage = () => {
  return (
    <>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-xl font-semibold text-sky-800 lg:text-3xl dark:text-white">
          Te mostramos cada una de las células de trabajo interdisciplinarias.
        </h1>
      </div>

      <SquadsList />
    </>
  );
};

export default SquadsPage;
