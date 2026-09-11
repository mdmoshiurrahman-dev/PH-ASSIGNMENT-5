import type { TechnologyType } from "../../../types/TechnologyType";
import SelectedTechnologyCard from "./SelectedTechnologyCard";
import SelectedTechnologyEmptyCard from "./SelectedTechnologyEmptyCard";

export interface SelectedTechnologyProps {
  selectedTechnology: TechnologyType[];
}

const SelectedTechnology = ({
  selectedTechnology,
}: SelectedTechnologyProps) => {
  return (
    <div className="m-2 mt-0 border p-3 rounded-[10px]">
      <div>
        <h2 className="font-bold text-[20px] md:text-[28px]">Your Stack</h2>
        <p className="text-[15px] md:text-[20]">
          {selectedTechnology.length > 0
            ? `${selectedTechnology.length}`
            : "No technologies selected yet."}
        </p>
      </div>
      <div>
        {selectedTechnology.length > 0 ? (
          <div>
            {selectedTechnology.map((selectedTechnology) => (
              <SelectedTechnologyCard selectedTechnology={selectedTechnology} />
            ))}
          </div>
        ) : (
          <SelectedTechnologyEmptyCard />
        )}
      </div>
    <div className= {selectedTechnology.length>0 ? 'block': 'hidden'}>
        <button>Remove All</button>
      </div>
    </div>
  );
};

export default SelectedTechnology;
