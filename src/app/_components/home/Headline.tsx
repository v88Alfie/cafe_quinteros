import React from "react";
import Image from "next/image";
import ContactUsFormModal from "./ContactUsFormModal";

const Headline = () => {
  return (
    <div className="flex bg-white justify-between gap-[3.2rem] px-[1.6rem] pt-[10rem] pb-[4rem] w-full md:pt-[12rem] md:pb-[6rem] md:px-[4rem] lg:md:pt-[16rem] lg:pb-[10rem] lg:px-[10rem]">
      <div className="xl:max-w-[60rem]">
        <h4 className="text-montserrat-18 font-bold md:text-[2.2rem] xl:text-[3.2rem]">
          Café Quinteros:
        </h4>
        <h1 className="text-montserrat-32 font-bold md:text-[4.6rem] lg:text-[5.2rem] lg:leading-[6.3rem] xl:text-[6.4rem] xl:leading-[7.8rem]">
          For <span className="text-primary">Salvadorans</span> by Salvadorans
        </h1>
        <h5 className="text-montserrat-16 text-text/[.6] pt-[1.6rem] md:text-[2rem]">
          Enjoy the true taste of El Salvador with every sip and bite. We serve
          local coffee, traditional food, and sweet treats.
        </h5>
        <div className="w-[18rem] h-[6.4rem] mt-[3.2rem]">
          <ContactUsFormModal />
        </div>
      </div>
      <div className="hidden md:inline-flex">
        <div className="flex flex-col gap-[1.6rem]">
          <div className="flex flex-row flex-[2] gap-[1.6rem] md:max-h-[17rem] lg:max-h-[22.3rem]">
            <Image
              className="flex-1 flex rounded-[1.6rem] md:max-w-[12rem] lg:max-w-[16.5rem] xl:min-w-[26.5rem]"
              src={require(`../../../public/images/cafe_americano_full.png`)}
              alt={"cafe_americano"}
            />
            <Image
              className="flex-1 flex rounded-[1.6rem] md:max-w-[12rem] lg:max-w-[16.5rem] xl:min-w-[26.5rem]"
              src={require(`../../../public/images/waffle_de_banana_full.png`)}
              alt={"waffle_de_banana"}
            />
          </div>
          <Image
            className="rounded-[1.6rem] w-full xl:max-h-[22.3rem]"
            src={require(`../../../public/images/croissant_de_pallo.png`)}
            alt={"croissant_de_pallo"}
          />
        </div>
      </div>
    </div>
  );
};

export default Headline;
