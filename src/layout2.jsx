

function App() {

    return (
      <>
    <div className="mt-4 flex justify-center relative">
        <img className="w-[1055px] h-[600px] rounded-2xl" src="https://cdn.pixabay.com/photo/2022/03/06/03/47/market-7050734_1280.jpg" alt="" />
        <button className="w-[300px] h-[62px] bg-blue-500 hover:bg-sky-700 rounded-2xl absolute bottom-0 right-58 cursor-pointer">Buy Now</button>
    </div>

      <div className="flex justify-center items-center min-h-screen m">
            <div className='grid grid-cols-4 h-full'>
                <div className='my-6 mx-15 w-44 bg-gray-100 place-items-center flex flex-col justify-between'>
                    
                    <div className="place-content-center">  
                            <img className="w-44 h-34" src="" alt="" />
                        <h1 className="text-green-800 ml-1"></h1>
                        <p className="flex text-xs ml-1 h-auto"></p>
                    </div>
                        <div className="w-full bg-gray-200 flex justify-end">
                       <p className=""></p>
                       </div>  
                </div>
            </div>
        </div>
    
  
      </>
    )
  }
  
  export default App
  
  
  