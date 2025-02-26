import { useState } from "react";
import Intiva from "../../assets/intivaLogo.png";
import dudul from "../../assets/dudul.jpg";

const ancDumms = [
  {
    nama: "Intiva Fitness",
    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tgl: "23 Jun 2025",
    tags: ["Sport"],
    image: dudul,
  },
  {
    nama: "Programmer Meeting",
    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tgl: "23 Jun 2025",
    tags: ["JS", "Data"],
    image: dudul,
  },
  {
    nama: "Family Gathering",
    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tgl: "25 Jun 2025",
    tags: ["Gatherting", "Happy"],
    image: dudul,
  },
  {
    nama: "Sharing Section",
    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tgl: "28 Jun 2025",
    tags: ["Sharing", "Smile"],
    image: dudul,
  },
  {
    nama: "Mengaji",
    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tgl: "28 Jun 2025",
    tags: ["Pray"],
    image: dudul,
  },
  {
    nama: "Intiva Fitness",
    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tgl: "29 Jun 2025",
    tags: ["Sport"],
    image: dudul,
  },
];

export default function DashboardAdmin() {
  const [search, setSearch] = useState("");
  const [showAll] = useState(false);

  // filter untuk search bar di up next
  const filtered = ancDumms.filter(
    (anc) =>
      anc.nama.toLowerCase().includes(search.toLowerCase()) ||
      anc.deskripsi.toLowerCase().includes(search.toLowerCase()) ||
      anc.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );
  const maxVisible = 4;
  const displayedNext = showAll ? filtered : filtered.slice(0, maxVisible);

  return (
    <div className="h-screen w-full bg-gray-100 gap-8 p-5 px-7 font-[Poppins] flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-2/12 flex flex-col gap-3">
        <div className="border border-gray-200 shadow-lg rounded-2xl bg-white h-4/6 p-4">
          <div className="flex gap-2 items-center">
            <img src={Intiva} alt="Logo" className="w-10" />
            <div>
              <h1 className="text-sm font-semibold">Intiva</h1>
              <p className="text-sm font-semibold">Announcement</p>
            </div>
          </div>
          <ul className="text-sm mt-7">
            <li className="flex gap-3">Dashboard</li>
            <li className="flex gap-3 mt-3">Announcement</li>
          </ul>

          <button>Tes</button>
        </div>

        {/* profile preview */}
        <div className="shadow-lg rounded-2xl bg-white h-auto lg:h-2/6 flex flex-col lg:flex-col items-center justify-center p-4">
          <div className="flex flex-row gap-2 lg:flex-col lg:items-center">
            <img
              src={dudul}
              alt=""
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
            />
            <div className="text-start lg:text-center">
              <h2 className="text-sm font-semibold mt-2">Muhammad Sumbul</h2>
              <p className="text-xs text-gray-500">Programmer</p>
            </div>
          </div>
          <button className="w-full lg:w-auto mt-4 text-red-500 border border-red-500 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-red-500 hover:text-white transition duration-200">
            Log Out
          </button>
        </div>
      </div>

      {/* Isi dashboard */}
      <div className="w-full lg:w-10/12 flex flex-col gap-3">
        {/* hiro */}
        <div className="bg-[#FBA518] h-1/6 rounded-2xl shadow-lg flex flex-col justify-center p-7">
          <h1 className="font-semibold text-white text-3xl">
            Welcome, Sumbul !
          </h1>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 h-5/6">
          {/* Today's Announcement */}
          <div className="w-full lg:w-2/4 flex flex-col gap-3">
            <div className="relative h-3/4 bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-4 bg-red-600 rounded-t-2xl"></div>
              <div className="flex flex-col">
                <h2 className="font-semibold text-lg border-b border-gray-500 py-2">
                  Today's Announcement
                </h2>
                <h3 className="mt-2 font-semibold lg:text-2xl">Meeting Programmer</h3>
                <p className="text-sm text-gray-600 lg:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit 
                </p>
                <div className="flex gap-2 mt-2">
                  <span className="bg-orange-200 text-orange-700 px-3 py-1 text-xs rounded-full">
                    Sport
                  </span>
                  <span className="bg-orange-200 text-orange-700 px-3 py-1 text-xs rounded-full">
                    JS
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="">
                  <img
                    src={dudul}
                    alt=""
                    className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
                  />
                </div>
                <div className="pl-2">
                  <h2 className="text-sm font-semibold">Muhammad Sumbul</h2>
                  <p className="text-xs text-gray-500">Programmer</p>
                </div>
              </div>
            </div>

            {/* new member */}
            <div className="h-1/4 bg-cyan-600 rounded-2xl items-center shadow-lg flex justify-between p-4">
              <div className="p-2 text-white">
                <h1 className="text-lg lg:text-2xl font-medium">New Member</h1>
                <p className="text-xs lg:text-md font-light">
                  Adding new member to your division
                </p>
              </div>
              <svg
                width="90"
                height="90"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pr-10 text-white hover:text-gray-300 transition duration-100 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50 92.3423C73.385 92.3423 92.3423 73.385 92.3423 50C92.3423 26.615 73.385 7.65766 50 7.65766C26.615 7.65766 7.65766 26.615 7.65766 50C7.65766 73.385 26.615 92.3423 50 92.3423ZM50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM45.4955 27.928C45.4955 25.4402 47.5122 23.4235 50 23.4235C52.4878 23.4235 54.5045 25.4402 54.5045 27.928V45.4955H71.6216C74.1094 45.4955 76.1261 47.5122 76.1261 50C76.1261 52.4878 74.1094 54.5045 71.6216 54.5045H54.5045V71.6217C54.5045 74.1094 52.4878 76.1262 50 76.1262C47.5122 76.1262 45.4955 74.1094 45.4955 71.6217V54.5045H27.9279C25.4402 54.5045 23.4234 52.4878 23.4234 50C23.4234 47.5122 25.4402 45.4955 27.9279 45.4955H45.4955V27.928Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          {/* Up Next */}
          <div className="w-full lg:w-2/4 bg-white shadow-lg rounded-2xl overflow-scroll overflow-x-hidden">
            <div className="sticky top-0 bg-white p-4">
              <div className="flex justify-between mb-3 border-b border-gray-500 py-1">
                <h2 className="font-semibold text-lg ">Up Next</h2>
                <p>View More...</p>
              </div>

              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 border rounded-lg mb-3 "
              />
            </div>

            <div className="flex flex-col px-5">
              {displayedNext.length > 0 ? (
                displayedNext.map((anc, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-3 border-b items-center"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover">
                        <img src={anc.image} alt="User" className="" />
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-center">
                        {anc.tgl}
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold">{anc.nama}</p>
                      <p className="text-sm text-gray-500">{anc.deskripsi}</p>
                      <div className="flex gap-1 mt-2">
                        {anc.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-orange-200 text-orange-700 px-3 py-1 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">
                  Pemberitahuan tidak ditemukan
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
