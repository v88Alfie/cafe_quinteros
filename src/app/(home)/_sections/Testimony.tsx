"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

/** Components */
import { Card, CardContent } from "@/components/ui/card";

const Testimony = () => {
  const user_testimonies = [
    {
      id: 1,
      user_name: "María Ángeles Córdova",
      message: "Delicious freshly prepared breakfast, affordable price",
      user_image: "maria_angeles_cordova.png",
      rating: 5,
      posted_on: "google.png",
    },
    {
      id: 2,
      user_name: "Jennifer Luna",
      message:
        "Everyone should at least taste and try Cafe Quinteros in their lifetime. It’s such a shame if you don’t!",
      user_image: "jennifer_luna.png",
      rating: 5,
      posted_on: "google.png",
    },
    {
      id: 3,
      user_name: "Gilbert Clars",
      message: "Food: 5\nService: 5\nAtmosphere: 5",
      user_image: "gilbert_clars.png",
      rating: 5,
      posted_on: "google.png",
    },
    {
      id: 4,
      user_name: "Fitz Gerald",
      message: "Superb services and food",
      user_image: "gilbert_clars.png",
      rating: 5,
      posted_on: "google.png",
    },
    {
      id: 5,
      user_name: "BlongBlong Marces",
      message: "Good food",
      user_image: "gilbert_clars.png",
      rating: 3,
      posted_on: "google.png",
    },
    {
      id: 6,
      user_name: "Marío Córdova",
      message: "Delicious freshly prepared breakfast, affordable price",
      user_image: "maria_angeles_cordova.png",
      rating: 4,
      posted_on: "google.png",
    },
    {
      id: 7,
      user_name: "Jennifer Luna",
      message:
        "Everyone should at least taste and try Cafe Quinteros in their lifetime. It’s such a shame if you don’t!",
      user_image: "jennifer_luna.png",
      rating: 5,
      posted_on: "google.png",
    },
  ];
  const [testimonies, setTestimonies] = useState(user_testimonies);

  const setRating = (rating: number) => {
    const stars = [];

    for (let index = 1; index <= 5; index++) {
      stars.push(
        <span
          key={index}
          className={
            index <= rating
              ? "text-montserrat-16 text-[#FFD700]"
              : "text-montserrat-16 text-[#E0E0E0]"
          }
        >
          ★
        </span>
      );
    }

    return <div className="flex gap-[.3rem]">{stars}</div>;
  };

  useEffect(() => {
    const updateItemsForMobile = () => {
      if (window.matchMedia("(max-width: 767px)").matches) {
        setTestimonies(user_testimonies);
      } else {
        setTestimonies([...user_testimonies, ...user_testimonies]);
      }
    };

    updateItemsForMobile();
    window.addEventListener("resize", updateItemsForMobile);

    return () => {
      window.removeEventListener("resize", updateItemsForMobile); // Cleanup
    };
  }, []);

  return (
    <section>
      <div className="container mx-0 w-full bg-gray lg:px-[10rem] xl:px-[12rem]">
        <div className="py-[4rem] px-[1.6rem]">
          <h2 className="text-montserrat-28 font-bold md:text-[4rem] md:m-auto md:w-[80%] md:text-center lg:text-[4.6rem]">
            Words From Our Customers
          </h2>
          <h3 className="text-montserrat-16 leading-[2.56rem] text-text/[.6] pt-[1.6rem] md:m-auto md:w-[80%] md:text-center">
            Our customers love our food and friendly vibe! Discover why we’re
            the top choice for El Salvadoran breakfast and lunch.
          </h3>
          <div className="md:overflow-hidden md:flex">
            <ul className="flex flex-col gap-[3.2rem] pt-[4rem] md:flex-row md:animate-infinite-scroll">
              {testimonies.map((testimony, index) => (
                <li key={index}>
                  <Card className="min-h-[30rem] md:min-w-[38rem] p-[2.4rem] hover:border-[#995B1A]">
                    <CardContent className="flex flex-col gap-[2.4rem] p-0 ">
                      <div className="flex gap-[1.6rem] items-center">
                        <Image
                          className="rounded-t-[1.6rem] w-[8rem] h-[8rem]"
                          src={`/images/${testimony.user_image}`}
                          alt={testimony.user_name}
                          width={30}
                          height={20}
                        />
                        <div>
                          <h4 className="text-montserrat-16 leading-[2.56rem] font-bold">
                            {testimony.user_name}
                          </h4>
                          <div className="flex items-center gap-[.8rem] ">
                            <p className="text-montserrat-16 leading-[3.2rem] font-bold">
                              {testimony.rating.toFixed(1)}
                            </p>
                            {setRating(testimony.rating)}
                          </div>
                        </div>
                      </div>
                      <p className="text-montserrat-18 leading-[2.88rem] text-text/[.6] break-all">
                        {testimony.message}
                      </p>
                      <div className="flex gap-[1.6rem] items-center">
                        <p className="text-montserrat-18 leading-[2.88rem] text-text/[.6]">
                          Posted on
                        </p>
                        <Image
                          className="rounded-t-[1.6rem] w-[6.5rem] h-[2.4rem]"
                          src={`/images/${testimony.posted_on}`}
                          alt={testimony.posted_on}
                          width={30}
                          height={20}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
