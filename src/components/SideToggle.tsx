const SideToggle = () => {
  return (
    <div className="w-[50vw] h-full absolute top-[40.67px] md:hidden bg-gray-100 rounded-b-[10px] shadow-xl border border-slate-200">
      <div className="py-2.5">
        <ul>
          <li className="hover:bg-[#f87378b4] duration-200 px-3.75 py-1.25 font-semibold">
            <a className="block" href="">Home</a>
          </li>
          <li className="hover:bg-[#f87378b4] duration-200 px-3.75 py-1.25 font-semibold">
            <a className="block" href="">Technologies</a>
          </li>
          <li className="hover:bg-[#f87378b4] duration-200 px-3.75 py-1.25 font-semibold">
            <a className="block" href="">Projects</a>
          </li>
          <li className="hover:bg-[#f87378b4] duration-200 px-3.75 py-1.25 font-semibold">
            <a className="block" href="">About</a>
          </li>
          <li className="hover:bg-[#f87378b4] duration-200 px-3.75 py-1.25 font-semibold">
            <a className="block" href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideToggle;
