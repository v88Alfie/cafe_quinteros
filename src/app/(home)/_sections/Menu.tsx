"use client";

import React, { useState } from "react";

/** COMPONENTS */
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import MenuCard from "../_components/MenuCard";
import { Container } from "postcss";

interface Menu {
  id: Number;
  menu_name: string;
  name: string;
  description: string;
  price: Number;
  image: string;
  is_best_seller: boolean;
  category: Number;
}

interface MenuSelections {
  name: string;
  value: number;
}

const Menu = () => {
  const menu_selections = [
    {
      name: "All",
      value: 0,
    },
    {
      name: "Desserts",
      value: 1,
    },
    {
      name: "Hot Beverages",
      value: 2,
    },
    {
      name: "Cold Drinks",
      value: 3,
    },
    {
      name: "More Snacks",
      value: 4,
    },
  ];

  const menu_data: Menu[] = [
    {
      id: 1,
      menu_name: "Brownie",
      name: "Brownie",
      description:
        "Rich, fudgy chocolate brownie, chewy and decadent. A chocolate lover's dream, perfect on its own or with a scoop of ice cream!",
      price: 2.5,
      image: "brownie.png",
      is_best_seller: false,
      category: 1,
    },
    {
      id: 2,
      menu_name: "Budin",
      name: "Pudding",
      description:
        "Creamy and indulgent, this delightful pudding is smooth. A comforting treat, it's perfect on its own or topped with fruit!",
      price: 2.0,
      image: "budin.png",
      is_best_seller: false,
      category: 1,
    },
    {
      id: 3,
      menu_name: "Cafe Americano",
      name: "Cafe Americano",
      description:
        "Bold and smooth, this espresso coffee is diluted with hot water for a rich flavor. Perfect for those who enjoy a strong yet balanced cup!",
      price: 2.0,
      image: "cafe_americano.png",
      is_best_seller: false,
      category: 2,
    },
    {
      id: 4,
      menu_name: "Cafe Latte",
      name: "Cafe Latte",
      description:
        "Creamy and rich, this espresso drink combines steamed milk with a light layer of froth. Perfect for those who love a smooth coffee experience!",
      price: 2.5,
      image: "cafe_latte.png",
      is_best_seller: true,
      category: 2,
    },
    {
      id: 5,
      menu_name: "Frappe De Caramelo",
      name: "Caramel Frappé",
      description:
        "Smooth and decadent, this blended caramel beverage is garnished with whipped cream and a caramel drizzle. Ideal for a refreshing treat!",
      price: 2.5,
      image: "frappe_de_caramelo.png",
      is_best_seller: true,
      category: 3,
    },
    {
      id: 6,
      menu_name: "Cappuccino",
      name: "Cappuccino",
      description:
        "This espresso drink features equal parts espresso, steamed milk, and creamy foam. Perfect for those who enjoy a rich coffee experience!",
      price: 2.5,
      image: "cappuccino.png",
      is_best_seller: false,
      category: 2,
    },
    {
      id: 7,
      menu_name: "Crepa de Chocolate Y Banana",
      name: "Chocolate and Banana Crepe",
      description:
        "Creamy and rich, this espresso drink combines steamed milk with a light layer of froth. Perfect for those who love a smooth coffee experience!",
      price: 2.5,
      image: "crepa_de_chocolate.png",
      is_best_seller: true,
      category: 1,
    },
    {
      id: 8,
      menu_name: "Croissant de Jamon Y Queso",
      name: "Ham and Cheese Croissant",
      description:
        "Flaky and buttery, this croissant is stuffed with savory ham and melted cheese. Ideal for a satisfying breakfast or snack!",
      price: 2.5,
      image: "croissant_de_jamon_queso.png",
      is_best_seller: false,
      category: 1,
    },
    {
      id: 9,
      menu_name: "Croissant de Pollo",
      name: "Chicken Croissant",
      description:
        "Buttery and tender, this croissant is filled with juicy chicken and creamy sauce. Perfect for a flavorful lunch or light snack!",
      price: 2.5,
      image: "croissant_de_pollo.png",
      is_best_seller: true,
      category: 1,
    },
    {
      id: 10,
      menu_name: "Flan Napolitano",
      name: "Neapolitan Flan",
      description:
        "This rich caramel custard dessert is delightfully sweet and creamy. A classic treat, perfect for ending any meal on a delicious note!",
      price: 3.5,
      image: "flan_napolitano.png",
      is_best_seller: false,
      category: 1,
    },
    {
      id: 11,
      menu_name: "Flautas De Pollo",
      name: "Chicken Flautas",
      description:
        "Crispy rolled tortillas filled with seasoned chicken, fried to perfection. Served with toppings like salsa and guacamole.",
      price: 2.5,
      image: "flautas_de_pollo.png",
      is_best_seller: false,
      category: 1,
    },
    {
      id: 12,
      menu_name: "Frappe De Caramelo",
      name: "Caramel Frappé",
      description:
        "Smooth and decadent, this blended caramel beverage is garnished with whipped cream and a caramel drizzle. Ideal for a refreshing treat!",
      price: 2.5,
      image: "frappe_de_caramelo.png",
      is_best_seller: false,
      category: 3,
    },
    {
      id: 13,
      menu_name: "Frappe De Mocha",
      name: "Mocha Frappé",
      description:
        "This blended mocha features espresso, chocolate, and milk, with whipped cream and chocolate drizzle. A treat for coffee lovers!",
      price: 3.5,
      image: "frappe_de_mocha.png",
      is_best_seller: false,
      category: 3,
    },
    {
      id: 14,
      menu_name: "Frappe De Oreo",
      name: "Oreo Frappé",
      description:
        "This blended treat combines Oreo cookies, milk, and ice, with whipped cream and cookie crumbles. A delicious dessert for cookie fans!",
      price: 2.5,
      image: "frappe_de_oreo.png",
      is_best_seller: false,
      category: 3,
    },
    {
      id: 15,
      menu_name: "Mini Tartaletas",
      name: "Mini Tarts",
      description:
        "Delightful bite-sized pastries filled with sweet or savory fillings, perfect for appetizers or desserts. Great for parties or as a tasty snack!",
      price: 2.5,
      image: "mini_tartaletas.png",
      is_best_seller: false,
      category: 1,
    },
    {
      id: 16,
      menu_name: "Panini de Jamon Y Queso",
      name: "Ham and Cheese Panini",
      description:
        "This sandwich features layers of savory ham and melted cheese between crispy bread. A delicious choice for a satisfying meal!",
      price: 3.5,
      image: "panini_de_jamon_queso.png",
      is_best_seller: true,
      category: 1,
    },
    {
      id: 17,
      menu_name: "Pizza Peperoni",
      name: "Peperoni Pizza",
      description:
        "This pizza features a crispy crust with tomato sauce, cheese, and flavorful pepperoni slices. Perfect for a casual meal or gathering!",
      price: 2.5,
      image: "pizza_peperoni.png",
      is_best_seller: false,
      category: 1,
    },
    {
      id: 18,
      menu_name: "Refresco De Fresa",
      name: "Strawberry Soda",
      description:
        "A refreshing strawberry soda that combines sweet and fruity flavors, perfect for a cool drink on a warm day!",
      price: 2.5,
      image: "refresco_de_fresa.png",
      is_best_seller: false,
      category: 3,
    },
    {
      id: 19,
      menu_name: "Waffle de Banana, Nuez y Caramelo",
      name: "Banana, Walnut, and Caramel Waffle",
      description:
        "A delicious waffle topped with sweet banana slices, crunchy walnuts, and drizzled with rich caramel. Perfect for a decadent breakfast or dessert!",
      price: 3.5,
      image: "waffle_de_banana.png",
      is_best_seller: true,
      category: 1,
    },
  ];

  const best_sellers = menu_data.filter((menu) => menu.is_best_seller === true);
  const [selected_category, setSelectedCategory] = useState<
    MenuSelections | number
  >(0);

  let selected_menu = menu_data.filter(
    (menu) => menu.category === selected_category
  );

  if (selected_category === 0) {
    selected_menu = menu_data;
  }

  return (
    <section>
      <div className="container mx-0 py-[4rem] bg-gray">
        <div className="md:flex md:flex-col md:items-center">
          <h2 className="text-montserrat_bold_28">Discover Our Menu</h2>
          <p className="text-montserrat_regular_16 text-text/[.6] pt-[1.6rem] leading-[2.56rem]">
            From classic breakfasts to sweet desserts, our menu is filled with
            Salvadoran favorites.
          </p>
        </div>
        <h3 className="text-montserrat_regular_20 py-[1.6rem]">Best Sellers</h3>
        <ol className="flex justify-between flex-col gap-[1.6rem] lg:gap-[3.2rem] lg:flex-row lg:flex-wrap">
          {best_sellers.map((menu) => (
            <li key={menu?.id.toString()} className="lg:max-w-[37.8rem]">
              <MenuCard menu={menu} />
            </li>
          ))}
        </ol>
        <ScrollArea className="w-full py-[4rem]">
          <ol className="flex gap-[2.4rem] text-montserrat-20 text-text/[.4] whitespace-nowrap">
            {menu_selections.map((selection) => (
              <li
                key={selection.value}
                onClick={() => setSelectedCategory(selection.value)}
                className={`cursor-pointer ${
                  selected_category === selection.value ? "selected_menu" : ""
                }`}
              >
                {selection.name}
              </li>
            ))}
          </ol>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <ol className="flex justify-between flex-col gap-[1.6rem] lg:gap-[3.2rem] lg:flex-row lg:flex-wrap">
          {selected_menu.map((menu) => (
            <li key={menu?.id.toString()} className="lg:max-w-[37.8rem]">
              <MenuCard menu={menu} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Menu;
