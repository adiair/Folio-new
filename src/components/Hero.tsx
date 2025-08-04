import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";

const Socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adityakokashe",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    url: "https://github.com/adiair",
    icon: FiGithub,
  },
  {
    name: "Twitter",
    url: "https://x.com/adiair.twt",
    icon: FaXTwitter,
  },
  {
    name: "Email",
    url: "mailto:adi310kokashe@gmail.com",
    icon: MdMailOutline,
  },
  { 
    name: "Resume",
    url: "https://drive.google.com/file/d/1zImOgASC-GZbjyS3HQ1Rfa1PuFzlh4ow/view",
    icon: TbFileCv,
  },
];

export default function Hero() {
  return (
    <div className="flex flex-col p-3 gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl   tracking-tighter max-md:text-4xl">
          Hi, I&apos;m Aditya{" "}
        </h1>
        <p className="text-lg ml-1 tracking-tight text-gray-500 max-md:leading-tight">
          frontend backend UI/UX
        </p>
      </div>
      <div className="flex gap-4  ">
        {Socials.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            target="_blank"
            className="transition-colors duration-300 flex items-center gap-2"
          >
            <span className="group flex items-center text-gray-300 hover:text-gray-50 border px-2 py-1 border-dashed border-gray-800 hover:bg-gray-800/30">
              <social.icon/>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
