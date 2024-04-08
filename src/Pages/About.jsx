import "../assets/Font.css";

const About = () => {
  return (
    <div>
      <div className="block isolate pb-[80px] antialiased box-border outline-none pt-10">
        <div className="max-w-[1200px] pr-[15px] pl-[15px] w-auto mr-auto ml-auto">
          <div className="flex flex-wrap mr-[-15px] ml-[-15px] gap-x-6 gap-y-0 mt-[calc(var(gap-y)* -1] mr-[calc(var(gap-x)* -0.5] ml-[calc(var(gap-x)* -0.5]">
            <div className="relative pr-[15px] pl-[15px] !self-center flex-1 w-[50%]">
              <div className="relative mr-[30px]">
                <img
                  src="/src/assets/6.png"
                  alt=""
                  className="m-0 max-w-[100%] align-middle"
                />
              </div>
            </div>
            <div className="relative pr-[15px] pl-[15px] !self-center flex-1 w-[50%]">
              <div className="text-black font-normal font-[rajdhani] text-base">
                <div className="mb-[40px]">
                  <h6 className="uppercase text-[#80B500] font-bold leading-5 mb-[15px] text-base block ms-0 me-0 isolate">
                    know more about nowra
                  </h6>
                  <h1 className="block isolate mt-0 clear-both text-blue-gray-900 font-bold text-6xl ms-0 me-0">
                    Trusted Organic
                  </h1>
                  <h1 className="block isolate mt-0 mb-4 clear-both text-blue-gray-900 font-bold text-5xl ms-0 me-0">Cosmetics Shop</h1>
                  <p className="block isolate pl-[30px] border-l-2 border-solid border-[#80B500] max-w-[450px] hyphens-auto ms-0 me-0 font-medium text-lg">Nourish your inner radience.<br />Focusing on beauty, Believe in nature.</p>
                </div>
                <p className="font-medium mb-4 text-lg">sellers who aspire to be good, do good, and spread goodness. We democratic, self-sustaining, two-sided marketplace which thrives on trust and is built on community and quality content.</p>
                <div className="!flex outline-1 outline-[#036cdb]">
                    <div className="!self-center ">
                        <h4 className="text-[#071c1f] !mb-0 mt-0 clear-both font-bold text-xl">MH Alvi</h4>
                        <small className="text-sm">/ Founder & CEO</small>
                    </div>
                    <div className="">
                        <img src="/sig1.png" alt="" className="max-w-[100%] align-middle select-none"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
