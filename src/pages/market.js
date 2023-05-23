import React from "react";

const Market = () => {
    return (
        <div className="flex flex-row-2">
            <div className="white-part w-full pb-40">
                <p className="text-black text-dmSans text-8xl font-extrabold mt-28 ml-24">Market</p>
                <p className="text-dmSans text-5xl font-normal mt-10 ml-24">The worldwide Beauty & Personal Care <br />
                    market is a <span className="font-semibold">$580 Billion</span> behemoth out<br />
                    of which Indian skincare market is<br />
                    worth <span className="font-semibold">$7.6 Billion</span> <br /> <br />
                    The industry is growing with a fast<br />
                    changing landscape in India and there is<br />
                    high acceptance and love towards new<br />
                    age, <span className="font-semibold">scientifically backed</span> skincare<br />
                    brands amongst the <span className="font-semibold">genZ market</span>.</p>
            </div>

            <div className="bg-pink-500 w-full">
                <img
                    src="https://i.imgur.com/RZHZ2JW.png"
                    class="h-96 max-w-3xl mt-28 ml-24"
                    alt="" />

                <p className="text-white font-semibold text-4xl ml-36 mt-16">Indian Skincare Industry (TAM) is <br />
                    growing at a CAGR of 9.5%</p>

                <p className="text-white font-normal text-3xl ml-32 mt-10 pb-10">A paradigm shift in the market with a huge upsurge <br />
                    in the demand for skincare that is based on Active<br />
                    Molecules with proven, scientific results<br />
                    CosIQ is geared to gain a sizeable market share<br />
                    while sustaining accelerated growth for the next five<br />
                    years becoming a market leader</p>
            </div>
        </div>
    );
}

export default Market;