import React from "react";

const Home = () => {
    return (
        <div className="flex flex-row-2">
            <div className="grid grid-flow-row-2 bg-pink-500 pl-32 pt-20 mr-44 w-full">
                <p className="text-white text-dmSans text-9xl font-extrabold mt-40 ml-24">We make <br /> skincare <br /> Intelligent</p>
                <p className="text-white text-dmSans text-9xl font-extrabold mt-24 ml-24 pb-40">COS <span className="text-gray-700">IQ</span></p>
            </div>
            <div className="w-40 white-part">

                <img
                    src="https://i.imgur.com/SgsTrMW.png"
                    class=" h-4/6 max-w-2xl z-10 -ml-96 mt-36 serum"
                    alt="" />
            </div>
        </div>
    );
}

export default Home;