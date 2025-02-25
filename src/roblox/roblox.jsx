import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import Navbar from "./navblox"
import About from "./aboutblox";
import Store from "./storeblox";
import Server from "./serverblox";

function App() {
    
    return (
        <>
        <Navbar />
      <div className="flex mt-5 flex-col items-center">
      <div className="max-w-4/6">
        <div className="flex gap-1">
        <div className="min-h-full">
            <img src="https://tr.rbxcdn.com/180DAY-955adfa6c50daf08070f0752d63082a8/768/432/Image/Webp/noFilter" alt="" className="h-full w-3000" />
        </div>
        <div className="font-[Roboto] ml-4">
            <h2 className="font-extrabold text-[30px] w-65 text-white">
                [✨PLATES]🚗Midnight Chasers: Highway Racing
                </h2>
            <p className="mt-2 text-[16px] text-white">
                By <strong>Midnight In-Dev</strong>
            </p>
            <p className="mt-1 text-[16px] text-white">
                Maturity: Minimal
            </p>
            <div className="mt-5 flex justify-center">
            <img className="absolute place-self-center" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/play--v1.png" alt="" />
            <button className="w-[300px] h-[62px] bg-blue-500 rounded-md inline-block align-middle"></button>
            </div>
            <div className="mt-7 flex justify-between align-contens-center">
                <div className="flex flex-col items-center gap-2">
                    <img className="w-7 h-7" src="https://img.icons8.com/ios/50/FFFFFF/star--v1.png" alt="" />
                    <p className="text-white text-xs">Favorite</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <img className="w-7 h-7" src="https://img.icons8.com/ios/50/FFFFFF/appointment-reminders--v1.png" alt="" />
                    <p className="text-white text-xs">Notify</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <img className="w-7 h-7" src="https://img.icons8.com/ios/50/FFFFFF/facebook-like--v1.png" alt="" />
                    <p className="text-white text-xs">63K+</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <img className="w-7 h-7" src="https://img.icons8.com/dotty/80/FFFFFF/thumbs-down.png" alt="" />
                    <p className="text-white text-xs">7,760</p>
                </div>
            </div>

        </div>
        </div>
            
            <div className="text-white flex w-full mt-7">
                <Link to="/aboutblox" 
                    className="text-white text-center bg-[#272930] w-1/3 font-semibold py-2">About
                </Link >

                <Link to="/storeblox" 
                    className="text-white text-center bg-[#272930] w-1/3 font-semibold py-2">Store
                </Link >
                
                <Link to="/serverblox" 
                className="text-white text-center bg-[#272930] w-1/3 font-semibold py-2">Server
                </Link >
            </div>
            <Router>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/aboutblox" element={<About />} />
                <Route path="/storeblox" element={<Store />} />
                <Route path="/serverblox" element={<Server />} />
            </Routes>
            </Router>
      </div>
      </div>
      </>
    )
  }
  
  export default App
  
  
  