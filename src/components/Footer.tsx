import FooterImage from "../../assets/logo-text.png";
const Footer = () => {
  return (
    <div className="container mx-auto">
      <div>
        <div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-center mt-3.75 md:justify-start">
              <img className="max-w-full" src={FooterImage} alt="" />
            </div>
            <div>
              <p className="text-center text-gray-600 text-[15px] p-2 md:text-left">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>
            </div>
            <div className="flex justify-center items-center md:justify-start">
              <ul className="flex gap-2 list-disc list-inside text-gray-600">
                <li className="list-none">
                  <a href="">GitHub</a>
                </li>
                <li>
                  <a href="">Twitter</a>
                </li>
                <li>
                  <a href="">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          {/* //!-------------------- added something for desktop responsive */}
          <div className="flex gap-2.5">
            <div>
              <h2>PRODUCT</h2>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Technologies</a>
                </li>
                <li>
                  <a href="">Projects</a>
                </li>
              </ul>
            </div>
            <div>
              <h2>COMPANY</h2>
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <h2>LEGAL</h2>
              <ul>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-12 border-t border-gray-600 pt-5 gap-1.25">
          <div>
            <p className="text-gray-600 ml-3">
              © 2026 Dev Stack. All rights reserved.
            </p>
          </div>
          <div className="mr-3">
            <ul className="flex gap-3 text-gray-600">
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
            </ul>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};

export default Footer;
