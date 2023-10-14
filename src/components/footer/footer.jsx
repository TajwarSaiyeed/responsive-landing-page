import logo from "../../assets/logo.png";
import FooterLinks from "./footer-links";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export const Footer = () => {
  const footerLinksCompany = [
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/pricing",
      label: "Pricing",
    },
    {
      href: "/careers",
      label: "Careers",
    },
  ];

  const footerLinksSolutions = [
    {
      href: "/search",
      label: "Search",
    },
    {
      href: "/connect",
      label: "Connect",
    },
    {
      href: "/research",
      label: "Research",
    },
    {
      href: "/academy",
      label: "Academy",
    },
  ];

  const footerLinksResources = [
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/forms",
      label: "Forms",
    },
  ];

  const footerLinksSupport = [
    {
      href: "/help",
      label: "Help",
    },
    {
      href: "/contact-us",
      label: "Contact Us",
    },
  ];

  const footerLinksLegal = [
    {
      href: "/privacy",
      label: "Privacy",
    },
    {
      href: "/terms",
      label: "Terms",
    },
  ];

  return (
    <>
      <footer className="bg-gradient-to-b md:bg-gradient-to-r from-[#0600CE] to-[#9400D3] md:px-10 md:py-7 p-5">
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0  ">
          <div className="flex gap-2 flex-col">
            <img src={logo} alt="" className="invert max-w-[138px]" />
            <p className="max-w-[250px] text-white text-xs">
              India&apos;s first platform dedicated to simplifying partner
              search
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly w-full space-y-5 md:space-y-0">
            <FooterLinks links={footerLinksCompany} title="Company" />
            <FooterLinks links={footerLinksSolutions} title="Solutions" />
            <FooterLinks links={footerLinksResources} title="Resources" />
            <FooterLinks links={footerLinksSupport} title="Support" />
            <FooterLinks links={footerLinksLegal} title="Legal" />
          </div>
        </div>

        <div className="my-5 bg-white h-[1px] w-full rounded-full" />
        <div className="flex items-center justify-between">
          <p className="text-white text-xs">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </p>
          <div className="flex gap-5">
            <FaFacebook className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <FaInstagram className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <FaLinkedinIn className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
        </div>
      </footer>

      <p className="bg-black text-xs px-6 py-3 text-center text-white">
        Registered trademark of India Private Limited © 2023 loerumipsum Inc.
        All Rights Reserved
      </p>
    </>
  );
};
