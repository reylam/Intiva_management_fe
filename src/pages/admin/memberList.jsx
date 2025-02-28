import { useState } from "react";
import Intiva from "../../assets/intivaLogo.png";
import dudul from "../../assets/dudul.jpg";

export default function MemberList() {
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gray-100 p-5 px-7 font-[Poppins] flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-2/12 flex flex-col gap-3">
        <div className="border border-gray-200 shadow-lg rounded-2xl bg-white h-4/6 p-4">
          <div className="flex gap-2 items-center">
            <img src={Intiva} alt="Logo" className="w-10" />
            <div>
              <h1 className="text-sm font-semibold">Intiva</h1>
              <p className="text-sm font-semibold">Announcement</p>
            </div>
          </div>
          <ul className="text-sm mt-7 space-y-3">
            <li>Dashboard</li>
            <li>Announcement</li>
          </ul>
        </div>

        {/* Profile Section */}
        <div className="shadow-lg rounded-2xl bg-white h-2/6 flex flex-col items-center justify-center p-4">
          <img src={dudul} alt="" className="w-16 h-16 rounded-full" />
          <h2 className="text-sm font-semibold mt-2">Muhammad Sumbul</h2>
          <p className="text-xs text-gray-500">Programmer</p>
          <button className="mt-2 text-red-500 border border-red-500 px-4 py-1 rounded-full text-sm hover:bg-red-500 hover:text-white transition duration-200">
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="bg-white shadow-lg rounded-lg p-5 w-full lg:w-10/12 ml-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">User List</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setUserModalOpen(true)}
              className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg shadow-lg"
            >
              + Add
            </button>
            <input
              type="text"
              className="border p-2 rounded shadow-lg"
              placeholder="Search"
            />
          </div>
        </div>

        {/* User Table */}
        <div className="overflow-y-auto">
          <div className="w-full rounded-lg">
            <div className="flex flex-col gap-3">
              <div className="bg-gray-200 flex rounded-lg p-3 items-center justify-between">
                <div className="flex items-center gap-3 w-2/6">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <p className="font-semibold">Nama</p>
                </div>
                <div className="w-4/6 text-center">Gmail</div>
                <div className="w-4/6 text-center">Divisi</div>
                <div className="flex gap-4 px-3">
                  <button className="text-red-500 hover:text-red-700">🗑️</button>
                  <button onClick={() => setEditModalOpen(true)}>✏️</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add User Modal */}
      {userModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-30">
          <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
            <h2 className="text-lg font-semibold mb-4">Add New Member</h2>
            <input type="file" className="w-full p-2 border rounded-lg mb-3" />
            <input type="text" placeholder="Name" className="w-full p-2 border rounded-lg mb-3" />
            <input type="text" placeholder="Username" className="w-full p-2 border rounded-lg mb-3" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded-lg mb-3" />
            <input type="password" placeholder="Password" className="w-full p-2 border rounded-lg mb-3" />
            <div className="flex justify-end gap-3">
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setUserModalOpen(false)}>Close</button>
              <button className="bg-[#FBA518] text-white px-4 py-2 rounded">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-30">
          <div className="bg-white p-8 flex flex-col items-center rounded-lg shadow-lg w-96">
            <button className="self-end bg-gray-300 hover:bg-gray-400 rounded-full p-2" onClick={() => setEditModalOpen(false)}>✖️</button>
            <h2 className="text-3xl font-bold text-center mb-6">Edit User</h2>
            <input type="text" className="border p-3 rounded-lg w-full mb-3" placeholder="Name" />
            <input type="text" className="border p-3 rounded-lg w-full mb-3" placeholder="Email Address" />
            <h1>Select Division:</h1>
            <select className="w-full border p-2 rounded-lg mb-3">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <button className="mt-4 bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-lg w-full">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}


