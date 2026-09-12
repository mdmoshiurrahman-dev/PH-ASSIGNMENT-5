import { GiHamburgerMenu } from "react-icons/gi";
import NavLogo from '../../assets/logo-text.png'
interface NavProps {
  handelButtonState: () => void;
}
const Nav = ({ handelButtonState }: NavProps) => {
  return (
    <nav className="sticky top-0 bg-white">
      <div className="flex justify-between container mx-auto items-center p-1 lg:p-2 md:p-1.5 border-b border-gray-300">
        <div
          className="md:hidden p-2 cursor-pointer"
          onClick={handelButtonState}
        >
          <GiHamburgerMenu />
        </div>
        <div>
          <img
            className="lg:w-28 w-25"
            src={NavLogo}
            alt=""
          />
        </div>
        <div className="hidden md:block lg:block lg:text-[14px] xl:block">
          <ul className="flex gap-6 sm:text-[12px] lg:text-[14px] xl:text-[14px] ">
            <li>
              <a className="hover:text-[#D91B7E]" href="#1">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-[#D91B7E]" href="#2">
                Technologies
              </a>
            </li>
            <li>
              <a className="hover:text-[#D91B7E]" href="#3">
                Projects
              </a>
            </li>
            <li>
              <a className="hover:text-[#D91B7E]" href="#4">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-[#D91B7E]" href="#5">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="cursor-pointer text-[12px] md:text-[14px] lg:text-[15px] xl:text-[15px]">
            Sign In
          </button>
          <button className="btn cursor-pointer text-[12px] md:text-[14px] lg:text-[15px] xl:text-[15px] bg-[#D91B7E] text-white px-3 md:px-4 xl:px-4 py-1.25 md:py-1.5 xl:-1.5 rounded-[20px] ml-4">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
