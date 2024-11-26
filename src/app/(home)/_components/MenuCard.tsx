import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Props {
  menu: {
    menu_name: string;
    name: string;
    image: string;
    description: string;
    price: Number;
  };
}

const MenuCard = ({ menu }: Props) => {
  return (
    <Card className="lg:min-h-full">
      <CardContent className="p-0 md:flex md:flex-row lg:flex-col">
        <Image
          className="rounded-t-[1.6rem] h-[18.2rem] object-cover w-full md:bg-[2rem_2rem] md:bg-auto md:max-w-[30%] md:min-h-[25rem] md:rounded-r-none md:rounded-l-[1.6rem] lg:max-h-[18rem]  lg:max-w-full lg:rounded-t-[1.6rem] lg:rounded-b-none"
          src={`/images/${menu.image}`}
          alt={menu.menu_name}
          width={396}
          height={182}
        />
        <div className="flex flex-col p-[2.4rem] gap-[0.8rem] md:gap-[1.6rem]">
          <h4
            className={
              menu.menu_name.length > 30
                ? "text-montserrat_bold_16"
                : "text-montserrat_bold_20"
            }
          >
            {menu.menu_name}
          </h4>
          <h3 className="text-montserrat_regular_20">{menu.name}</h3>
          <p className="text-montserrat_regular_16 text-text/[.6]">
            {menu.description}
          </p>
          <p className="text-montserrat_bold_20 text-primary">
            ${menu.price.toFixed(2)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
