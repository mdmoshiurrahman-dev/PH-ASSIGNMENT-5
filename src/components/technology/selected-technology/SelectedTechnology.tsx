import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../../types/TechnologyType";
import SelectedTechnologyCard from "./SelectedTechnologyCard";
import SelectedTechnologyEmptyCard from "./SelectedTechnologyEmptyCard";

export interface SelectedTechnologyProps {
  selectedTechnology: TechnologyType[];
  setSelectedTechnology:Dispatch<SetStateAction<TechnologyType[]>>
}

const SelectedTechnology = ({
  selectedTechnology,
  setSelectedTechnology
}: SelectedTechnologyProps) => {
  return (
    <div className="m-2 mt-0 border p-3 rounded-[10px]">
      <div>
        <h2 className="font-bold text-[20px] md:text-[28px]">Your Stack</h2>
        <p className="text-[15px] text-gray-600 md:text-[20] mb-1.5">
          {selectedTechnology.length > 0
            ? `${selectedTechnology.length} Technology Selected`
            : "No technologies selected yet."}
        </p>
      </div>
      <div>
        {selectedTechnology.length > 0 ? (
          <div>
            {selectedTechnology.map((technology) => (
              <SelectedTechnologyCard
                key={technology.id}
                selectedTechnology={technology}
                setSelectedTechnology = {setSelectedTechnology}
                allSelectedTechnology = {selectedTechnology}
              />
            ))}
          </div>
        ) : (
          <SelectedTechnologyEmptyCard />
        )}
      </div>
      <div
        className={`${selectedTechnology.length > 0 ? "block" : "hidden"} w-full flex justify-center`}
      >
        <button onClick={()=> setSelectedTechnology([])} className="cursor-pointer border-2 p-2 mt-2.5 rounded-[10px] font-bold text-red-500 md:text-[18px] w-full">
          Remove All
        </button>
      </div>
    </div>
  );
};

export default SelectedTechnology;
