"use client";

import React from "react";
import Image from "next/image";

/** PLUGINS */
import { z } from "zod";

/** UI COMPONENTS */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const JoinCommunity = () => {
  const FormSchema = z.object({
    whatsapp_number: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  const bg_style = {
    backgroundImage: `linear-gradient(rgba(76, 42, 7, .9), rgba(76, 42, 7, .9)), url("/images/map_image.png")`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
  };

  return (
    <section style={bg_style}>
      <div className="container py-[4rem] px-[1.6rem] md:p-[4rem] lg:p-[10rem] xl:p-[12rem]">
        <div className="xl:flex xl:gap-[8rem] xl:items-center">
          <div className="xl:flex flex-col">
            <h2 className="text-montserrat_bold_24 text-white md:text-[4rem] lg:text-[4.6rem] lg:leading-[5.8rem]">
              Join Our Cafe Community
            </h2>
            <h3 className="text-montserrat_regular_16 leading-[2.56rem] text-white/[.6] pt-[1.6rem] lg:text-[2rem] lg:leading-[3.2rem]">
              Get daily breakfast and lunch specials! Please provide us your
              WhatsApp number.
            </h3>
            <form className="flex flex-col gap-[1.6rem] pt-[4.8rem] md:flex-row">
              <Input
                className="h-[6.4rem] text-montserrat_regular_16 p-[1.6rem] rounded-lg bg-white"
                type="text"
                placeholder="WhatsApp number*"
              />
              <Button className="w-full h-[6.4rem] rounded-lg md:w-[17rem] md:px-[1.6rem]">
                <span className="text-montserrat_bold_16 text-white">
                  Join Community
                </span>
              </Button>
            </form>
          </div>
          <Image
            className="rounded-lg pt-[8rem] md:w-full md:max-h-[41rem] xl:max-w-[47rem] xl:p-0"
            src={`/images/map.png`}
            alt="Map"
            width={352}
            height={410}
          />
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
