import { useState } from "react";
import logo from "../../assets/logo.png";
import { Button } from "../button";
import { MobileMenu } from "./mobile-menu";
import NavMenu from "./nav-menu";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const solutions = [
    {
      href: "/solution-1",
      label: "Solution 1",
    },
    {
      href: "/solution-2",
      label: "Solution 2",
    },
    {
      href: "/solution-3",
      label: "Solution 3",
    },
  ];

  const features = [
    {
      href: "/feature-1",
      label: "Feature 1",
    },
    {
      href: "/feature-2",
      label: "Feature 2",
    },
    {
      href: "/feature-3",
      label: "Feature 3",
    },
  ];

  const about = [
    {
      href: "/about-1",
      label: "About 1",
    },
    {
      href: "/about-2",
      label: "About 2",
    },
    {
      href: "/about-3",
      label: "About 3",
    },
  ];

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("nav").style.background = "white";
      document.getElementById("nav").style.boxShadow =
        "0px 2px 2px rgba(0, 0, 0, 0.025)";
      document.getElementById("nav").style.transition = "all 0.3s ease-in-out";
    } else {
      document.getElementById("nav").style.background = "transparent";
      document.getElementById("nav").style.boxShadow = "none";
    }
  }

  return (
    <nav
      id="nav"
      className="fixed z-[100] w-full flex items-center h-[80px] px-6 gap-3"
    >
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <div className="hidden md:flex">
        {/* solutions menu */}
        <NavMenu links={solutions} title="Solutions" />
        {/* features menu */}
        <NavMenu links={features} title="Features" />
        {/* about menu */}
        <NavMenu links={about} title="About" />
      </div>
      <div className="ml-auto hidden md:flex gap-2">
        <Button>Login</Button>
        <Button variant={"primary"}>Register</Button>
      </div>

      <div className="md:hidden ml-auto">
        <MobileMenu setIsMenuOpen={setIsMenuOpen} />
      </div>

      {
        // mobile menu
        isMenuOpen && (
          <div className="md:hidden absolute top-[80px] left-0 w-full bg-white">
            <div className="flex flex-col items-end bg-zinc-200 gap-2 p-6">
              {/* solutions menu */}
              <NavMenu links={solutions} title="Solutions" />
              {/* features menu */}
              <NavMenu links={features} title="Features" />
              {/* about menu */}
              <NavMenu links={about} title="About" />
              <Button className={"w-full"}>Login</Button>
              <Button className={"w-full"} variant={"primary"}>
                Register
              </Button>
            </div>
          </div>
        )
      }
    </nav>
  );
};
