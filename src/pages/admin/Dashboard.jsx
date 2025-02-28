import { useEffect, useState } from "react";
import Intiva from "../../assets/intivaLogo.png";
import dudul from "../../assets/dudul.jpg";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";


const ancDumms = [];

export default function DashboardAdmin() {
  const [search, setSearch] = useState("");
  const [showAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAnnounceModalOpen, setIsAnnounceModalOpen] = useState(false);
  const [category, setCategory] = useState("Broadcast");
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userName = "Muhammad Sumbul";

  const getInitial = (name) => {
    if (!name) return "?";
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    return initials.toUpperCase();
  };

  // useEffect(() => {
  //   const fetchAnnouncements = async () => {
  //     try {
  //       const response = await fetch("YOUR_API_URL_HERE"); // Ganti dengan URL API kamu
  //       if (!response.ok) {
  //         throw new Error("Gagal mengambil data");
  //       }
  //       const data = await response.json();
  //       const today = new Date().toISOString().split("T")[0];
  //       const filteredData = data.filter(item => item.tanggal === today);
  //       setAnnouncements(filteredData);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchAnnouncements();
  // }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

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
            <li className="flex cursor-pointer p-1 rounded-lg hover:bg-gray-200">
              Dashboard
            </li>
            <li
              className="flex relative cursor-pointer p-1 rounded-lg hover:bg-gray-200 mt-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Announcement
              <BiChevronDown
                className={`w-4 h-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white shadow-md rounded-lg w-32">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Broadcast
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    Activity
                  </li>
                </ul>
              )}
            </li>
            <li className="flex cursor-pointer p-1 rounded-lg hover:bg-gray-200 mt-2">
              Division Member's
            </li>
            <button
              className="mt-4 bg-[#FBA518] text-white px-4 py-2 rounded-lg hover:bg-[#fb8a18] w-full"
              onClick={() => setIsAnnounceModalOpen(true)}
            >
              + Add Announcement
            </button>
          </ul>

          {/* Add Announcement Modal */}
          {isAnnounceModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
              <div className="bg-white p-5 rounded-lg shadow-lg w-3/4 lg:w-1/3">
                <h2 className="text-lg font-semibold mb-4">Add Announcement</h2>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full p-2 border rounded-lg mb-3"
                />
                <textarea
                  placeholder="Description"
                  className="w-full p-2 border rounded-lg mb-3"
                ></textarea>
                <select
                  className="w-full p-2 border rounded-lg mb-3"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Broadcast">Broadcast</option>
                  <option value="Activity">Activity</option>
                </select>
                <div className="flex gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="Tag 1"
                    className="w-1/3 p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Tag 2"
                    className="w-1/3 p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Tag 3"
                    className="w-1/3 p-2 border rounded-lg"
                  />
                </div>
                <div className="flex justify-end gap-3 pt-5">
                  <button
                    className="outline outline-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white"
                    onClick={() => setIsAnnounceModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button className="bg-[#FBA518] text-white px-4 py-2 rounded hover:bg-[#fb7a18]">
                    Announce
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* profile preview */}
        <div className="shadow-lg rounded-2xl bg-white h-auto lg:h-2/6 flex flex-col lg:flex-col items-center justify-center p-4">
          <div className="flex flex-row gap-2 lg:flex-col lg:items-center">
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg">
              {getInitial(userName)}
            </div>
            <div className="text-start lg:text-center">
              <h2 className="text-sm font-semibold mt-2">Welcome, {userName}!</h2>
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
      <h2 className="font-semibold text-lg border-b border-gray-500 py-2">
        Today's Announcement
      </h2>
      {announcements.length > 0 ? (
        <>
          <div className="flex flex-col">
            <h3 className="mt-2 font-semibold lg:text-2xl">
              {announcements[0].nama}
            </h3>
            <p className="text-sm text-gray-600 lg:text-lg">
              {announcements[0].deskripsi}
            </p>
            <div className="flex gap-2 mt-2">
              {announcements[0].tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-orange-200 text-orange-700 px-3 py-1 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center mt-4">
            <img
              src={ancDumms[0].image || dudul}
              alt=""
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
            />
            <div className="pl-2">
              <h2 className="text-sm font-semibold">{ancDumms[0].nama}</h2>
              <p className="text-xs text-gray-500">Programmer</p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-gray-500 text-lg font-semibold">
            Tidak ada pengumuman hari ini
          </p>
        </div>
      )}
    </div>

            {/* new member */}
            <div className="h-auto lg:h-1/4 bg-cyan-600 rounded-2xl items-center shadow-lg flex justify-between p-4">
              <div className="p-4 text-white flex flex-col">
                <h1 className="text-lg lg:text-2xl font-medium">New Member</h1>
                <p className="text-xs lg:text-md font-light">
                  Adding new member to your division
                </p>
                <p className="mt-4 cursor-pointer text-white hover:text-gray-300 transition duration-100">
                  <Link to="/userlist">All Member list →</Link>
                </p>
              </div>
              <svg
                width="90"
                height="90"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pr-10 text-white hover:text-gray-300 transition duration-100 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50 92.3423C73.385 92.3423 92.3423 73.385 92.3423 50C92.3423 26.615 73.385 7.65766 50 7.65766C26.615 7.65766 7.65766 26.615 7.65766 50C7.65766 73.385 26.615 92.3423 50 92.3423ZM50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM45.4955 27.928C45.4955 25.4402 47.5122 23.4235 50 23.4235C52.4878 23.4235 54.5045 25.4402 54.5045 27.928V45.4955H71.6216C74.1094 45.4955 76.1261 47.5122 76.1261 50C76.1261 52.4878 74.1094 54.5045 71.6216 54.5045H54.5045V71.6217C54.5045 74.1094 52.4878 76.1262 50 76.1262C47.5122 76.1262 45.4955 74.1094 45.4955 71.6217V54.5045H27.9279C25.4402 54.5045 23.4234 52.4878 23.4234 50C23.4234 47.5122 25.4402 45.4955 27.9279 45.4955H45.4955V27.928Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
                <div className="bg-white p-5 rounded-lg shadow-lg w-3/4 lg:w-1/3">
                  <h2 className="text-lg font-semibold mb-4">Add New Member</h2>
                  <input
                    type="file"
                    className="w-full p-2 border rounded-lg mb-3"
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border rounded-lg mb-3"
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-2 border rounded-lg mb-3"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-lg mb-3"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded-lg mb-3"
                  />
                  <div className="flex justify-end gap-3">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Close
                    </button>
                    <button className="bg-[#FBA518] text-white px-4 py-2 rounded">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Up Next */}
          <div className="w-full lg:w-2/4 bg-white shadow-lg rounded-2xl overflow-scroll overflow-x-hidden">
            <div className=" z-0 bg-white p-4">
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
                  Pemberitahuan tidak ada
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
