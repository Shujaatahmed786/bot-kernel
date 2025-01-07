import Image from "next/image";

const Header = () => {
  return (
    <div>
      <header className="text-black body-font flex justify-center">
        <div className="flex flex-wrap p-5  max-w-[88rem] w-full flex-col md:flex-row justify-around items-center">
          <a className="flex title-font font-medium  items-center text-gray-900 mb-4 md:mb-0">
            <div className="relative w-10 h-10">
              <Image
                src="/assets/images/logo.svg"
                fill
                className="object-contain"
              />
            </div>
            <span className="ml-3 text-2xl font-normal">Bot Kernel</span>
          </a>
          <nav className=" flex gap-5 flex-wrap items-center text-sm font-semibold">
            <a className="hover:text-[#99bf3e] cursor-pointer">Home</a>
            <a className="hover:text-[#99bf3e] cursor-pointer">Product</a>
            <a className="hover:text-[#99bf3e] cursor-pointer">Use Cases</a>
            <a className="hover:text-[#99bf3e] cursor-pointer">Our Process</a>
            <a className="hover:text-[#99bf3e] cursor-pointer">Contact Us</a>
            <div className="relative w-[30px] h-[30px]">
              <Image
                src="/assets/icons/linkedin-icon.svg"
                fill
                className="object-contain"
              />
            </div>
            <button className="border px-4 rounded-[30px] font-semibold p-3 text-sm text-[#7c2a88] border-[#490852]">
              Book a meeting
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
