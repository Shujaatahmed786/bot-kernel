import Image from "next/image";
import { product } from "@/src/data";

const ProductsSection = () => {
  return (
    <div className="p-2">
      <div>
        <h1
          className="bg-[#fef4ff] mx-auto text-[#ac81b3] text-center p-2
         text-xs font-semibold max-w-32 mb-4  rounded-sm mt-8
          w-full"
        >
          What we propose
        </h1>
        <h1 className="text-[#490852] font-bold leading-normal text-[32px]   text-center">
          Products
        </h1>
        <p className="mt-4 text-center text-base mb-14">
          Take a look at our two state-of-the-art, in-house developed products!
        </p>
      </div>
      <div className="max-w-[55rem] w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border p-4 bg-[#fcfcfc] border-[#E6E5E5]"
            >
              <div className="relative w-24 h-24 md:w-20 md:h-20 mb-4">
                <Image
                  src={item.src}
                  fill
                  className="object-contain"
                  alt="icon"
                />
              </div>
              <h3 className="font-bold text-[24px] mt-2 md:mt-8 mb-2 md:mb-8">
                {item.title}
              </h3>
              <p className="text-center mx-auto text-sm leading-[24px] xl:leading-[32px] max-w-[450px] mb-8 w-full">
                {item.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
