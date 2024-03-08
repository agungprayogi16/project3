/** @format */

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DUMMY_CONTENT = [
  {
    id: 1,
    title: "Fortune’s favorite",
    description:
      "Southeast Asia’s only company to make it to Fortune’s ‘Change the World’ list twice.",
  },
  {
    id: 2,
    title: "$7.1 b contribution",
    description: "Value added to the Indonesian economy in 2019.",
  },
  {
    id: 3,
    title: "Tonne times greener",
    description: "Saved 11.3 tonnes of plastic in cutlery since October 2020.",
  },
  {
    id: 4,
    title: "Digitising merchants",
    description:
      "Resulted in 80% growth in number of GoFood merchants during pandemic.",
  },
  {
    id: 5,
    title: "Fortune’s favorite",
    description:
      "Southeast Asia’s only company to make it to Fortune’s ‘Change the World’ list twice.",
  },
  {
    id: 6,
    title: "Employees",
    description:
      "Behind Southeast Asia’s only hyper-growth startup are some billion-dollar brains, doing what they do best.",
  },
];

function ImagePromo() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 400, min: 300 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className='w-full flex justify-center   p-12 gap-10 overflow-hidden flex-col'>
      <div
        className='flex flex-col '
        data-aos='fade-right'
        data-aos-duration='1000'
        data-aos-delay='0'
        data-aos-easing='ease-in-sine'>
        <h1
          className='flex
        text-5xl font-bold'>
          Promo???
        </h1>
        <h6 className='text-2xl font-semibold'>
          AntarJemput is the best solution
        </h6>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        keyBoardControl={true}
        infinite={true}
        autoPlay={true}
        showDots={true}
        arrows={true}
        className='w-full h-full text-black overflow-hidden  bg-opacity-10 rounded-2xl '
        centerMode={true}
        responsive={responsive}>
        {DUMMY_CONTENT.map((item1, index) => {
          return (
            <div>
              <div
                key={index}
                className='flex w-screen h-full flex-row items-center ml-96 rounded-full  bg-cover'>
                <div
                  style={{
                    backgroundSize: "cover",
                    backgroundColor: "black",
                    backgroundPosition: "center",
                    objectFit: "cover",
                    padding: "0px 0px 0px 0px",
                    objectPosition: "center",
                    backgroundImage:
                      index === 0
                        ? "url('https://i.pinimg.com/564x/8d/d3/fe/8dd3fe30720aff1367df148f002d1266.jpg')"
                        : index === 1
                        ? "url('https://i.pinimg.com/564x/14/a6/05/14a605f869de0328deea79d9dfc56dc7.jpg')"
                        : index === 2
                        ? "url('https://i.pinimg.com/564x/d2/53/3c/d2533c95aa749475a43caec82a15a964.jpg')"
                        : index === 3
                        ? "url('https://i.pinimg.com/564x/da/43/51/da43512339e8aee66db2220f97f8a509.jpg')"
                        : index === 4
                        ? "url('https://i.pinimg.com/564x/42/62/44/4262440b26e6bb5124e9e6a4953e2e9a.jpg')"
                        : index === 5
                        ? "url('https://i.pinimg.com/564x/1e/8d/79/1e8d7968c3e54b1072827a17324921a9.jpg')"
                        : index === 6
                        ? "url('https://images.unsplash.com/photo-1561525155-40a650192479?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                        : "",
                  }}
                  className='flex  lg:flex-row flex-col object-cover ml-10 bg-cover rounded-3xl bg- w-[600px] h-96 p-3 relative bg-opacity-0 '>
                  <div className='flex flex-col'>
                    <h1 className='flex text-3xl font-bold  items-center text-black text-opacity-100'>
                      {item1.title}
                    </h1>
                    <h6 className='text-white flex items-cente text-opacity-100'>
                      {item1.description}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ImagePromo;
