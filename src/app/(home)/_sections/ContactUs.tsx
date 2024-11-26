import React from "react";
import Image from "next/image";

/** UI COMPONENTS */
import { Card, CardContent } from "@/components/ui/card";

/** COMPONENTS */
import ContactUsFormModal from "../_components/ContactUsFormModal";

interface ChooseCafe {
  id: Number;
  title: string;
  description: string;
  image: string;
}

const ContactUs = () => {
  const choose_cafe_cards: ChooseCafe[] = [
    {
      id: 1,
      title: "Authentic Experience",
      description:
        "Enjoy authentic El Salvadoran flavors served in a warm and inviting setting.",
      image: "authentic.png",
    },
    {
      id: 2,
      title: "Locally Sourced & Fresh",
      description:
        "We use the freshest ingredients from local farms, ensuring quality in every bite.",
      image: "sourced_fresh.png",
    },
    {
      id: 3,
      title: "Community Focus",
      description:
        "We care about our community, providing high-quality, affordable products and supports local farmers.",
      image: "community.png",
    },
  ];
  return (
    <section>
      <div className="container mx-0 py-[4rem]">
        <h2 className="text-montserrat-28 font-bold md:m-auto md:w-[80%] md:text-center">
          Why Choose Café Quinteros
        </h2>
        <h3 className="text-montserrat-16 leading-[2.56rem] text-text/[.6] pt-[1.6rem] md:m-auto md:w-[80%] md:text-center">
          Taste El Salvador's regional and local breakfast & lunch in a place
          that's more than just a coffee shop.
        </h3>
        <div className="flex flex-col gap-[3.2rem] pt-[4rem]">
          {choose_cafe_cards.map((cafe_card) => (
            <Card className="bg-gray">
              <CardContent className="flex flex-col gap-[2.4rem] p-[2.4rem]">
                <Image
                  className="rounded-t-[1.6rem]"
                  src={`/images/${cafe_card.image}`}
                  alt={cafe_card.title}
                  width={30}
                  height={20}
                />
                <h2 className="text-montserrat-20 leading-[3.2rem] font-bold">
                  {cafe_card.title}
                </h2>
                <h3 className="text-montserrat-18 leading-[2.88rem] text-text/[.6]">
                  {cafe_card.description}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-[2.4rem] h-[6.4rem] w-full md:mx-auto md:w-[24rem]">
          <ContactUsFormModal />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
