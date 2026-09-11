import { RxCross2 } from "react-icons/rx";
import type { TechnologyType } from "../../../types/TechnologyType";
import type { Dispatch, SetStateAction } from "react";

export interface SelectedTechnologyCardProps {
  allSelectedTechnology: TechnologyType[];
  selectedTechnology: TechnologyType;
  setSelectedTechnology: Dispatch<SetStateAction<TechnologyType[]>>;
}

const SelectedTechnologyCard = ({
  selectedTechnology,
  setSelectedTechnology,
  allSelectedTechnology,
}: SelectedTechnologyCardProps) => {
  const handelRemoveByClickTechnology = (item: TechnologyType): void => {
    const remaining = allSelectedTechnology.filter((f) => f.id !== item.id);
    setSelectedTechnology(remaining);
  };

  return (
    <div className="flex justify-between border-[1.5px] border-gray-400 p-2.5 rounded-[10px] mb-2.5">
      <div className="flex gap-5 items-center">
        <div>
          <img
            className="h-10"
            src={selectedTechnology.icon}
            alt="technology icon"
          />
        </div>
        <div>
          <div>
            <p className="font-bold">{selectedTechnology.name}</p>
          </div>
          <div>
            <p className="text-[13px] text-gray-600">
              {selectedTechnology.category}
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center text-[20px] p-[10] cursor-pointer"
        onClick={() => handelRemoveByClickTechnology(selectedTechnology)}
      >
        <RxCross2 className="text-red-600" />
      </div>
    </div>
  );
};

export default SelectedTechnologyCard;
