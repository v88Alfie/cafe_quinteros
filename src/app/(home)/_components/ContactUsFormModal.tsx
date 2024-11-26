"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

const ContactFormSchema = z.object({
  full_name: z.string().min(2, {
    message: "Please provide a valid full name.",
  }),
  whatsapp_number: z.string().min(9, {
    message: "Please provide a valid WhatsApp number.",
  }),
  message: z.string(),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

const ContactUsFormModal = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = handleSubmit((data) => {
    setIsOpen(false);

    toast({
      description:
        "Your message has been sent! We’ll get back to you within 24 hours.",
    });
    reset();
    console.log("submitting data:", data);
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="text-montserrat_bold_16 bg-primary rounded-lg h-full w-full">
        <span className="text-white">Contact Us</span>
      </DialogTrigger>
      <DialogContent className="p-[3.2rem] bg-white rounded-lg md:max-w-2xl">
        <DialogHeader className="flex flex-col gap-[1.6rem]">
          <DialogTitle className="text-montserrat_bold_24">
            Contact Café Quinteros
          </DialogTitle>
          <DialogDescription className="text-montserrat_regular_14 text-xl text-text/[.6]">
            Have questions or need help? Feel free to reach out to us. We’re
            here to assist you and will reply within 24 hours!
          </DialogDescription>
          <DialogDescription className="text-montserrat_regular_14 text-xl text-text/[.6]">
            For faster communication, you can contact us on WhatsApp using this
            <span className="text-primary font-bold"> +503 6925 6177</span>.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-[2.4rem] mt-[1.6rem] relative w-full"
        >
          <div className="relative">
            <Input
              type="text"
              id="full_name"
              placeholder=" "
              className="text-montserrat_regular_14"
              {...register("full_name")}
            />
            <label
              htmlFor="full_name"
              className={`absolute left-[1.75rem] transition-all duration-200 ease-in-out ${
                !watch("full_name")
                  ? "top-[1.5rem] text-gray-400"
                  : "top-2.5 text-sm"
              } peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-primary`}
            >
              Full name*
            </label>
            {errors && (
              <p className="text-montserrat_regular_14 text-[#C15F56] mt-[0.8rem]">
                {errors.full_name?.message}
              </p>
            )}
          </div>
          <div className="relative">
            <Input
              type="text"
              id="whatsapp_number"
              placeholder=" "
              className="text-montserrat_regular_14"
              {...register("whatsapp_number")}
            />
            <label
              htmlFor="whatsapp_number"
              className={`absolute left-[1.75rem] transition-all duration-200 ease-in-out ${
                !watch("whatsapp_number")
                  ? "top-[1.5rem] text-gray-400"
                  : "top-2.5 text-sm"
              } peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-primary`}
            >
              WhatsApp number*
            </label>
            {errors && (
              <p className="text-montserrat_regular_14 text-[#C15F56] mt-[0.8rem]">
                {errors.whatsapp_number?.message}
              </p>
            )}
          </div>
          <div className="relative w-pull">
            <textarea
              id="message"
              {...register("message")}
              className="peer bg-gray w-full h-[14rem] border rounded-lg p-[1.6rem] border-[#060808]/[0.28] text-[#060808]/[0.6] text-montserrat_regular_14 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
            <label
              htmlFor="message"
              className={`absolute w-full left-[1.75rem] top-2.5 text-[#060808]/[0.6] text-montserrat_regular_14 h-full transition-all duration-200 ease-in-out ${
                !watch("message")
                  ? "top-[1.5rem] text-gray-400"
                  : "top-2.5 text-sm"
              } peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-primary`}
            >
              How can we help you?
            </label>
          </div>
          <p className="text-[#060808]/[0.6] text-montserrat_regular_14">
            By submitting this form, you agree to our{" "}
            <Link className="text-text" href={"/"}>
              Privacy Policy and Site Terms
            </Link>
            .
          </p>
          <Button type="submit" className="mt-[2.4rem] w-full h-[5.2rem]">
            <span className="text-montserrat_bold_16 text-white">Submit</span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUsFormModal;
