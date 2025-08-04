import Link from "next/link";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="flex flex-col  gap-3">
      <h2 className="text-md">Get in Touch</h2>
      <p className="text-gray-500 font-mono tracking-tighter font-medium">
        Let&apos;s connect!.
      </p>
      <Link
        href={"mailto:adi310kokashe@gmail.com"}
        className="flex items-center justify-center border w-fit p-2 text-lg gap-2 mx-auto my-3 border-gray-700 text-gray-300 font-mono tracking-tight hover:bg-gray-700/20 px-4"
      >
        <MdOutlineEmail className="inline" size={25} /> Contact Me
      </Link>
    </div>
  );
}
