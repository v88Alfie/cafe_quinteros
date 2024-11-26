import React from "react";
import Image from "next/image";
import ContactUsFormModal from "../_components/ContactUsFormModal";

const Headline = () => {
  return (
    <section>
      <div className="container mx-0 flex bg-white gap-[3.2rem] px-[1.6rem] pt-[10rem] pb-[4rem] w-full md:pt-[12rem] md:pb-[6rem] md:px-[4rem] lg:md:pt-[16rem] lg:pb-[10rem] lg:px-[10rem] xl:px-[12rem]">
        <div className="md:max-w-[40.8rem] xl:max-w-[60rem]">
          <h4 className="text-montserrat_bold_18 md:text-montserrat_bold_22 xl:text-montserrat_bold_32">
            Café Quinteros:
          </h4>
          <h1 className="text-montserrat_bold_32 md:text-montserrat_bold_46 md:leading-[5.6rem] lg:text-[5.2rem] lg:leading-[6.3rem] xl:text-[6.4rem] xl:leading-[7.8rem]">
            For <span className="text-primary">Salvadorans</span> by Salvadorans
          </h1>
          <h5 className="text-montserrat_regular_16 md:text-montserrat_regular_20 text-text/[.6] pt-[1.6rem] md:text-[2rem]">
            Enjoy the true taste of El Salvador with every sip and bite. We
            serve local coffee, traditional food, and sweet treats.
          </h5>
          <div className="w-[18rem] h-[6.4rem] mt-[3.2rem]">
            <ContactUsFormModal />
          </div>
        </div>
        <div className="hidden md:inline-flex">
          <div className="flex flex-col gap-[1.6rem]">
            <div className="flex flex-row flex-[2] gap-[1.6rem] md:max-h-[17rem] lg:max-h-[22.3rem]">
              <Image
                className="flex-1 flex rounded-[1.6rem] md:max-w-[12rem] lg:min-w-[16.5rem] xl:min-w-[26.5rem]"
                src={`/images/cafe_americano.png`}
                alt={"cafe_americano"}
                width={120}
                height={168}
              />
              <Image
                className="flex-1 flex rounded-[1.6rem] md:max-w-[12rem] lg:min-w-[16.5rem] xl:min-w-[26.5rem]"
                src={`/images/waffle_de_banana.png`}
                alt="waffle_de_banana"
                width={120}
                height={168}
              />
            </div>
            <Image
              className="rounded-[1.6rem] w-full md:object-cover md:max-h-[16.8rem] xl:max-h-[22.3rem]"
              src={`/images/croissant_de_pollo.png`}
              alt="croissant_de_pollo"
              width={256}
              height={168}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headline;
