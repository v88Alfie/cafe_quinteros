import React from "react";

/** UI COMPONENTS */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const questions = [
  {
    id: 1,
    question: "Can I book a table in advance?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 2,
    question: "",
    answer: "",
  },
  {
    id: 3,
    question: "",
    answer: "",
  },
  {
    id: 4,
    question: "",
    answer: "",
  },
  {
    id: 5,
    question: "",
    answer: "",
  },
  {
    id: 6,
    question: "",
    answer: "",
  },
  {
    id: 7,
    question: "",
    answer: "",
  },
  {
    id: 2,
    question: "",
    answer: "",
  },
];

const FrequentlyAskedQuestions = () => {
  return (
    <section>
      <div className="container mx-0 py-[4rem]">
        <h2 className="flex text-montserrat_bold_28 md:m-auto md:justify-center">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-[2rem] w-full pt-[4rem]"
        >
          <Card className="bg-gray border-none">
            <CardContent className="flex flex-col gap-[2.4rem] pt-6">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-montserrat_bold_16 leading-[2.58rem]">
                  Can I book a table in advance?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-montserrat_regular_14 text-text/[.6] pt-[2.8rem] leading-[2.2rem]">
                    Absolutely! Just contact us on WhatsApp using this number
                    <span className="text-primary font-bold">
                      +503-6925-6177
                    </span>{" "}
                    for reservations.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
          <Card className="bg-gray border-none">
            <CardContent className="flex flex-col gap-[2.4rem] pt-6">
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-montserrat_bold_16 leading-[2.58rem]">
                  Can I make a reservation after hours?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-montserrat_regular_14 text-text/[.6] pt-[2.8rem] leading-[2.2rem]">
                    Yes! You must reach out to us via WhatsApp (
                    <span className="text-primary font-bold">
                      +503-6925-6177
                    </span>
                    ) for final confirmation.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
          <Card className="bg-gray border-none">
            <CardContent className="flex flex-col gap-[2.4rem] pt-6">
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-montserrat_bold_16 leading-[2.58rem]">
                  Is there a parking space available?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-montserrat_regular_14 text-text/[.6] pt-[2.8rem] leading-[2.2rem]">
                    Yes. We have a parking area exclusively available for our
                    customers!
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
          <Card className="bg-gray border-none">
            <CardContent className="flex flex-col gap-[2.4rem] pt-6">
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-montserrat_bold_16 leading-[2.58rem]">
                  Do you have a free Wi-Fi for customers?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-montserrat_regular_14 text-text/[.6] pt-[2.8rem] leading-[2.2rem]">
                    We do have a free Wi-Fi available exclussively for
                    customers. It’s fast enough for you to work from our café!
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
          <Card className="bg-gray border-none">
            <CardContent className="flex flex-col gap-[2.4rem] pt-6">
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-montserrat_bold_16 leading-[2.58rem]">
                  Is the café pet-friendly?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-montserrat_regular_14 text-text/[.6] pt-[2.8rem] leading-[2.2rem]">
                    Yes, we welcome pets! Just make sure they don’t disturb
                    other customers or damage anything.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
          <Card className="bg-gray border-none">
            <CardContent className="flex flex-col gap-[2.4rem] pt-6">
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-montserrat_bold_16 leading-[2.58rem]">
                  Do you sell coffee beans?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-montserrat_regular_14 text-text/[.6] pt-[2.8rem] leading-[2.2rem]">
                    Yes! Simply reach out via WhatsApp (
                    <span className="text-primary font-bold">
                      +503-6925-6177
                    </span>
                    ) and let us know how many pounds you would like, and if you
                    would like us to grind it. We can grind from extra fine to
                    coarse.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
          <Card className="bg-gray border-none">
            <CardContent className="flex flex-col gap-[2.4rem] pt-6">
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-montserrat_bold_16 leading-[2.58rem]">
                  Do you take special requests?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-montserrat_regular_14 text-text/[.6] pt-[2.8rem] leading-[2.2rem]">
                    Absolutely! If you have a special event, we can make special
                    accommodations and special orders. Reach out to us via
                    WhatsApp (
                    <span className="text-primary font-bold">
                      +503-6925-6177
                    </span>
                    ) to make all the arrangements.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
        </Accordion>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
