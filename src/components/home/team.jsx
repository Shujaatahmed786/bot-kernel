const team = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center  w-full mb-20">
            <h1
              className="bg-[#fef4ff] mx-auto text-[#ac81b3] text-center p-2 text-xs font-semibold 
        max-w-14 mb-4 rounded-lg  w-full"
            >
              Meet
            </h1>
            <h1 className="text-[32px] xl:text-[48px] leading-normal font-bold title-font mb-4 text-[#490852]">
              The TEAM
            </h1>
            <p className="max-w-[700px] xl:text-[20px] w-full mx-auto leading-relaxed text-base text-black">
              Our growing team is comprised of very passionate AI and tech
              innovators, each with various skillsets. United by a common
              mission, our team is focused on delivering excellence with every
              application we develop.
            </p>
          </div>
          <div className="flex flex-col justify-center ">
            <div className="border mx-auto mb-4">
              <h1>Sammy</h1>
              <p>Chief Everything Officer</p>
            </div>
            <div className="flex justify-center gap-4">
              <div className="border">
                <h1>Sammy</h1>
                <p>Chief Everything Officer</p>
              </div>
              <div className="border">
                <h1>Sammy</h1>
                <p>Chief Everything Officer</p>
              </div>
              <div className="border">
                <h1>Sammy</h1>
                <p>Chief Everything Officer</p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <div className="border">
                <h1>Sammy</h1>
                <p>Chief Everything Officer</p>
              </div>
              <div className="border">
                <h1>Sammy</h1>
                <p>Chief Everything Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default team;