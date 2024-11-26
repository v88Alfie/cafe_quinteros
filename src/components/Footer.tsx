import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mx-0 bg-gray py-[4rem] p-[1.6rem] md:px-[4.8rem] lg:px-[10rem] xl:px-[12rem]">
      <div className="flex gap-[1.6rem] mx-auto justify-center max-w-[40rem] items-center pb-[4rem] md:max-w-[60rem]">
        <Image
          src="/images/cafe_quinteros_logo2.png"
          width={60}
          height={60}
          alt="Cafe Quinteros"
        />
        <Image
          className="w-[100%]"
          src="/images/cafe_quinteros_text_logo.png"
          alt="Cafe Quinteros"
          width={282}
          height={22}
        />
      </div>
      <div className="flex flex-col gap-[3.2rem] py-[4rem] border-t-2 border-[#9FCADB] md:flex-row md:justify-between">
        <div className="flex flex-col gap-[1.6rem]">
          <h4 className="text-montserrat_bold_16 text-text/[.6]">Contact Us</h4>
          <h5 className="text-montserrat_regular_16 text-text/[.6]">
            +503-6925-6177
          </h5>
          <div className="flex gap-[3.2rem]">
            <Image
              src={"/images/whatsapp.png"}
              alt="Whatsapp"
              width={20}
              height={20}
            />
            <Image
              src={"/images/facebook.png"}
              alt="Facebook"
              width={20}
              height={20}
            />
            <Image
              src={"/images/Instagram.png"}
              alt="Instagram"
              width={20}
              height={20}
            />
          </div>
          <h5 className="text-montserrat_regular_16 text-text/[.6]">
            © 2024 Café Quiteros
          </h5>
        </div>
        <div className="flex flex-col gap-[3.2rem] md:flex-row-reverse">
          <div className="flex flex-col gap-[1.6rem]">
            <h4 className="text-montserrat_regular_16 font-bold text-text/[.6]">
              Visit Café Quinteros
            </h4>
            <h5 className="text-montserrat_regular_16 text-text/[.6] leading-[2.56rem]">
              Colonia Medica, Pasaje Llort #120, San Salvador, El Salvador
            </h5>
            <div className="hidden py-[4rem] gap-[1.6rem]  md:flex">
              <p className="text-montserrat_regular_16 text-text/[.28] leading-[2.6rem]">
                Develop by
              </p>
              <Image
                src={`/images/armada_logics.png`}
                alt="Armada Logics"
                width={160}
                height={36}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[1.6rem]">
            <h4 className="text-montserrat_bold_16 text-text/[.6]">About Us</h4>
            <h5 className="text-montserrat_regular_16 text-text/[.6] leading-[2.56rem]">
              About Café Quinteros
            </h5>
            <div className="flex py-[4rem] gap-[1.6rem] md:hidden">
              <p className="text-montserrat_regular_16 text-text/[.28] leading-[2.6rem]">
                Develop by
              </p>
              <Image
                src={`/images/armada_logics.png`}
                alt="Armada Logics"
                width={160}
                height={36}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
