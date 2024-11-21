"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/images/cafe_quinteros_logo2.png";
import TextLogo from "../public/images/cafe_quinteros_text_logo.png";
import MenuIcon from "../public/images/menu_icon.png";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import ContactUsFormModal from "@/app/_components/home/ContactUsFormModal";

const languages = [
  {
    language: "Spanish",
    flag: "spanish.png",
  },
  {
    language: "English",
    flag: "english.png",
  },
  {
    language: "French",
    flag: "french.png",
  },
];

const NavBar = () => {
  const [selected_language, setLanguage] = useState("spanish.png");
  return (
    <nav className="fixed w-full bg-white top-0 left-0 py-[1.6rem] px-[1.6rem] flex items-center justify-between md:py-[3.2rem] md:px-[4rem] lg:px-[10rem] xl:px-[12rem]">
      <div className="flex items-center gap-[1.6rem]">
        <Link href="/">
          <Image src={Logo} width={48} height={48} alt="Cafe Quinteros Logo" />
        </Link>
        <Image
          className="w-[100%] h-[1.5rem] hidden md:block"
          src={TextLogo}
          alt="Cafe Quinteros Logo"
        />
      </div>
      <div className="flex justify-center gap-[3.2rem] items-center">
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex gap-[3.2rem] text-montserrat-16">
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink className="text-text">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/visit-us" legacyBehavior passHref>
                <NavigationMenuLink className="text-text">
                  Visit Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="relative outline-none">
            <Image
              className=""
              src={require(`../public/images/${selected_language}`)}
              alt={"test"}
            />
            <Image
              className="absolute right-[-1.2rem] bottom-0"
              src={require(`../public/images/down_icon.png`)}
              alt={"test"}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col p-[.8rem] pl-[.4rem] gap-[.8rem] w-[12rem] rounded-lg">
            <DropdownMenuRadioGroup
              value={selected_language}
              onValueChange={setLanguage}
            >
              {languages.map((language) => (
                <DropdownMenuRadioItem
                  className="flex text-montserrat-16 pl-[.2rem] gap-2 justify-start"
                  key={language.language}
                  value={language.flag}
                >
                  <Image
                    className=""
                    src={require(`../public/images/${language.flag}`)}
                    alt={"test"}
                  />
                  <span
                    className={
                      selected_language === language.flag
                        ? "text-text"
                        : "text-text/[.6]"
                    }
                  >
                    {language.language}
                  </span>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Menubar className="lg:hidden">
          <MenubarMenu>
            <MenubarTrigger className="focus:outline-none data-[state=open]:bg-transparent p-0">
              <Image src={MenuIcon} alt="Cafe Quinteros Logo" />
            </MenubarTrigger>
            <MenubarContent className="flex flex-col justify-items-center p-[.8rem] gap-[2rem]">
              <MenubarItem>
                <span className="text-montserrat-16 leading-[1.9rem] text-text/[0.6]">
                  Home
                </span>
              </MenubarItem>
              <MenubarItem>
                <span className="text-montserrat-16 leading-[1.9rem] text-text/[0.6]">
                  About Us
                </span>
              </MenubarItem>
              <MenubarItem>
                <span className="text-montserrat-16 leading-[1.9rem] text-text/[0.6]">
                  Visit Us
                </span>
              </MenubarItem>
              <div className="w-[18rem] h-[6.4rem]">
                <ContactUsFormModal />
              </div>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <div className="hidden lg:block w-[14rem] h-[4.8rem]">
          <ContactUsFormModal />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
