import type { TechnologyType } from "../../../types/TechnologyType";
import { FaCheck } from "react-icons/fa";
export interface TechnologyCardProps {
  technology: TechnologyType;
  handelSelectedTechnology: (technology: TechnologyType) => void;
  isSelected: boolean;
}

const TechnologyCard = ({
  technology,
  handelSelectedTechnology,
  isSelected,
}: TechnologyCardProps) => {
  return (
    <div className="flex flex-col border rounded-[10px] p-3.5 mx-2 justify-between">
      <div className="flex justify-between items-center">
        <div className="max-w-11 w-full">
          <img
            className="w-full h-auto block"
            src={technology.icon}
            alt="technology icons"
          />
        </div>
        <div>
          <p
            className={`${
              technology.badge === "Popular"
                ? "bg-[#f0f9ffab] text-[#3cc1ff] border-[#b5e6fd]"
                : technology.badge === "Fast"
                  ? "bg-[#fff7eda4] text-[#fc803e] border-[#facccc]"
                  : technology.badge === "Essential"
                    ? "bg-[#f8fff7a7] text-[#26ff00] border-[#d2fdb5]"
                    : technology.badge === "Containers"
                      ? "bg-[#fcfde6b6] text-[#ffe600] border-[#f1f0a7]"
                      : technology.badge === "Powerful"
                        ? "bg-[#fde6e6cd] text-[#fd2323] border-[#f1a7a7]"
                        : ""
            } px-3 py-0.75 rounded-xl border-2 text-[14px]`}
          >
            {technology.badge}
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-[18px] font-bold mt-2">{technology.name}</h2>
        <p className="text-gray-500 text-[15px]">{technology.description}</p>
      </div>
      <div>
        <div className="flex justify-evenly items-center">
          <div>
            <p className="bg-gray-100 px-2.5 py-[3] rounded-sm">
              {technology.category}
            </p>
          </div>
          <div>
            <p>{technology.difficulty}</p>
          </div>
          <div>
            <p>
              <span className="text-yellow-400 text-[18px]">★</span>{" "}
              {technology.rating}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center mt-3.75">
          <button
            onClick={() => {
              handelSelectedTechnology(technology);
            }}
            disabled={isSelected}
            className={`text-white bg-black w-full p-2 font-semibold rounded-[7px] ${!isSelected ? "cursor-pointer" : "cursor-not-allowed bg-gray-200 text-black"}`}
          >
            {!isSelected ? (
              <span className="text-white">
                <FaCheck className="inline" /> Add to Stack
              </span>
            ) : (
              <span className="inline text-black">
                <FaCheck className="inline" /> Added to Stack
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
