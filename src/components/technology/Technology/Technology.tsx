import { use, useState } from "react";
import type { TechnologyType } from "../../../types/TechnologyType";
import TechnologyCard from "./TechnologyCard";
import SelectedTechnology from "../selected-technology/SelectedTechnology";

interface PropsType {
  technologyPromise: Promise<TechnologyType[]>;
}
const Technology = ({ technologyPromise }: PropsType) => {
  const data = use(technologyPromise);
  const [selectedTechnology, setSelectedTechnology] = useState<
    TechnologyType[]
  >([]);
  const handelSelectedTechnology = (technology: TechnologyType): void => {
    const isExist = selectedTechnology.find((t) => t.id === technology.id);
    if (isExist) {
      const remaining = selectedTechnology.filter(
        (f) => f.id !== technology.id,
      );
      setSelectedTechnology(remaining);
    } else {
      setSelectedTechnology([...selectedTechnology, technology]);
    }
  };
  return (
    <div className="container mx-auto mt-5">
      <h2 className=" p-2.5 text-center text-[24px] lg:text-[26px] font-bold lg:text-left">
        Explore the{" "}
        <span className=" bg-clip-text text-transparent bg-linear-to-r from bg-orange-400 via-pink-600 to-purple-600">
          Technologies
        </span>
      </h2>
      <p className="text-[14px] lg:text-[16px] text-center text-gray-600 lg:text-left lg:pl-2.5 mb-6.25">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4 gap-3.75 md:col-span-9">
          {data.map((t) => (
            <TechnologyCard key={t.id} technology={t} handelSelectedTechnology = {handelSelectedTechnology} ></TechnologyCard>
          ))}
        </div>
        <div className="md:col-span-3 w-full mt-2.5 md:mt-0">
        <SelectedTechnology selectedTechnology={selectedTechnology} setSelectedTechnology = {setSelectedTechnology} />
        </div>
      </div>
    </div>
  );
};

export default Technology;