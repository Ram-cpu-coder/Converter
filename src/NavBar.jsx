import React, { useEffect, useState } from "react";
import { Navbar } from "flowbite-react";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleOnResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleOnResize);

    return () => {
      window.removeEventListener("resize", handleOnResize);
    };
  }, []);

  return (
    <Navbar fluid rounded className="relative">
      <Navbar.Brand href="/">
        <img
          src="/assets/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Converters Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Converters
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />

      {windowWidth < 768 ? (
        <Navbar.Collapse className="absolute top-[55px] left-0 border z-50 bg-[white]">
          <Navbar.Link href="/">Home</Navbar.Link>

          <Navbar.Link href="/services">Converters</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      ) : (
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>

          <Navbar.Link href="/services">Converters</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
};

export default NavBar;
