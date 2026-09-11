import FooterImage from "../../assets/logo-text.png";
const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center mt-3.75">
          <img className="max-w-full" src={FooterImage} alt="" />
        </div>
        <div>
          <p className="text-center text-gray-600 text-[15px] p-2">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
        </div>
        <div className="flex justify-center items-center">
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
        <div className="flex justify-between mb-12 border-t border-gray-600 pt-5">
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
      </div>
    </div>
  );
};

export default Footer;
