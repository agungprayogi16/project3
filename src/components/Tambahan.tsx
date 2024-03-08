/** @format */

function Tambahan() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");

    console.log("aboutSection:", aboutSection);

    if (aboutSection) {
      console.log("aboutSection.offsetTop:", aboutSection.offsetTop);
      window.scrollTo({
        top: aboutSection.offsetTop - 50,
      });
    }
  };
  return (
    <div className='w-full flex justify-center items-start h-screen  bg-gray-900'>
      <div className='flex lg:flex-col mt-[150px] gap-10 justify-center items-center flex-col w-full '>
        <div className='flex justify-center flex-row w-full'>
          <h1 className='text-3xl font-bold text-white  flex-wrap  '>
            We’re AntarJemput, the drivers of change
          </h1>
        </div>
        <div className='flex justify-center flex-row'>
          <button
            className='bg-green-500 hover:bg-green-800 text-white  px-4 py-2  rounded-full'
            onClick={scrollToAbout}>
            <h1 className='size text-base font-bold text-white '>
              Our Drivers
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tambahan;
