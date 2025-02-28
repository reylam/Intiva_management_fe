import { useState } from 'react';
// import IntivaLogo from '../../assets/intivaLogo.png';
// import KucingProfile from '../../assets/dudul.jpg';
// import upsNext from '../public/up';
// import profileNext from '../public/profile';

const Upnext = () => {
    const [nexts] = useState(upsNext);
    const [profiles] = useState(profileNext);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredNexts = nexts.filter(({ title, description, category, activity }) => {
        const query = searchQuery.toLowerCase();
        return [title, description, category, activity].some((field) => field.toLowerCase().includes(query));
    });

    return (
        <div className="min-h-screen w-full h-full bg-gray-100 gap-6 p-5 flex flex-col lg:flex-row font-[Poppins]">
            <aside className="w-full lg:w-2/12 flex flex-col gap-3">
                <div className="border border-gray-200 shadow-lg rounded-2xl bg-white h-auto lg:h-4/6 p-4">
                    <div className="flex gap-2 items-center">
                        <img src={IntivaLogo} alt="Logo" className="w-10" />
                        <div>
                            <h1 className="text-sm font-semibold">Intiva</h1>
                            <p className="text-sm font-semibold">Announcement</p>
                        </div>
                    </div>
                    <ul className="text-sm mt-7">
                        <li className="flex gap-3">Dashboard</li>
                        <li className="flex gap-3 mt-3">Announcement</li>
                    </ul>
                </div>
                <div className="shadow-lg rounded-2xl bg-white h-auto lg:h-2/6 flex flex-col items-center p-4">
                    <img src={KucingProfile} alt="User" className="w-16 h-16 rounded-full" />
                    <h2 className="text-sm font-semibold mt-2">{profiles[0]?.name}</h2>
                    <p className="text-xs text-gray-500">{profiles[0]?.divisi}</p>
                    <button className="mt-2 text-red-500 border border-red-500 px-4 py-1 rounded-full text-sm">Log Out</button>
                </div>
            </aside>
            <main className="w-full lg:w-10/12 flex flex-col gap-3">
                <div className="bg-white w-full rounded-2xl shadow-lg flex flex-col p-5 lg:p-7">
                    <h1 className="font-semibold text-xl lg:text-2xl border-b border-gray-300 py-2">Up Next</h1>
                    <div className="mt-6 relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-gray-200 w-full p-3 pl-10 rounded-lg mb-3 shadow-lg focus:outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        {filteredNexts.length > 0 ? (
                            filteredNexts.map(({ title, description, category, activity, date }, index) => (
                                <div key={index} className="flex flex-col sm:flex-row bg-white p-4 rounded-xl shadow-md gap-4">
                                    <img src={KucingProfile} alt="User" className="w-16 h-16 rounded-full p-2 self-center sm:self-start" />
                                    <div className="flex flex-col sm:flex-row sm:w-full justify-between gap-4">
                                        <div className="flex flex-col justify-center">
                                            <h2 className="text-sm font-semibold">{title}</h2>
                                            <p className="text-xs text-gray-500">{description}</p>
                                        </div>
                                        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
                                            {[category, activity].map((tag, idx) => (
                                                <span key={idx} className="border border-orange-700 text-orange-500 rounded-full text-xs px-4 py-1">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex justify-end items-center text-sm text-gray-600">{date}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No results found for "{searchQuery}"</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Upnext;
