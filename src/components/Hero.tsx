import BannerImage from '../../assets/banner-stack.png'
const Hero = () => {
  return (
    <div>
      <div className="grid grid-rows-1 md:gap-3.5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  container mx-auto justify-center items-center lg:mt-12.5">
        <div className="lg:flex lg:flex-col lg:justify-center items-center">
          <h1 className="text-[28px] sm:text-[35px] lg:text-[50px] font-bold text-center m-3.75">
            Build Your Ideal <br />{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-400 via-pink-600 to-purple-600">
              Development Stack
            </span>
          </h1>
          <p className="text-[14px] lg:text-[20px] text-gray-600 text-center m-1.25 mb-2.25">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="grid grid-cols-2 gap-2.5 md:w-full">
            <button className="cursor-pointer hover:bg-linear-to-r from hover:bg-orange-300 hover:via-pink-300 hover:to-purple-300 duration-500  transition-opacity  ml-2.5 bg-linear-to-r from bg-orange-400 via-pink-400 to-purple-400  py-2.5 px-[2.5] text-white rounded-lg mb-2.5">
              Explore Technologies
            </button>
            <button className="mr-2.5 px-2.5 py-2.5 rounded-lg border mb-2.5 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <img
            className="lg:w-95"
            src= {BannerImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
