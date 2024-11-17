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
      <DialogTrigger className="text-montserrat-16 font-bold bg-primary rounded-lg h-full w-full">
        <span className="text-white">Contact Us</span>
      </DialogTrigger>
      <DialogContent className="p-[3.2rem] bg-white rounded-lg md:max-w-2xl">
        <DialogHeader className="flex flex-col gap-[1.6rem]">
          <DialogTitle className="text-montserrat-24 font-bold">
            Contact Café Quinteros
          </DialogTitle>
          <DialogDescription className="text-montserrat-14 text-xl text-text/[.6]">
            Have questions or need help? Feel free to reach out to us. We’re
            here to assist you and will reply within 24 hours!
          </DialogDescription>
          <DialogDescription className="text-montserrat-14 text-xl text-text/[.6]">
            For faster communication, you can contact us on WhatsApp using this
            <span className="text-primary font-bold"> +503 6925 6177</span>.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-[2.4rem] mt-[1.6rem] relative w-full"
        >
          <div className="relative">
            <input
              type="text"
              id="full_name"
              placeholder=" "
              {...register("full_name")}
              className="peer bg-gray w-full border border-[#060808]/[0.28] h-[4.8rem] text-montserrat-14 rounded-lg px-3 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
            <label
              htmlFor="full_name"
              className="absolute left-3 top-2.5 text-[#060808]/[0.6] text-montserrat-14 h-full transition-all duration-200 ease-in-out peer-placeholder-shown:top-[1.5rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:pt-0 peer-focus:top-2.5 peer-focus:text-sm peer-not-placeholder-shown:top-2.5"
            >
              Full name*
            </label>
            {errors && (
              <p className="text-montserrat-14 text-[#C15F56] mt-[0.8rem]">
                {errors.full_name?.message}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              id="whatsapp_number"
              placeholder=" "
              {...register("whatsapp_number")}
              className="peer bg-gray w-full  border border-[#060808]/[0.28] h-[4.8rem] text-montserrat-14 rounded-lg px-3 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
            <label
              htmlFor="whatsapp_number"
              className="absolute left-3 top-2.5 text-[#060808]/[0.6] text-montserrat-14 h-full transition-all duration-200 ease-in-out peer-placeholder-shown:top-[1.5rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:pt-0 peer-focus:top-[0.5rem] peer-focus:text-sm"
            >
              WhatsApp number*
            </label>
            {errors && (
              <p className="text-montserrat-14 text-[#C15F56] mt-[0.8rem]">
                {errors.whatsapp_number?.message}
              </p>
            )}
          </div>
          <div className="relative  w-pull">
            <textarea
              id="message"
              {...register("message")}
              className="peer bg-gray w-full h-[14rem] border rounded-lg p-[1.6rem] border-[#060808]/[0.28] text-[#060808]/[0.6] text-montserrat-14 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
            <label
              htmlFor="message"
              className="absolute w-full left-3 top-2.5 text-[#060808]/[0.6] text-montserrat-14 h-full transition-all duration-200 ease-in-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:pt-0 peer-focus:top-2.5 peer-focus:text-sm"
            >
              How can we help you?
            </label>
          </div>
          <p className="text-[#060808]/[0.6] text-montserrat-14">
            By submitting this form, you agree to our{" "}
            <Link className="text-text" href={"/"}>
              Privacy Policy and Site Terms
            </Link>
            .
          </p>
          <Button type="submit" className="mt-[2.4rem] w-full h-[5.2rem]">
            <span className="text-montserrat-16 font-bold text-white">
              Submit
            </span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUsFormModal;
