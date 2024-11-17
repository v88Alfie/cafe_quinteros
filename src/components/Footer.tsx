import React from "react";
import Image from "next/image";
import Logo from "../public/images/cafe_quinteros_logo2.png";
import TextLogo from "../public/images/cafe_quinteros_text_logo.png";
import FacebookLogo from "../public/images/facebook.png";
import WhatsappLogo from "../public/images/whatsapp.png";
import InstagramLogo from "../public/images/Instagram.png";

const Footer = () => {
  return (
    <footer className="bg-gray py-[4rem] p-[1.6rem] md:px-[4.8rem] lg:px-[10rem] xl:px-[12rem]">
      <div className="flex gap-[1.6rem] mx-auto justify-center max-w-[40rem] items-center pb-[4rem] md:max-w-[60rem]">
        <Image src={Logo} width={60} height={60} alt="Cafe Quinteros" />
        <Image
          className="w-[100%] h-[2.2rem]"
          src={TextLogo}
          alt="Cafe Quinteros"
        />
      </div>
      <div className="flex flex-col gap-[3.2rem] py-[4rem] border-t-2 border-[#9FCADB] md:flex-row md:justify-between">
        <div className="flex flex-col gap-[1.6rem]">
          <h4 className="text-montserrat-16 font-bold text-text/[.6]">
            Contact Us
          </h4>
          <h5 className="text-montserrat-16 text-text/[.6]">+503-6925-6177</h5>
          <div className="flex gap-[3.2rem]">
            <Image src={WhatsappLogo} alt="Whatsapp" />
            <Image src={FacebookLogo} alt="Facebook" />
            <Image src={InstagramLogo} alt="Instagram" />
          </div>
          <h5 className="text-montserrat-16 text-text/[.6]">
            © 2024 Café Quiteros
          </h5>
        </div>
        <div className="flex flex-col gap-[3.2rem] md:flex-row-reverse">
          <div className="flex flex-col gap-[1.6rem]">
            <h4 className="text-montserrat-16 font-bold text-text/[.6]">
              Visit Café Quinteros
            </h4>
            <h5 className="text-montserrat-16 text-text/[.6] leading-[2.56rem]">
              Colonia Medica, Pasaje Llort #120, San Salvador, El Salvador
            </h5>
            <div className="hidden py-[4rem] gap-[1.6rem]  md:flex">
              <p className="text-montserrat-16 text-text/[.28] leading-[2.6rem]">
                Develop by
              </p>
              <Image
                src={require(`../public/images/armada_logics.png`)}
                alt="Instagram"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[1.6rem]">
            <h4 className="text-montserrat-16 font-bold text-text/[.6]">
              About Us
            </h4>
            <h5 className="text-montserrat-16 text-text/[.6] leading-[2.56rem]">
              About Café Quinteros
            </h5>
            <div className="flex py-[4rem] gap-[1.6rem] md:hidden">
              <p className="text-montserrat-16 text-text/[.28] leading-[2.6rem]">
                Develop by
              </p>
              <Image
                src={require(`../public/images/armada_logics.png`)}
                alt="Instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
