import { useState } from "react";
// import productsData from "../public/data";

export default function Navbar() {
    const [search, setSearch] = useState("");

    return (
      <nav className="bg-[#191a1f] p-1 flex sticky top-0 z-10">
        {/* Icon Menu */}
        <svg
          className="m-2"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 50 50"
          fill="#FFFFFF"
        >
          <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
        </svg>
  
        {/* Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 48 48"
        >
          <linearGradient
            id="logoGradient"
            x1="18.875"
            x2="29.125"
            y1="38.725"
            y2="9.275"
            gradientTransform="rotate(-10.936 24 24.001)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#92a3b0"></stop>
            <stop offset=".336" stopColor="#a3b5c4"></stop>
            <stop offset=".686" stopColor="#aec2d1"></stop>
            <stop offset="1" stopColor="#b2c6d6"></stop>
          </linearGradient>
          <path
            fill="url(#logoGradient)"
            d="M40.533,13.758L14.727,6.905c-0.424-0.113-0.856,0.138-0.969,0.562L6.905,33.273	c-0.113,0.424,0.138,0.856,0.562,0.969l25.806,6.853c0.424,0.113,0.856-0.138,0.969-0.562l6.853-25.806	C41.208,14.303,40.957,13.871,40.533,13.758z M27.643,22.025l-1.46,5.496c-0.023,0.087-0.122,0.144-0.209,0.121l-5.496-1.46	c-0.087-0.023-0.144-0.122-0.121-0.209l1.46-5.496c0.023-0.087,0.122-0.144,0.209-0.121l5.496,1.46	C27.609,21.84,27.666,21.938,27.643,22.025z"
          ></path>
        </svg>
  
        {/* Menu List */}
        <ol className="text-white font-medium pl-8 flex gap-18 items-center">
          <li>Charts</li>
          <li>Marketplace</li>
          <li>Create</li>
          <li>Robux</li>
        </ol>

        <input type="text" placeholder="Search" className="ml-2 border-2 border-amber-50" value={search} onChange={e => setSearch(e.target.value)}/>
      </nav>
    );
  }