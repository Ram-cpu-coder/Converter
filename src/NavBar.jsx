import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar fluid rounded>
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
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>

        <Navbar.Link href="/services">Services</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
